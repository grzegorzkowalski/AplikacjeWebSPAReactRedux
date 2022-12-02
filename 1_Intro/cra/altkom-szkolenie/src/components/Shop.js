import { useState } from "react";
import ShopItem from "./ShopItem";

const Shop = () => {
    const [basket, setBasket] = useState([]);

    const addToStateBasket = (title) => {
        setBasket(prev => {
            const tab = [...prev];
            tab.push(title);
            return tab ;
        })
    }

    return (
        <>
            <ShopItem
                title="MacBook Pro"
                addToBasket={addToStateBasket}
            />
            <ShopItem
                title="Dell X5500"
                addToBasket={addToStateBasket}
            />
            <ShopItem
                title="Asus NT6000"
                addToBasket={addToStateBasket}
            />
            <p>Koszyk zakupowy:</p>
            <ul>
                {
                    basket.map((el, i) => <li key={i}>{el}</li>)
                }
            </ul>
        </>
    );
};

export default Shop;
