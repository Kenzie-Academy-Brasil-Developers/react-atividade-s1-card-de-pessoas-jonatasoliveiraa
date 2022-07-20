import "./App.css";
import Developer from "./components/Developer/Developer";

function App() {
  const devs = [
    {
      name: "Jonatas",
      age: 25,
      country: "Brasil",
    },
    {
      name: "Witallo",
      age: 26,
      country: "Brasil",
    },
    {
      name: "Richard",
      age: 24,
      country: "Kleverlandia",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        {devs.map((dev, index) => (
          <Developer key={index} name={dev.name} age={dev.age} country={dev.country}/>
        ))}
      </header>
    </div>
  );
}

export default App;
