import React from "react";
import { styled } from "styletron-react";
import Icon from "./icons";
import { Link } from 'fusion-plugin-react-router';


const SearchDiv = styled('div', () => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // width: '10%',
    // height: '150%'
    width: '150px',
    height: '35px'
}));

const SearchForm = styled('form', () => ({
    // width: '90%',
    border: 'none',
    height: 'fit-content'
}));


export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.searchTrips = this.searchTrips.bind(this);
    }

    searchTrips = (event) => {
        event.preventDefault();
        <Link to={'/explore?query=${event.target.value}'}></Link >
    }

    render() {
        return (
            <SearchDiv>
                <SearchForm onSubmit={this.searchTrips}>
                    <input type="text" placeholder="Search" style={{ border: '1px solid grey', height: '150%', fontSize: '20px', width: '110%' }} />
                </SearchForm>
                <Icon selectedValue={'magnifying-glass'} selectedStyle={'grey'} selectedSize={'1x'} ></Icon>
            </SearchDiv >
        );
    }
}