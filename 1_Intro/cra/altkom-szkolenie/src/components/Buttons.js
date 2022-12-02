const Buttons = () => {

    const clickHandler1 = () => {
        console.log("Pierwszy przycisk kliknięty");
    }

    const clickHandler2 = () => {
        const numberA = parseInt(prompt("Podaj liczbę A"));
        const numberB = parseInt(prompt("Podaj liczbę B"));
        console.log(numberA**numberB);
        console.log(`Wynik potęgowania to ${Math.pow(numberA, numberB)}`);
    }

    const clickHandler3 = () => {
        console.log(window.innerWidth, window.innerHeight);
        console.log(window.outerWidth, window.outerHeight);
    }

    return (
        <>
          <button onClick={clickHandler1}>Klik</button>
          <button onClick={clickHandler2}>Klik</button>
          <button onClick={clickHandler3}>Klik</button>
            <div style={{
                height: "40px",
                width: "10cm",
                backgroundColor: "blue"

            }} />
        </>
    );
};

export default Buttons;
