import React, { Component } from 'react';

class TabBar extends Component {
    render() {
        const {
            tabOptions,
            selectedValue,
            selectFn,
            styleWrapper,
            styleTab
        } = this.props;

        const default_style_wrapper = {
            display: 'flex',
            justifyContent: 'center',
        }
        const active_tab = {
            color: 'white',
            backgroundColor: '#366183',
            cursor: 'pointer'
        }
        const tab = {
            color: 'black',
            cursor: 'pointer'
        }
        return (
            <div style={{ ...default_style_wrapper, ...styleWrapper }}>
                {
                    tabOptions.map(opt => (
                        <div
                            style={opt.label === selectedValue ? { ...styleTab, ...active_tab } : { ...styleTab, ...tab }}
                            onClick={() => { selectFn(opt.label) }}
                            key={opt.value}
                        >
                            {opt.label}
                        </div>
                    ))
                }
            </div>)
    }
}

export default TabBar