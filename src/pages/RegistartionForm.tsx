import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [formData, setFormData] = useState<User>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  let navigate = useNavigate();

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7251/api/User", {
        method: "POST",
        headers: new Headers({
          "content-type": "application/json;charset=utf-8",
        }),
        body: JSON.stringify({
          firstname: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });
      if (response.ok) {
        alert("Registration successful!");
        navigate("/userslistpage");
      } else {
        if (response.status === 409) {
          alert("Email already exists!");
        } else {
          alert("Registration unsuccessful!");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <div>
            <h1>User Registration</h1>
          </div>
          <label htmlFor="firstName">First Name:</label>
          <br />
          <input
            type="text"
            name="firstName"
            id="firtName"
            onChange={handleChange}
            value={formData.firstName}
            required
            maxLength={20}
          />
          <br />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <br />
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            value={formData.lastName}
            required
            maxLength={20}
          />
          <br />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            required
            maxLength={40}
          />
          <br />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            name="password"
            id="pass"
            onChange={handleChange}
            value={formData.password}
            required
            maxLength={15}
          />
          <br />
        </div>

        <br />
        <button
          style={{
            borderColor: "#04AA6D",
            border: "none",
            color: "white",
            textAlign: "center",
            fontSize: "15px",
            display: "inline-block",
            backgroundColor: "#04AA6D",
            alignContent: "self-end",
            alignSelf: "self-end",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
