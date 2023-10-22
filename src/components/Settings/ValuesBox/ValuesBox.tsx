import React from 'react';
import {ValueBox} from "../ValueBox/ValueBox";
import './ValuesBox.css'

export const ValuesBox = () => {
    return (
        <div className='valuesBox'>
            <ValueBox title="Max value" />
            <ValueBox title="Min value" />
        </div>
    );
};