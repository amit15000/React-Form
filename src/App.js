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
    notification: "",
  });
  console.log(formData);
  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevD) => {
      return {
        ...prevD,
        [name]: type === "checkbox" ? checked : value,
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
        <select name="country" id="country" onChange={changeHandler}>
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
        <label htmlFor="Street">Street Address</label>
        <br />
        <input
          type="text"
          placeholder="1234 Main St"
          id="Street"
          name="StreetAddress"
          value={formData.StreetAddress}
          onChange={changeHandler}
        ></input>
        <br />
        <label htmlFor="City">City</label>
        <br />
        <input
          type="text"
          placeholder="Asansol"
          id="City"
          name="City"
          value={formData.City}
          onChange={changeHandler}
        ></input>
        <br />
        <label htmlFor="Zip">ZIP/Provice</label>
        <br />
        <input
          type="number"
          id="Zip"
          placeholder="713301"
          name="Zip"
          value={formData.Zip}
          onChange={changeHandler}
        />
        <br />
        <fieldset>
          <legend>By Email</legend>

          <input
            type="checkbox"
            id="comments"
            name="comments"
            onChange={changeHandler}
          ></input>
          <label htmlFor="Candidates">Comments</label>
          <br />
          <input
            type="checkbox"
            id="Candidates"
            name="candidates"
            onChange={changeHandler}
          ></input>
          <label htmlFor="comments">Candidates</label>
          <br />
          <input
            type="checkbox"
            id="Offers"
            name="offers"
            onChange={changeHandler}
          ></input>
          <label htmlFor="Offers">Offers</label>
          <br />
        </fieldset>

        <fieldset>
          <legend>Push Notifications</legend>
          <span>These are delivered via SMS to your mobile</span>
          <br />
          <input
            type="radio"
            name="notification"
            checked={formData.notification === "Everything"}
            value="Everything"
            id="Everthing"
            onChange={changeHandler}
          />
          <label id="Everything">Everthing</label>
          <br />
          <input
            type="radio"
            name="notification"
            checked={formData.notification === "Same as Email"}
            value="Same as Email"
            id="Same as Email"
            onChange={changeHandler}
          />
          <label id="Same as Email">Same as Email</label>
          <br />
          <input
            type="radio"
            name="notification"
            checked={formData.notification === "No Push Notification"}
            value="No Push Notification"
            id="No Push Notification"
            onChange={changeHandler}
          />
          <label id="No Push Notification">No Push Notification</label>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
