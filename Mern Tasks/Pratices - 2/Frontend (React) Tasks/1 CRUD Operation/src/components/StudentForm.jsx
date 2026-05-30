import React from "react";

const StudentForm = ({
  form,
  handleChange,
  handleSubmit,
  editIndex
}) => {

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      {/* NAME */}
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-lg"
      />

      {/* EMAIL */}
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-lg"
      />

      {/* AGE */}
      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={form.age}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-lg"
      />

      {/* BUTTON */}
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg"
      >
        {editIndex !== null
          ? "Update Student"
          : "Add Student"}
      </button>

    </form>
  );
};

export default StudentForm;