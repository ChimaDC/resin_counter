import React, {SetStateAction, Dispatch} from "react";
import "./styles.css";

interface CounterProps {
    amount?: number;
    onChange: Dispatch<SetStateAction<number>>;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CounterComponent: React.FC<CounterProps> = ({ amount, onChange, onClick }) => {
    return (
        <div className = "container">
            <label htmlFor = "Title"> Insert the amount of resin required </label>
            <input 
                type = "number"
                name = "counter"
                min = "0" 
                value = { amount }
                onChange = {( e ) => { onChange ( e.target.valueAsNumber )}}
            />
            <button onClick = {onClick}> Calculate </button> 
        </div>
    )
}

export default CounterComponent;