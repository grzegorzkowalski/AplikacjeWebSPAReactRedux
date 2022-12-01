import React from "react";

const Calculator = () => {
    const numberA = parseInt(prompt("Podaj pierwszą liczbę?"));
    const numberB = parseInt(prompt("Podaj drugą liczbę?"));
    const operation = prompt("Wybierz operację +,-,*,/ ?");
    let element = "";

    switch (operation) {
        case "+":
            element = <h1>{numberA + numberB}</h1>;
            break;
        case "-":
            element = <h2>{numberA - numberB}</h2>;
            break;
        case "*":
            element = <h3>{numberA * numberB}</h3>;
            break;
        case "/":
            element = <h4>{numberA / numberB}</h4>;
            break;
        default:
            element = <p style={{color: "red"}}>Błędny wybór</p>
    }
    return (
        <div>{element}</div>
    );
};

export default Calculator;
