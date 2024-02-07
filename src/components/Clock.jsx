import React, { useEffect, useState } from 'react';

export const Clock = () => {
    const [time, setTime] = useState(new Date());
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (isRunning) {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);

        }
        
    }, [!isRunning]);

    function stopTime() {
        setIsRunning(false)

    }
    
    function resumeTime() {
        setIsRunning(true)
    }



    return (
        <>
            <p>Time: {time.toLocaleTimeString()}</p>
            <button onClick={stopTime}>Stop</button>
            <button onClick={resumeTime}>Resume</button>
        </>
    );
};
