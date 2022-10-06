import React, { useState, useEffect, useReducer } from 'react';

function Timer (){
    const [time, setTime] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [value, setValue] = useState('');

    // with setTimeout
    useEffect(() => {
        let timeoutId;
        if(isStarted) {
            console.log('Log ::: time ::: ', time);
            timeoutId = setTimeout(() => {
                setTime(time - 1);
                if(time === 1) {
                    setIsStarted(false)
                }
            }, 1000)
        }
        return () => {
            clearTimeout(timeoutId);
        }
    }, [time, isStarted])

    const handleStart = () => {
        if(time <= 0) {
            setTime(+value);
            setValue('');
            setIsStarted(true);
        }
    }
    return (
        <div>
            <input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                type="number"
            />
            <button
                onClick={handleStart}
                disabled={!value.trim()}
            >
                Start timer
            </button>
            <h1>Time: {time}</h1>
            {time > 0 &&
            <button
                onClick={() => setIsStarted(!isStarted)}
            >
                {isStarted ? 'Pause' : 'Continue'} timer
            </button>}
        </div>
    );
}

const ACTION_TYPES = {
    SET_TIME: 'SET_TIME',
    SET_SECONDS: 'SET_SECONDS',
}

let date = new Date();
const initialState = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_TIME: {
            console.log('Log ::: action.payload ::: ', action.payload);
            return action.payload;
        }
        case ACTION_TYPES.SET_SECONDS: {
            const { seconds } = action;
            console.log('Log ::: seconds ::: ', seconds);
            return { ...state, seconds };
        }
        default: return state;
    }
}

function Clock (){
    const [time, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
            setInterval(() => {
                let { hours: h, minutes: m, seconds: s } = time;
                s+=1;
                if(s === 60) {
                    s = 0;
                    m = m + 1;
                }
                if(m === 60) {
                    m = 0;
                    h = h + 1;
                }
                console.log('Log ::: h, m, s ::: ', h, m, s);
                dispatch({
                    type: ACTION_TYPES.SET_TIME,
                    payload: {
                        hours: h,
                        minutes: m,
                        seconds: s,
                    }
                })
            }, 1000)
    }, []);

    const fixTimeStyle = () => {
        let { hours: hour, minutes: minute, seconds: second  } = time;
        if(time.hours < 10) {
            hour = `0${time.hours}`
        }
        if(time.minutes < 10) {
            minute = `0${time.minutes}`
        }
        if(time.seconds < 10) {
            second = `0${time.seconds}`
        }
        return `${hour} : ${minute} : ${second}`;
    }

    return (
        <div>
            <h1>
                Time is {fixTimeStyle()}
            </h1>
        </div>
    );
}

export default Clock;