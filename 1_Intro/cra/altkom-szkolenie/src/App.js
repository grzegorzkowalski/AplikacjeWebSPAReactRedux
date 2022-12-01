import "./App.css";
import Calculator from "./components/Calculator";
import DisplayAnswer from "./components/DisplayAnswer";
import Menu from "./components/Menu";
import Search from "./components/Search";
import LikeBox from "./components/LikeBox";
import ShopItem from "./components/ShopItem/ShopItem";

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
      <Menu items={menuItems} />
      <Search />
      <LikeBox likes={256} />
      <ShopItem computer={computer} />
    </div>
  );
}

export default App;
