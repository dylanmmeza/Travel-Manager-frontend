import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRPCRedux } from 'fusion-plugin-rpc-redux-react';
import { styled } from "styletron-react";
import { Link } from 'fusion-plugin-react-router';

import SearchBar from './Components/common/search';
import UserAvatar from './Components/common/user_avatar';

const tab_choices = [
    {
        url: '/',
        title: 'Home',
    }, {
        url: '/trips',
        title: 'Trips',
    },
    {
        url: '/ExplorePage',
        title: 'Explore',
    }]

const HeaderWrapper = styled('div', () => ({
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: '3%',
    paddingLeft: '3%',
    alignItems: 'center',
    gap: '10px',
    position: 'relative',
    borderBottom: '2px solid grey',
    borderBottom: '2px solid grey',
}));

const PageTabs = styled(Link, (props) => ({
    color: props.active ? 'black' : 'grey',
    textDecoration: props.active ? 'line' : 'none',
    fontFamily: 'cursive',
    fontWeight: props.active ? 'bold' : 'normal',
    fontSize: '24px',
    maxHeight: '100%',
}))


const PageChoices = styled('div', () => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    width: '30%'
}));

const AppTitleLogo = styled(Link, () => ({
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'cursive',
    fontFamily: 'Pacifico, cursive',
    fontSize: '40px',
    maxWidth: '25%',
}))

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageChosen: '/'
        }
        this.PageChange = this.PageChange.bind(this);
    }

    PageChange(pageUrl) {
        this.setState({
            pageChosen: pageUrl
        })
    }


    render() {
        const { children } = this.props

        const Tabs = tab_choices.map((t) =>
            <PageTabs key={t.title} to={t.url} active={window.location.pathname === t.url} onClick={() => { this.PageChange(window.location.pathname) }}> {t.title}</PageTabs >
        )

        return (
            <div>
                <HeaderWrapper>
                    <AppTitleLogo key={'home'} to={'/'} onClick={() => { this.PageChange(window.location.pathname) }}>
                        Wanderlust
                    </AppTitleLogo>
                    <PageChoices>
                        {Tabs}
                    </PageChoices>
                    <SearchBar></SearchBar>
                    <UserAvatar PageChange={this.PageChange}></UserAvatar>
                </HeaderWrapper>
                <div>{children}</div>
            </div >
        )
    }
}

const rpcs = [
    withRPCRedux(""),
];

const mapStateToProps = (state, ownProps) => {
    const {
        loggedInUser: loggedInUser,
    } = state.users;

    return {
        ...ownProps,
        loggedInUser,
    };
};

const hoc = compose(
    ...rpcs,
    connect(mapStateToProps),
);

export default hoc(Header);
