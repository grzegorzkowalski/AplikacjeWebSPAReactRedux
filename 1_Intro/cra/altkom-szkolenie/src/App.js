import "./App.css";
import Calculator from "./components/Calculator";
import DisplayAnswer from "./components/DisplayAnswer";
import Menu from "./components/Menu";
import Search from "./components/Search";
import LikeBox from "./components/LikeBox";
import ShopItem from "./components/ShopItem/ShopItem";
import Box from "./components/Box";
import Clock from "./components/Clock";
import Buttons from "./components/Buttons";
import TextTyper from "./components/TextTyper";
import CustomTitle from "./components/CustomTitle";
import Shop from "./components/Shop";
import ButtonCounter from "./components/ButtonCounter";
import NumberInfo from "./components/NumberInfo";
import SecretStuff from "./components/SecretStuff";

const menuItems = [
    {
        url: "/",
        text: "Strona główna"
    },
    {
        url: "/blog",
        text: "Blog"
    },
    {
        url: "/cennik",
        text: "Cennik"
    },
    {
        url: "/kontakt",
        text: "Kontakt"
    }
];

const computer = {
    title: "MacBook Pro",
    image: "https://www.cortland.pl/images/thumbnails/380/380/detailed/161/Apple_MacBook_Pro_132.jpg?t=1659525984",
    description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
    price: 9999
};
function App() {
  // const A = parseInt(prompt("Podaj liczbę A?"));
  // const B = parseInt(prompt("Podaj liczbę B?"));
  //const year = parseInt(prompt("Podaj rok urodzenia?"));
  return (
   // <div className="App">{ A+B }</div>
    <div className="App">
      {/*Masz: { new Date().getFullYear() - year } lat.*/}
      {/*<Calculator />*/}
      {/*<DisplayAnswer />*/}
      {/*<Menu items={menuItems} />*/}
      {/*<Search />*/}
      {/*<LikeBox likes={256} />*/}
      {/*<ShopItem computer={computer} />*/}
      {/*<Box />*/}
      {/*<Clock />*/}
      {/*<Buttons />*/}
      {/*<TextTyper text="Witaj!" />*/}
      {/*<CustomTitle />*/}
      {/*<Shop />*/}
      {/*<ButtonCounter />*/}
      {/*  {*/}
      {/*      [1,2,5,7,10,16].map((el, i) => <NumberInfo number={el} key={i} />)*/}
      {/*  }*/}
      <SecretStuff
          password="Test1234"
          correctPassword="Test1234"
          secret="Lubię pizze ale nie mogę jej jeśc bo gluten :("
      />
      <SecretStuff
          password="Test1234"
          correctPassword="Test123456"
          secret="Nie lubię brukselki"
      />
    </div>
  );
}

export default App;
