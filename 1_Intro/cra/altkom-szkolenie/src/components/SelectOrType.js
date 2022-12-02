import {useState} from "react";

const SelectOrType = ({initCars}) => {
    const [cars, setCars] = useState([...initCars, "Inne"]);
    const [selectedCar, setSelectedCar] = useState(cars[0]);
    const [newCar, setNewCar] = useState("");

    const submitHandler = () => {
        const tab = [...cars];
        tab[tab.length-1] = newCar;
        setCars(tab);
    }

    return (
        <>
            <form>
                <select
                    value={selectedCar}
                    onChange={(e) => setSelectedCar(e.target.value)}
                >
                    {
                        cars.map((el, i) =>{
                            return (
                                <option
                                    key={i}
                                    value={el}
                                >
                                    {el}
                                </option>
                            )
                        })
                    }
                </select>
            </form>
            {selectedCar === cars[cars.length-1] && (
                <form onSubmit={submitHandler}>
                    <input
                        value={newCar}
                        onChange={e => setNewCar(e.target.value)}
                    />
                    <button>Zatwierdz</button>
                </form>
            )}
        </>
    );
};

export default SelectOrType;
