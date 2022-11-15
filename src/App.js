import { useState } from "react";
import "./App.css";
const initialState = {
  fullName: "",
  address: " ",
  phoneNumber: "",
  email: "",
  complaint: "",
  contactPreference: "",
  termsAccepted: false,
};
export default function App() {
  const [formState, setFormstate] = useState(initialState);
  //TODO: Add your state fields here
  /*const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [complaint, setComplaint] = useState("");
  const [contactPreference, setContatcPreference] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);*/
  /*  const handleFullName = (event) => {
    console.log("submitted:", fullName);
    const eventTarget = event.target.value;

    setFullName(eventTarget);
  };
  const handleAddress = (event) => {
    console.log("submitted:", address);
    const eventTarget = event.target.value;

    setAddress(eventTarget);
  };
  const handlePhonenumber = (event) => {
    console.log("submitted:", phoneNumber);
    const eventTarget = event.target.value;

    setPhoneNumber(eventTarget);
  };
  const handleEmail = (event) => {
    console.log("submitted:", email);
    const eventTarget = event.target.value;

    setEmail(eventTarget);
  };
  const handleComplaintText = (event) => {
    console.log("submitted:", complaint);
    const eventTarget = event.target.value;

    setComplaint(eventTarget);
  };
  const handleContactPreference = (event) => {
    const eventTarget = event.target.value;

    setContatcPreference(eventTarget);
    console.log("submitted:", contactPreference);
  };
  const handleTerms = (event) => {
    const eventTarget = event.target.checked;

    setTermsAccepted(eventTarget);
    console.log("submitted:", termsAccepted);
  };*/
  const submit = (event) => {
    event.preventDefault();
    console.log("submitted:", formState);
    setFormstate(initialState);
  };

  const handleChange = (event) => {
    const targetValue = event.target.value;
    const targetName = event.target.name;
    const targetChecked = event.target.checked;
    const targetType = event.target.type;
    if (targetName === "name") {
      setFormstate({ ...formState, fullName: targetValue });
    }
    if (targetName === "address") {
      setFormstate({ ...formState, address: targetValue });
    }
    if (targetName === "phone") {
      setFormstate({ ...formState, phoneNumber: targetValue });
    }
    if (targetName === "email") {
      setFormstate({ ...formState, email: targetValue });
    }
    if (targetName === "complaint") {
      setFormstate({ ...formState, complaint: targetValue });
    }
    if (targetName === "contact") {
      setFormstate({ ...formState, contactPreference: targetValue });
    }
    if (targetName === "terms" && targetType === "checkbox") {
      setFormstate({ ...formState, termsAccepted: targetChecked });
    }
  };
  return (
    <>
      <form className="form" onSubmit={submit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
              type="text"
              name="name"
              value={formState.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={formState.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              value={formState.phoneNumber}
              onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              value={formState.complaint}
              onChange={handleChange}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                checked={formState.contactPreference === "phone"}
                onChange={handleChange}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                checked={formState.contactPreference === "email"}
                onChange={handleChange}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                checked={formState.contactPreference === "post"}
                onChange={handleChange}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                checked={formState.contactPreference === "none"}
                onChange={handleChange}
              />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={formState.termsAccepted}
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
