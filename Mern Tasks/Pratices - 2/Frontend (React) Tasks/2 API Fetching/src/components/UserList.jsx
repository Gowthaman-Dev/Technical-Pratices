import React from "react";

const UserList = ({ users }) => {

  return (
    <div className="space-y-4">

      {users.map((user) => (

        <div
          key={user.id}
          className="bg-gray-100 p-4 rounded-xl shadow-sm"
        >

          <h2 className="text-xl font-bold">
            {user.name}
          </h2>

          <p className="text-gray-600">
            {user.email}
          </p>

          <p className="text-gray-500">
            {user.phone}
          </p>

        </div>
      ))}

    </div>
  );
};

export default UserList;