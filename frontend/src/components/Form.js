import React from "react";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:5050/api/user/create", inputs);
  };

  return (
    <>
      <h1>Create user</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
