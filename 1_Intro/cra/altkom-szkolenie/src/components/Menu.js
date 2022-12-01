const Menu = ({items}) => {
    return (
        <ul>
            {
                items.map((el, i) => {
                    return <li key={i}><a href={el.url}>{el.text}</a></li>
                })
            }
        </ul>
    );
};

export default Menu;
