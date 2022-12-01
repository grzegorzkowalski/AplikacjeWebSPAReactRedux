import ShopItemHeader from "./ShopItemHeader";
import ShopItemDescription from "./ShopItemDescription";
import ShopItemPricing from "./ShopItemPricing";

const ShopItem = ({computer}) => {
    return (
        <section>
            <ShopItemHeader
                title={computer.title}
                image={computer.image}
            />
            <ShopItemDescription
                description={computer.description}
            />
            <ShopItemPricing
                price={computer.price}
            />
        </section>
    );
};

export default ShopItem;
