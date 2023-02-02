import React from "react";
import { styled } from "styletron-react";

const StepContainer = styled("div", {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "200px",
});

const CircleContainer = styled('div', {
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

const Step = styled("div", (props) => {
    return {
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        border: '1px solid black',
        // border: props.active ? " 2px solid #F2B64C" : '2px solid black',
        backgroundColor: props.active ? "#F2B64C" : 'none',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: '18px'
    }
});

const Line = styled("div", (props) => {
    return {
        width: "100%",
        height: "2px",
        backgroundColor: props.active ? "#F2B64C" : '#ccc',
    }
});

const StepProgressBar = ({ steps, CardSelected, updateStepCount }) => {
    return (
        <StepContainer>
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <CircleContainer>
                        <Step active={CardSelected == step.stepId} onClick={() => { updateStepCount(step.stepId) }}>
                            {step.stepId}
                        </Step>
                    </CircleContainer>
                    {index !== steps.length - 1 && <Line active={step.stepId < CardSelected} />}
                </React.Fragment>
            ))
            }
        </StepContainer >
    );
};

export default StepProgressBar;
