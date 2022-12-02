import { useState } from "react";

const TextTyper = ({text}) => {
    const [index, setIndex] = useState(1);

    const increment = () => {
        if (index + 1 < text.length + 1) {
            setIndex(prev => prev + 1)
        }
    }
    const decrement = () => {
        if (index - 1 > 0) {
            setIndex(prev => prev - 1)
        }
    }

    return (
        <div>
            <h1>{text.slice(0,index)}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default TextTyper;
