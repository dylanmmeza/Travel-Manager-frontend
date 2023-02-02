import React from "react"
import InputField from "./InputField"
import { useState } from "react"
import { useEffect } from "react"


export default function Card({ CardSteps, CardSelected, InputHandleChange }) {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        const newFields = CardSteps[CardSelected].stepContent.map((label) => {
            console.log(label)
            return (
                <InputField label_info={label} InputHandleChange={InputHandleChange} />
            )
        });
        setFields(newFields);
    }, [CardSelected, CardSteps]);

    console.log(CardSteps)
    return (
        <div
            className="CardContentDiv"
            style={CardSteps[CardSelected].cardStyle}
        >
            {fields}
        </ div >
    )
}