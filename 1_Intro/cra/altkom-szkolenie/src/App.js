import "./App.css";
import Calculator from "./components/Calculator";
import DisplayAnswer from "./components/DisplayAnswer";
import Menu from "./components/Menu";

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
      <Menu />
    </div>
  );
}

export default App;
