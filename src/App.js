import "./App.css";
import { useState } from "react";

function App() {
  const [names, setNames] = useState({ firstName: "", lastName: "" });

  const changeHandler = (elem) => {
    setNames((prevdata) => {
      return { ...prevdata, [elem.target.name]: elem.target.value };
    });
  };

  return (
    <div>
      <div className="App">
        <input
          type="text"
          placeholder="firstName"
          name="firstName"
          onChange={changeHandler}
        />
      </div>

      <ul>
        {names.map((Name, index) => (
          <li key={index}> {Name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
