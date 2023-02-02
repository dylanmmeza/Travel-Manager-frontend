import { styled } from "styletron-react";

// --------------------Trip Block--------------------
export const TripBlockDiv = styled('div', (props) => {
    return {
        flex: '1',
        borderRadius: '40px',
        overflow: 'inherit',
        border: props.active ? '2px solid black' : '1px solid black',
        display: 'flex',
        backgroundColor: props.active ? "#C1C9CC" : "#F7F2EF",
        // transition: 'flex 0.4s ease-in-out',
        // transitionDelay: '0.15s',
        transform: props.active ? 'scale(1)' : 'scale(.95)',
        color: props.active ? "#366183" : "black",

        ":hover": {
            border: '2px solid black',
            backgroundColor: props.active ? "#C1C9CC" : "#C1C9CC",
            transform: 'scale(1)'
        },

    }
});

export const TripImageWrapper = styled('div', (props) => {
    return {
        borderRadius: '40px',
        overflow: 'hidden',
        flex: '3',
    }
});

export const InfoDiv = styled('div', {

    display: 'flex',
    flexDirection: 'column',
    gap: '1%',
    flex: '7'
});


// --------- Info Div---------
export const NameIconDiv = styled('div', {
    flex: '2',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
});

export const TripIconWrapper = styled('div', {
    marginTop: '15px',
    marginRight: '20px',
    transform: 'scale(1)',
    ":hover": {
        transform: 'scale(1.2) rotate(10deg)'
    },
});

export const TripNameWrapper = styled('div', {
    fontSize: '40px',
    marginTop: '2%',
    whiteSpace: 'normal',
});

export const TripDateWrapper = styled('div', {
    flex: '1.5',
    fontSize: '24px',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'grey'
});

export const TripOwnerWrapper = styled('div', {
    flex: '1',
    textDecoration: 'none',
    fontSize: '18px',
    textAlign: 'center',
    color: 'grey'
});

export const ShareDiv = styled('div', {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    gap: '2.5%',
    marginRight: '5%',
    paddingTop: '1%',
    paddingBottom: '2%',
});
// --------- Share Div---------
export const AttendeeCount = styled('div', {
    flex: '0 0 auto',
    height: '30px',
    width: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    borderRadius: '50%',
    color: 'black',
    backgroundColor: 'lightgrey',
});

export const TripNumPeople = styled('div', {
    color: 'black',
});

export const AttendeesDiv = styled('div', {
    display: 'flex',
    alignContent: 'space-between',
    justifyContent: 'center',
    color: 'black',

});
export const Attendees = styled('div', {
    width: '25px',
    height: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    borderRadius: '50%',
    backgroundColor: '#80aaff',
    fontSize: '12px',
    fontWeight: 'bold',
});
export const ShareButton = styled('button', {
    flex: '0 0 auto',
    borderRadius: '40px',
    fontSize: '18px',
    color: ' #3377ff',
    ":hover": {
        backgroundColor: "lightGrey"
    },
});
