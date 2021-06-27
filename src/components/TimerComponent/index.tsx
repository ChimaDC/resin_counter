import React from "react";
import "./styles.css";
import moment from "moment";

interface TimerProps {
    timer: number;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const TimerComponent: React.FC<TimerProps> = ({ timer, onClick }) => {
    function getExpectedTime(mins: number) {
        let hours = mins > 60 ? Math.round(mins / 60) : 0;
        let minutes = mins % 60;
        return hours  + ' h  ' + minutes + ' m';
    }

    let totalTime = getExpectedTime(timer);
    let expectedTime = moment(new Date()).add(timer, 'minutes').toDate();

    return (
        <div className = "container">
            <label htmlFor = "Title"> Time required </label>
            <label className = "Timer"> {totalTime}  </label>
            <label className = "ExpectedTime">{"Ready at " 
                + expectedTime.getHours() + ':' + expectedTime.getMinutes()}  
            </label>
            <button onClick = {onClick}> Return </button> 
        </div>
    )
}

export default TimerComponent;