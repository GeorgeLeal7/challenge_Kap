import React from 'react';

//import styled from 'styled-components'

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
                <input value={value} onChange={handled}/>
            </Input>
        </Field>
    )
}

export default TextField