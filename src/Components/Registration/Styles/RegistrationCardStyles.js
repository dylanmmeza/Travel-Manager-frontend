import { styled } from "styletron-react"

export const RegistrationCardDiv = styled('div', {
    position: 'absolute',
    width: '400px',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#E0E0E0',
    border: '2px solid #3B3B3B',
    borderRadius: '40px',
    overflow: "hidden"
})
export const RegistrationCardHeader = styled('div', {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
})
export const Title = styled('div', {
    color: "black",
    flex: '8',
    fontSize: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Pacifico, cursive',

})
export const TitleOppositeLink = styled('div', {
    color: "black",
    flex: '2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})
export const RegistrationCardContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    flex: '6',
    justifyContent: 'center',
    alignItems: 'space-evenly',
    borderTop: '1px solid grey',
    borderBottom: '1px solid grey',
    margin: '0px 20px'
})

export const RegistrationCardFooter = styled('div', {
    display: 'flex',
    flex: '2',
    alignItems: 'center',
    justifyContent: 'start',
    overflow: "hidden"
})

export const ProgressBarContainer = styled('div', (props) => {
    return {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0px 0px 0px 40px ',
        left: props.showProgressBar ? '30px' : '-135px',
        transition: 'all 0.5s ease-in-out',
    }
});

export const ProgressBarDiv = styled('div', (props) => {
    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        visibility: props.showProgressBar ? 'visible' : 'hidden',
        transition: 'all 0.5s ease-in-out',
    }
});

export const ButtonContainer = styled('div', (props) => {
    return {
        position: 'absolute',
        flex: '2',
        right: props.showProgressBar ? '10px' : '135px',
        transition: 'all 0.5s ease-in-out'
    }
});

export const StyledButton = styled('button', {
    fontFamily: 'inherit',
    display: 'inline-block',
    width: '100px',
    height: '50px',
    lineHeight: '2.5em',
    margin: '10px 20px',
    position: 'relative',
    overflow: 'hidden',
    border: '2px solid #547793',
    transition: 'color 0.5s',
    zIndex: '1',
    fontSize: '17px',
    borderRadius: '6px',
    fontWeight: '500',
    color: '#547793',
    ':before': {
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        backgroundColor: '#547793',
        height: '150px',
        width: '200px',
        borderRadius: '50%',
    },
    ':hover': {
        color: '#F2B64C',
        backgroundColor: '#547793',
        transition: 'all 0.5s',
    },
    ':before': {
        top: '100%',
        left: '100%',
        transition: 'all 0.5s',
    },
    ':hover:before': {
        top: '-30px',
        left: '-30px',
    },
    ':active:before': {
        background: '#3a0ca3',
        transition: 'background 0s',
    },
});


export const ErrorMessageDiv = styled('div', (props) => {
    return {
        display: props.active ? "flex" : "none",
        color: 'red',
        flex: '.05',
    }
});