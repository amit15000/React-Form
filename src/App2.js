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
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("This is the final form-data");
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
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
        <fieldset>
          <legend>Chooose Your State</legend>
          <select value={formData.state} name="state" onChange={changeHandler}>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Bihar">Bihar</option>
            <option value="Assam">Assam</option>
            <option value="Nagaland">Nagaland</option>
          </select>
        </fieldset>
        <button value="Sumbit">Sumbit</button>
      </form>
    </div>
  );
}

export default App;
