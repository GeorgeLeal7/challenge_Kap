import React from 'react';

import { Field, Input } from './styled';

const TextField = ({value, label, onChange}) => {

    const handleChange = () => {
        const value = "se virem";

        onChange?.(value)
    }

    return (
        <Field>
            <span>{label}</span>
            <Input>
                <input value={value} onChange={handleChange}/>
            </Input>
        </Field>
    )
}

export default TextField;