import './MiniClock.scss';
import React from 'react'
import { Time } from '../types/Time';

interface MiniClockProps {
    miniclocks: Time
}

function MiniClock({ miniclocks }: MiniClockProps) {
    return (
        <div className="mini-clock">
            <div className={"mini-clock__hand mini-clock__hand-minute" + ` mini-clock__hand-minute--${miniclocks.minutes}`}></div>
            <div className={"mini-clock__hand mini-clock__hand-hour" + ` mini-clock__hand-hour--${miniclocks.hours}`}></div>
        </div>
    )
}

export default MiniClock;