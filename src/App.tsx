import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome name="Abdus Satter" workCount={10} />
    </div>
  );
}

export default App;
