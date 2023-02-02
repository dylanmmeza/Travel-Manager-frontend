import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconOptions } from '../../Static/icon_list';

//test
export default class Icon extends Component {
    render() {
        const {
            selectedValue = null,
            selectedStyle = 'black',
            selectedSize = '1x',
            selectedFn = null,
            styleIcon = {}
        } = this.props;

        return (
            <div style={styleIcon}>
                {
                    IconOptions.map(opt => (
                        opt.icon == selectedValue ? <FontAwesomeIcon
                            // key={selectedValue}
                            icon={selectedValue}
                            size={selectedSize || '1x'}
                            color={selectedStyle}
                            onClick={selectedFn}
                        /> : ''
                    ))
                }
            </div >
        )
    }
}