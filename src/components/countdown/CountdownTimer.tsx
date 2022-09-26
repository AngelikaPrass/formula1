import React from 'react';
import { useCountdown } from './useCountdown';
import ShowCounter from "./showCounter";


export interface CountdownTimerProps {
    targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

        return (
            <div className={"countdown-wrapper"}>
            <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
            </div>
    );
};

export default CountdownTimer;