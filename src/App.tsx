import "./App.css";
import Heading from "./components/Heading";
import { Oscar } from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Welcome from "./components/Welcome";

function App() {
  const personData = {
    name: "Abdus Satter",
    age: 24,
  };

  const contactList = [
    { name: "Abdus Satter", age: 24 },
    { name: "Abdur Rahim", age: 21 },
    { name: "Sofi Watson", age: 32 },
    { name: "Micheal Steven", age: 23 },
    { name: "Ronin Neo", age: 19 },
  ];
  return (
    <div className="App">
      <Welcome name="Abdus Satter" workCount={10} isLogged={true} />
      <Person data={personData} />
      <PersonList list={contactList} />
      <Status status="loading" />
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to school everyday!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
