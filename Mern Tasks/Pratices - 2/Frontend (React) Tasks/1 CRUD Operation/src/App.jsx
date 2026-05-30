import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {

  // STUDENTS STATE
  const [students, setStudents] = useState([]);

  // FORM STATE
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  // EDIT MODE
  const [editIndex, setEditIndex] = useState(null);

  // HANDLE CHANGE
  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  // ADD OR UPDATE
  const handleSubmit = (e) => {

    e.preventDefault();

    // UPDATE
    if (editIndex !== null) {

      const updatedStudents = [...students];

      updatedStudents[editIndex] = form;

      setStudents(updatedStudents);

      setEditIndex(null);

    } else {

      // CREATE
      setStudents([...students, form]);
    }

    // RESET FORM
    setForm({
      name: "",
      email: "",
      age: ""
    });
  };

  // DELETE
  const handleDelete = (index) => {

    const filteredStudents =
      students.filter((_, i) => i !== index);

    setStudents(filteredStudents);
  };

  // EDIT
  const handleEdit = (student, index) => {

    setForm(student);

    setEditIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">

        <h1 className="text-3xl font-bold text-center mb-6">
          Student Management
        </h1>

        {/* FORM */}
        <StudentForm
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          editIndex={editIndex}
        />

        {/* LIST */}
        <StudentList
          students={students}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />

      </div>

    </div>
  );
};

export default App;