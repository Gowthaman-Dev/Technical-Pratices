import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const RegisterForm = () => {

  // FORM STATE
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  // ERROR STATE
  const [errors, setErrors] = useState({});

  // SUCCESS MESSAGE
  const [success, setSuccess] = useState("");

  // HANDLE CHANGE
  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  // VALIDATION
  const validate = () => {

    let newErrors = {};

    // NAME
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    // EMAIL
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    }

    // PASSWORD
    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password =
        "Password must be 6 characters";
    }

    return newErrors;
  };

  // SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validate();

    // CHECK ERRORS
    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors);

      setSuccess("");

    } else {

      setErrors({});

      setSuccess("Registration Successful");

      console.log(form);

      // RESET FORM
      setForm({
        name: "",
        email: "",
        password: ""
      });
    }
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">

      <h1 className="text-3xl font-bold text-center mb-6">
        Register Form
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        {/* NAME */}
        <div>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
          />

          {errors.name && (
            <ErrorMessage message={errors.name} />
          )}

        </div>

        {/* EMAIL */}
        <div>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
          />

          {errors.email && (
            <ErrorMessage message={errors.email} />
          )}

        </div>

        {/* PASSWORD */}
        <div>

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
          />

          {errors.password && (
            <ErrorMessage message={errors.password} />
          )}

        </div>

        {/* BUTTON */}
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg"
        >
          Register
        </button>

      </form>

      {/* SUCCESS */}
      {success && (
        <p className="text-green-500 text-center mt-4 font-medium">
          {success}
        </p>
      )}

    </div>
  );
};

export default RegisterForm;