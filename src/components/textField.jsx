import React from 'react';

import styled from 'styled-components'

const TextField = ({value, label, onChange}) => {

    const handleChange = () => {
        const value = "se virem";

        onChange?.(value)
    }

    return (
        <div>
            <span>{label}</span>
            <input value={value} onChange={handled}/>
        </div>
    )
}

export default TextField