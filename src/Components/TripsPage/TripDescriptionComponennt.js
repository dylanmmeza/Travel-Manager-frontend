import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRPCRedux } from 'fusion-plugin-rpc-redux-react';

import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { ExpandedSummaryDescriptionWrapper } from './Styles/ES_styles';


class TripDescriptionComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editor: withReact(createEditor()),
            value: [{
                type: 'paragraph',
                children: [{ text: '' }],
            }],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    initStateFromProps() {
        const {
            trip_description,
            trip_uuid,
        } = this.props;
        this.setState({
            slateKey: trip_uuid,
            value: [{
                type: 'paragraph',
                children: [{ text: trip_description }],
            }],
        })
    }

    componentDidMount() {
        this.initStateFromProps();

    }

    componentDidUpdate(prevProps) {
        if (prevProps.trip_uuid != this.props.trip_uuid) {
            console.log('updating state from props')
            this.initStateFromProps();
        }
    }

    handleChange(newValue) {
        this.setState({ value: newValue });
    }

    handleKeyDown = (event) => {
        const {
            update_trip,
            trip_uuid
        } = this.props

        if (event.key === 'Enter') {
            update_trip({ trip_description: this.state.value[0].children[0].text, trip_uuid: trip_uuid })
            this.state.editor.selection = null
        }
    }

    render() {

        return (
            <ExpandedSummaryDescriptionWrapper>
                <Slate key={this.state.slateKey} editor={this.state.editor} value={this.state.value} onChange={this.handleChange}>
                    <Editable onKeyDown={this.handleKeyDown} />
                </Slate>
            </ExpandedSummaryDescriptionWrapper>
        );
    }
}


const rpcs = [
    withRPCRedux("update_trip"),
];

const mapStateToProps = (state, ownProps) => {
    const {
        updating: updating,
        updated: updated,
        TripDetails: TripDetails
    } = state.Trips;

    return {
        ...ownProps,
        updating,
        updated,
        TripDetails
    };
};

const hoc = compose(
    ...rpcs,
    connect(mapStateToProps),
);

export default hoc(TripDescriptionComponent);