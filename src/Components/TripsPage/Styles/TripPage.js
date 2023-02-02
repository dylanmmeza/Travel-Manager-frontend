import { Link } from 'fusion-plugin-react-router';
import { styled } from "styletron-react";

// --------------------TripsPage--------------------
export const Page = styled('div', {
    height: '90vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const TripPage = styled('div', {
    height: '95%',
    width: '90%',
    border: '2px solid',
    display: 'flex',
    flexDirection: 'column',
});

export const TripHeader = styled('div', {
    display: 'flex',
    flex: '1',
    minHeight: '10%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottom: '2px solid',
});


export const TripsDiv = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    flex: '9',
    overflowY: 'hidden'
});


// --------------------Trip Page--------------------

export const TripListDiv = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    flex: '4',
    backgroundColor: "#EBEBEB"

});

export const TripListSubDiv = styled('div', {
    padding: '1%',
    display: 'flex',
    flexDirection: 'column',
    flex: '9.5',
    alignItems: 'start',
    rowGap: '3%',
    overflowY: 'scroll',
    borderTop: 'none',
});

export const TripListHeader = styled('div', {
    flex: '.5',
    borderBottom: '1.5px solid grey',
    display: 'flex',
    // flexDirection: 'column',
    paddingLeft: '10px',
    gap: '10px',
    alignItems: 'center'
});

export const SortTypeDiv = styled('div', {
    color: 'black',
    display: 'flex',
    flex: '9'
})

export const ExpandedSummaryDiv = styled('div', {
    padding: '1%',
    display: 'flex',
    flexDirection: 'column',
    flex: '6',
    gap: '3%',
    borderLeft: '2px solid black',
    backgroundColor: "#EBEBEB",
    zIndex: '1'
});