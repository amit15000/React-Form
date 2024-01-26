import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    StreetAddress: "",
    City: "",
    State: "",
    Zip: "",
    comments: "",
    candidates: "",
    offers: "",
  });
  console.log(formData);
  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevD) => {
      return {
        ...prevD,
        [name]: value,
      };
    });
    console.log(formData);
  }
  return (
    <div>
      <form>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          placeholder="Pranay"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={changeHandler}
        ></input>
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          placeholder="Gupta"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={changeHandler}
        ></input>
        <br />
        <label htmlFor="firstName">Email address</label>
        <br />
        <input
          type="email"
          placeholder="pguta@dukc.com"
          id="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        ></input>
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select name="country" onChange={changeHandler}>
          <option name="" value="">
            Select
          </option>
          <option name="India" value="India">
            India
          </option>
          <option name="Pakistan" value="Pakistan">
            Pakastan
          </option>
          <option name="UAE" value="UAE">
            UAE
          </option>
          <option name="Yuganda" value="Yuganda">
            Yuganda
          </option>
          <option name="USA" value="USA">
            USA
          </option>
          <option name="Russia" value="Russia">
            Russia
          </option>
          <option name="Germany" value="Germany">
            Germany
          </option>
        </select>
        <br />
        <label htmlFor="State">State/Province</label>
        <br />
        <select name="State" id="State" onChange={changeHandler}>
          <option value="">Select</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="West Bengal">West Bengal</option>
          <option value="Maharastra">Maharastra</option>
        </select>
        <br />
        <label htmlFor="ZIP">ZIP/Provice</label>
        <input
          type="number"
          placeholder="713301"
          name="Zip"
          value={formData.Zip}
          onChange={changeHandler}
        />
        <br />
      </form>
    </div>
  );
}

export default App;
