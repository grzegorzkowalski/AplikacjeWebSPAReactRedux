import "./App.css";

function App() {
  const A = parseInt(prompt("Podaj liczbę A?"));
  const B = parseInt(prompt("Podaj liczbę B?"));
  return (
    <div className="App">{ A+B }</div>
  );
}

export default App;
