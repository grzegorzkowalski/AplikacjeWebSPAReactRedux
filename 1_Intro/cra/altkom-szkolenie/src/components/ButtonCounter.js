import {useState} from "react";
import ButtonToClick from "./ButtonToClick";

const ButtonCounter = () => {
    const [counter, setCounter] = useState(0);

    const addToCounter = () => {
        setCounter(prev => prev + 1)
    }

    return (
        <>
            <h1>{counter}</h1>
            <ButtonToClick onClick={addToCounter} />
        </>
    );
};

export default ButtonCounter;
