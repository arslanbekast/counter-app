import React from 'react';
import {Button} from "../Button/Button";
import {ValuesBox} from "./ValuesBox/ValuesBox";
import './Settings.css'

export const Settings = () => {
    return (
        <div className="settings">
            <ValuesBox />
            <div className="btn-group">
                <Button title='Set' disabled={false} callback={()=>{}}/>
            </div>
        </div>
    );
};