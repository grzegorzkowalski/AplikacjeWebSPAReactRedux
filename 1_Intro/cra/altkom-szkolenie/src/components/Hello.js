import { useState } from "react";

const Hello = () => {
    const [name, setName] = useState("Grzegorz");

    const inputHandler = (e) => {
        if(name.length < 10) {
            setName(e.target.value);
        }
        else {
            setName([...e.target.value].slice(0,3).join(""))
        }
    }

    return (
        <>
            <h1>{name}</h1>
            <form>
                <label>
                    Przywitaj się
                    <input
                        value={name}
                        onChange={inputHandler}
                    />
                </label>
            </form>
        </>
    );
};

export default Hello;
