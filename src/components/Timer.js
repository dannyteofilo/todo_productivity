import { useState, useEffect } from "react"
import React, { useCallback } from 'react';
import { IconToggle } from 'react-mdl';

export const Timer = ({ time, play, finish }) => {

    const [seconds, setSeconds] = useState(time);

    const [start, setStart] = useState(play);
    const [timeFormat, setTimeFormat] = useState('0:00')

    const oneMinute = 60, evaluateOneMinute = 59, evaluateZeroMinutes = 0, timeOutSeconds = -1, evaluateTenSeconds = 9, lastSecond = 2;
    let interval = null, minutesLeft = 0, secondsLeft = 0;

    minutesLeft = Math.floor(seconds / oneMinute);
    secondsLeft = seconds - minutesLeft * oneMinute;

    const countDown = () => {
        interval = setInterval(() => {
            if (start) {
                setSeconds(seconds => seconds - 1);
                secondsLeft--;
                if (secondsLeft === timeOutSeconds && minutesLeft > evaluateZeroMinutes) {
                    secondsLeft = evaluateOneMinute;
                    minutesLeft--;
                }
                if (seconds < lastSecond) {
                    setStart(!start)
                    clearInterval(interval);
                }
            }
        }, 1000);
    }

    const makeFormat = useCallback(() => {
        if (secondsLeft > evaluateTenSeconds) {
            return `${minutesLeft.toString()}:${secondsLeft.toString()}`;
        } else {
            return `${minutesLeft.toString()}:0${secondsLeft.toString()}`;
        }
    }, [minutesLeft, secondsLeft]);

    const handleStart = () => {
        setStart(!start);
    }

    const handleRestart = () => {
        setSeconds(time);
    }
    useEffect(() => {
        countDown();
        if (seconds === 0) {
            finish()
        }
        return () => {
            clearInterval(interval);
        }
    }, [seconds, start, interval, countDown, finish]);

    useEffect(() => {
        setTimeFormat(makeFormat());
    }, [seconds, makeFormat])


    useEffect(() => {
        setStart(play);
    }, [play])

    return (
        <div className='timer'>
            <IconToggle ripple name={start ? 'pause_arrow' : 'play_arrow'} onClick={handleStart} />
            <IconToggle ripple name="restore" onClick={handleRestart} />
            <div className='time'>
                {timeFormat}
            </div>
        </div>
    )
}
