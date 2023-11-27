import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function EditUser() {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = {
        id: formData.id,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      };
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(
        "https://localhost:7251/api/User/" + formData.id,
        requestOptions
      );

      if (response.ok) {
        alert("Success!");
        navigate(-1);
      } else {
        alert("Failed to update user!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const [formData, setFormData] = useState<User>({
    id: location.state.user.id,
    firstName: location.state.user.firstName,
    lastName: location.state.user.lastName,
    email: location.state.user.email,
    password: location.state.user.password,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <h1>Edit User</h1>
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
        Submit
      </button>
    </form>
  );
}

export default EditUser;
