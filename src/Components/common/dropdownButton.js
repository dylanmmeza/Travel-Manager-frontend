import React, { useState } from "react";
import { styled } from "styletron-react";

const DropDownContainer = styled("div", {
    position: 'relative',
    display: 'inline-block',
    // display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    overflow: "hidden",
});

const ButtonDiv = styled("div", {
    flex: '1',
});

const Button = styled("button", {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "1px solid black",
    borderRadius: '40px',
    backgroundColor: '#5E9374',
    width: '100px',
    height: '40px',
    cursor: "pointer"
});

export const DropdownDiv = styled('div', (props) => {
    return {
        flex: '9',
        position: 'absolute',
        display: 'none',
        width: '100px',
        zIndex: '2',
        flexDirection: "column",
        justifyContent: 'start',
        top: props.active ? '160px' : '230px',
        visibility: props.active ? 'visible' : 'hidden',
        border: '1px solid',
        transition: 'all 0.5s ease-in-out',
        backgroundColor: 'white',
    }
});

const DropdownOption = styled("div", {
    padding: "10px",
    cursor: "pointer",
    whiteSpace: 'normal',
    ":hover": {
        backgroundColor: "#f1f1f1"
    }
});


const Dropdown = ({ dropdown_options, selectFn }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const temp_list = dropdown_options.map((opt) => {
        return <DropdownOption onClick={selectFn}>{opt}</DropdownOption>
    })
    return (
        <DropDownContainer onMouseLeave={() => setShowDropdown(false)}>
            <ButtonDiv
                onMouseEnter={() => setShowDropdown(true)}
            >
                <Button>Dropdown</Button>
            </ButtonDiv>
            {showDropdown ? temp_list : null}
        </DropDownContainer>
    );
};

export default Dropdown;
