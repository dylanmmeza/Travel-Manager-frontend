import { styled } from "styletron-react";
import React from "react";
import { Hidden, TextField } from "@mui/material";


export default function InputField({ label_info, InputHandleChange }) {
    return (
        <div className="InputDiv" style={label_info.div_style}>
            <TextField
                key={label_info.label_name}
                id={label_info.label_name}
                error={label_info.errorStatus}
                name={label_info.rpcValue}
                type={label_info.type}
                required={label_info.required}
                label={label_info.label_name}
                defaultValue={label_info.defaultValue}
                onChange={InputHandleChange}
                InputLabelProps={{ shrink: label_info.shrink }}
                style={{ width: '250px', height: '50px' }}>
            </TextField >
        </div>
    );
}