import { useEffect, useState } from "react";

const CustomTitle = () => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        document.title = counter.toString();
    }, [counter]);

    return (
        <>
            <p
                onClick={() => setCounter(prev => prev + 1)}
                style={{fontSize: `${counter*1.2}rem`}}
            >
                {counter}
            </p>
        </>
    );
};

export default CustomTitle;
