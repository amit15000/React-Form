import { useState } from "react";

function App() {
  //We gonna create a react form

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isVisible: false,
    subject: "",
  });
  console.log(formData);

  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    //we have to save previous formData also
    setFormData((prevD) => {
      // if (event.target.type === "checkbox") {
      //   return { ...prevD, [event.target.name]: event.target.checked }; //value== checked or unchecked(given by user)==> assing to "checked" attribute
      // } else {
      //   return { ...prevD, [event.target.name]: event.target.value };
      // }
      return {
        ...prevD,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First-Name"
          name="firstName"
          value={formData.firstName}
          onChange={changeHandler}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Last-Name"
          name="lastName"
          value={formData.lastName}
          onChange={changeHandler}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Email-ID"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        />
        <br />
        <br />
        <input
          type="checkbox"
          id="visibility"
          name="isVisible"
          checked={formData.isVisible}
          onChange={changeHandler}
        />
        <label htmlFor="visibility">A'm I visible</label>
        <br />
        <br />
        <fieldset>
          <legend>Chooose the Subject</legend>
          <input
            type="radio"
            name="subject"
            id="Physics"
            value="Physics"
            checked={formData.subject === "Physics"}
            onChange={changeHandler}
          />
          <label htmlFor="Physics">Physics</label>
          <input
            type="radio"
            name="subject"
            id="Chemistry"
            value="Chemistry"
            checked={formData.subject === "Chemistry"}
            onChange={changeHandler}
          />
          <label htmlFor="Chemistry">Chemistry</label>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
