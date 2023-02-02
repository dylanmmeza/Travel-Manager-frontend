import { Link } from "fusion-plugin-react-router";
import { styled } from "styletron-react";

// ------------------------------Top Div ------------------------------
export const TopDiv = styled('div', {
    color: 'black',
    flex: '3',
    display: 'flex',
    columnGap: '3%',
});

// --------------------Image--------------------
export const ExpandedSummaryImageWrapper = styled('div', {

    border: '2px double #4d4d4d',
    borderRadius: '13px',
    flex: '3',
});

// --------------------Details--------------------
export const ExpandedSummaryInfoWrapper = styled('div', {
    color: 'black',
    minWidth: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: '6'
});

export const ExpandedSummaryTitleWrapper = styled('div', {
    color: 'black',
    flex: '4.5',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
});

export const ExpandedSummaryNameDateWrapper = styled('div', {
    display: 'flex',
    flex: '8',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    color: 'black',
});

export const ExpandedSummaryName = styled(Link, {
    color: 'black',
    fontSize: '48px',
});

export const ExpandedSummaryDate = styled('div', {
    color: 'grey',
    fontSize: '28px',
});

export const ExpandedSummaryIcon = styled('div', {
    color: 'black',
    marginBottom: '20px',
    flex: '2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const ExpandedSummaryDescriptionWrapper = styled('div', {
    flex: '5',
    border: '1px solid'
});


// ------------------------------LowerDiv------------------------------
export const LowerDiv = styled('div', {
    display: 'flex',
    flexDirection: "row",
    flex: '6.5',
    justifyContent: 'space-around',
    overflow: "hidden"
});

export const FDdiv = styled('div', {
    flex: '5',
    margin: '1%',
    display: 'flex',
    flexDirection: "column",
    border: '1px solid black',
    borderRadius: '40px',
});
export const FDHeader = styled('div', {
    flex: '1.5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottom: '1px solid black',
    fontSize: '24px',
    padding: '0% 10%'
});
export const FDList = styled('div', {
    display: 'flex',
    display: 'column',
    color: 'black',
    flex: '8.5',
    overflowY: 'scroll',
});

export const FDBlockDiv = styled('div', {
    flex: '1',
    margin: '1%',
    display: 'flex',
    flexDirection: "column",
    border: '1px solid black',
    borderRadius: '40px',
});
export const FDIcon1 = styled('div', {
    flex: '1',
    color: 'black'
});

export const FDHeaderName = styled('div', {
    flex: '8',
    textAlign: 'center',
    color: 'black'
});

export const FDIcon2 = styled('div', {
    flex: '1',
    color: 'black'
});
