import React, {FC} from 'react';
import {Button} from "../Button/Button";
import {ValuesBox} from "./ValuesBox/ValuesBox";
import './Settings.css'

type SettingsPropsType = {
    minCount: number
    maxCount: number
    error: boolean
    editing: boolean
    // setEditing: (editing: boolean) => void
    // setMinCount: (minCount: number) => void
    // setMaxCount: (maxCount: number) => void
    saveSettings: () => void
}

export const Settings: FC<SettingsPropsType> = ({   minCount,
                                                    maxCount,
                                                    error,
                                                    editing,
                                                    saveSettings
                                                }) => {


    return (
        <div className="settings">
            <ValuesBox minCount={minCount}
                       maxCount={maxCount}/>

            <div className="btn-group">
                <Button title='Set' disabled={!editing || error} callback={saveSettings}/>
            </div>
        </div>
    );
};