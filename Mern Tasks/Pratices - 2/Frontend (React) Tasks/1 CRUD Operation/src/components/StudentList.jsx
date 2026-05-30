import React from "react";

const StudentList = ({
  students,
  handleDelete,
  handleEdit
}) => {

  return (
    <div className="mt-8 space-y-4">

      {students.length > 0 ? (

        students.map((student, index) => (

          <div
            key={index}
            className="bg-gray-100 p-4 rounded-xl flex justify-between items-center"
          >

            {/* STUDENT INFO */}
            <div>

              <h2 className="text-xl font-bold">
                {student.name}
              </h2>

              <p>{student.email}</p>

              <p>{student.age}</p>

            </div>

            {/* BUTTONS */}
            <div className="flex gap-3">

              {/* EDIT */}
              <button
                onClick={() =>
                  handleEdit(student, index)
                }
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
              >
                Edit
              </button>

              {/* DELETE */}
              <button
                onClick={() =>
                  handleDelete(index)
                }
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>

            </div>

          </div>
        ))

      ) : (

        <p className="text-center text-gray-500">
          No Students Added
        </p>

      )}

    </div>
  );
};

export default StudentList;