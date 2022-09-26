import React from 'react';
import "./countdown.css";

export interface DateTimeDisplayProps {
    value: number;
    type: string;
}

const DateTimeDisplay = ({ value, type }: DateTimeDisplayProps) => {
    return (
        <div className="countdown">
            <p>{value}</p>
            <span> {type} </span>
            </div>
    );
};

export default DateTimeDisplay;