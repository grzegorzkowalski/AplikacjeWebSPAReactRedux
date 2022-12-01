import {useEffect, useState} from "react";
import ClockDate from "./ClockDate";
import ClockTime from "./ClockTime";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalID);
        }
    }, []);

    return (
        <>
            <ClockDate date={time.toLocaleDateString()} />
            <ClockTime time={time.toLocaleTimeString()} />
        </>
    );
};

export default Clock;
