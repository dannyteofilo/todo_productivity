import { useState, useEffect } from "react"
import React from 'react';
import { Icon, IconToggle } from 'react-mdl';

export const Timer = ({ time, play, finish }) => {

    const [seconds, setSeconds] = useState(time);

    const [start, setStart] = useState(play);
    const [timeFormat, setTimeFormat] = useState('0:00')

    const oneMinute = 60, evaluateOneMinute = 59, evaluateZeroMinutes = 0, timeOutSeconds = -1, evaluateTenSeconds = 9, lastSecond = 2;
    let interval = null, minutesLeft = 0, secondsLeft = 0, arrInterval = [];

    useEffect(() => {
        minutesLeft = Math.floor(seconds / oneMinute);
        secondsLeft = seconds - minutesLeft * oneMinute;
        console.log('seconds : ', seconds);
        if (seconds === 0) {
            finish()
        }
        countDown();
        return () => {
            clearInterval(interval);
        }
    }, [start, seconds]);

    useEffect(() => {
        setStart(play);
    }, [play])

    const handleStart = () => {
        setStart(!start);
    }

    const handleRestart = () => {
        setTimeFormat(makeFormat());
        setSeconds(time);
    }

    const makeFormat = () => {
        if (secondsLeft > evaluateTenSeconds) {
            return `${minutesLeft.toString()}:${secondsLeft.toString()}`;
        } else {
            return `${minutesLeft.toString()}:0${secondsLeft.toString()}`;
        }
    }

    const countDown = () => {
        let format = '';
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
                setTimeFormat(makeFormat())
            }
        }, 1000);
    }

    return (
        <div className='timer'>
            <IconToggle ripple name={start ? 'pause_arrow' : 'play_arrow'} onClick={handleStart} />
            <IconToggle ripple name="restore" onClick={handleRestart} />
            <div className='time'>
                {timeFormat}
            </div>
            <Icon name="timer" />
        </div>
    )
}
