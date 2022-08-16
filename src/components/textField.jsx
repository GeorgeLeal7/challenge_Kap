import React from 'react';

import { Field, Input, Label } from './styled';

const TextField = ({value, label, onChange}) => {
    label = 'Primeiro desafiu mermão:'

    const handleChange = (event) => {
        const value = event.target.value;

        console.log(value);
        onChange?.(value)
    }

    return (
        <Field>
            <Label>{label}</Label>
            <Input value={value} onChange={handleChange} placeholder='Digite algo...'/>
        </Field>
    )
}

export default TextField;