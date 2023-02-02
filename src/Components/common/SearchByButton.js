
import React, { Component } from 'react';
import { styled } from 'styletron-react';

const search_options = [
    {
        sort_value: 'trip_name',
        label: "A-z"
    },
    {
        sort_value: 'start_time',
        label: "Date"
    },
    {
        sort_value: 'trip_icon',
        label: "Icon"
    },
]

const Button = styled('div', (props) => {
    return ({
        backgroundColor:
            props.sortorder === 'Ascending' && props.sorttype === props.opt
                ? '#FBC057'
                : props.sortorder === 'Descending' && props.sorttype === props.opt
                    ? '#65A780'
                    : '#F7F2EF',
        // color: 'white',
        padding: '5px ',
        border: '1px solid',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',
        height: '10px',
        borderRadius: '50px',
    })
});

class SortByButton extends Component {
    render() {
        const { sortOrder, sortType, changeType } = this.props
        return (
            search_options.map(opt => (
                <Button key={opt.label} onClick={() => changeType(opt.sort_value)} sortorder={sortOrder} sorttype={sortType} opt={opt.sort_value}>
                    {opt.label}
                </Button>
            ))
        );
    }
}

export default SortByButton;
