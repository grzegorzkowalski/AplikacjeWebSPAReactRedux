import { useEffect, useState } from "react";

const Box = () => {
    const [color, setColor] = useState("green");

    useEffect(() => {
        let intervalID = setInterval(() => {
            console.log(color);
            console.log(intervalID);
            setColor(prev => {
                if (prev === "green") {
                    return "red";
                }
                else {
                    return "green";
                }
            });
        }, 5000);
        return () => {
            clearInterval(intervalID);
        }
    }, []);

    return (
        <div style={{
            backgroundColor: color,
            width: "100px",
            height: "100px"
        }} />
    );
};

export default Box;
