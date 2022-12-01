import "./App.css";
import Calculator from "./components/Calculator";
import DisplayAnswer from "./components/DisplayAnswer";
import Menu from "./components/Menu";
import Search from "./components/Search";
import LikeBox from "./components/LikeBox";


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
    </div>
  );
}

export default App;
