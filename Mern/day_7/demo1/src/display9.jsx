import React, { useState } from "react";

function Form() {

  const [data, setData] = useState({
    name: "",
    phone: "",
    age: ""
  });

  const [error, setError] = useState({
    name: "",
    phone: "",
    age: ""
  });

  // handle input change
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  // validation
  const validate = () => {
    let valid = true;
    let err = { name: "", phone: "", age: "" };

    if (data.name.trim() === "") {
      err.name = "Name is Required";
      valid = false;
    }

    if (data.phone.length !== 10) {
      err.phone = "Phone must be 10 digits";
      valid = false;
    }

    if (data.age === "" || isNaN(data.age) || Number(data.age) <= 0) {
      err.age = "Enter Valid Age";
      valid = false;
    }

    setError(err);
    return valid;
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <>
      <h2>Simple Form Validation</h2>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={data.name}
          onChange={handleChange}
        /><br />
        <span style={{ color: "red" }}>{error.name}</span><br /><br />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={data.phone}
          onChange={handleChange}
        /><br />
        <span style={{ color: "red" }}>{error.phone}</span><br /><br />

        {/* Age */}
        <input
          type="text"
          name="age"
          placeholder="Enter Age"
          value={data.age}
          onChange={handleChange}
        /><br />
        <span style={{ color: "red" }}>{error.age}</span><br /><br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
