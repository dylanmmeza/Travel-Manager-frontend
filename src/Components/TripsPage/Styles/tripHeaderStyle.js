import { styled } from "styletron-react";

export const ViewTypeTabBarStyle = {
    flex: '2.5',
    // gap: '10%',
    textAlign: 'center',
};

export const ViewTypeTabStyle = {
    width: '125px',
    height: '40px',
    fontSize: '32px',
    borderRadius: '30px',
    boxSizing: 'border-box'
};

export const ListTypeTabBarStyle = {
    flex: '3',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
};

export const ListTypeTabStyle = {
    border: '1px solid',
    width: '175px',
    height: '30px',
    textAlign: 'center',
    fontSize: '24px',
    backgroundColor: '#F7F2EF',
    borderRadius: '30px',
    boxSizing: 'border-box'
};


export const SearchBarWrapper = styled('div', {
    flex: '1',
})

export const AddTripButtonWrapper = styled('div', {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})