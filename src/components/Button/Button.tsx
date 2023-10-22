import React, {FC} from "react";

type ButtonPropsType = {
    title: string
    disabled?: boolean
    callback: () => void
}

export const Button: FC<ButtonPropsType> = ({title, disabled, callback}) => {
    return (
        <button disabled={disabled} onClick={callback}>
            {title}
        </button>
    )
}