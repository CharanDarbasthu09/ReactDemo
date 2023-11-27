import { SetStateAction, useState } from "react";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e: { target: { value: SetStateAction<string> } }) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e: { target: { value: SetStateAction<string> } }) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>
      <br />
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        <div>
          <label className="label">Name</label>
          <input
            onChange={handleName}
            className="input"
            value={name}
            type="text"
          />
        </div>
        <br />
        <div>
          <label className="label">Email</label>
          <input
            onChange={handleEmail}
            className="input"
            value={email}
            type="email"
          />
        </div>
        <br />
        <div>
          <label className="label">Password</label>
          <input
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="button-2"
          type="submit"
          color="#04AA6D"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
