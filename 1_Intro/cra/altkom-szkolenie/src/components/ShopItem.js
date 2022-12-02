const ShopItem = ({title, addToBasket}) => {
    const clickHandler = (title) => {
        if (typeof addToBasket === "function") {
            addToBasket(title);
        }
        else {
            console.log("Brak props addToBasket albo nie jest funkcją.");
        }
    }

    return (
        <>
            <h2>{title}</h2>
            <button onClick={() => clickHandler(title)}>Kup</button>
        </>
    );
};

export default ShopItem;
