import React, { Children } from 'react';
import Icon from './icons';


const modalMoveWrapper = {
    position: 'fixed',
    top: '0%',
    left: '0%',
    width: '100%',
    height: '100%',
    zIndex: '9999',
    backgroundColor: 'rgba(0,0,0, 0.65)',
}

const modal = {
    position: 'fixed',
    height: '45%',
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
}


const modalContent = {
    height: '100%',
    width: '100%',
    backgroundColor: '#B4E3E5',
    border: '1px solid',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',

}

export default class MoveableModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalX: 0,
            modalY: 0,
            isMouseDown: false
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    componentDidMount() {
        const modal = document.querySelector('.modal');
        const modalWidth = modal.offsetWidth;
        const modalHeight = modal.offsetHeight;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        this.setState({
            modalX: (viewportWidth - modalWidth) / 2,
            modalY: (viewportHeight - modalHeight) / 2
        });
    }

    handleMouseDown = (event) => {
        this.setState({
            isMouseDown: true,
            initialX: event.clientX - this.state.modalX,
            initialY: event.clientY - this.state.modalY
        });
    }

    handleMouseMove = (event) => {
        if (this.state.isMouseDown) {
            let newX = event.clientX - this.state.initialX;
            let newY = event.clientY - this.state.initialY;

            this.setState({
                modalX: newX,
                modalY: newY
            });
        }

    }

    handleMouseUp = () => {
        this.setState({ isMouseDown: false });
    }

    render() {
        const { children, HideModal } = this.props
        return (
            <div
                style={modalMoveWrapper}
                onMouseDown={this.handleMouseDown}
                onMouseMove={this.handleMouseMove}
                onMouseUp={this.handleMouseUp}
            >
                <div className="modal" style={{ ...modal, ...{ left: this.state.modalX, top: this.state.modalY } }} >
                    <div className="modal-content" style={modalContent}>
                        <div
                            className='Modal Header'
                            style={{ width: '100%', height: '10%', display: 'flex', alignItems: 'center', paddingLeft: '2%' }}
                        >
                            <Icon
                                selectedValue={'x'}
                                selectedStyle={'black'}
                                selectedSize={'1x'}
                                selectedFn={HideModal}
                            ></Icon>

                        </div>
                        {children}
                    </div >
                </div>
            </div>
        );
    }
}