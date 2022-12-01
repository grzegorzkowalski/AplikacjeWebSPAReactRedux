const DisplayAnswer = () => {
    const randomNumber = () => {
        return Math.round(Math.random() * 9 + 1);
    }
    const num1 = randomNumber();
    const num2 = randomNumber();
    const answer = parseInt(prompt(`Podaj wynik działania ${num1} + ${num2}`));
    const good = <div style={{color: "green"}}>Odpowiedź poprawna</div>;
    const bad = <div style={{color: "red"}}>Odpowiedź błędna</div>;
    return (
        <>
            { num1+num2 === answer ? good : bad }
        </>
    );
};

export default DisplayAnswer;
