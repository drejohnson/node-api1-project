import React, { useState } from "react";
import axios from "axios";

import EditUser from "./EditUser";

const User = ({ user, users, setUsers }) => {
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => setEdit(!edit);

  const deleteUser = async () => {
    const id = user && user.id;
    const newUsers = users && users.filter(user => user.id !== id);
    try {
      await axios.delete(`http://localhost:4000/api/users/${user.id}`);
      setUsers(newUsers);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {edit ? (
        <EditUser
          user={user}
          users={users}
          setUsers={setUsers}
          toggleEdit={toggleEdit}
        />
      ) : (
        <div>
          <div>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
          </div>
          <div>
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={deleteUser}>Delete</button>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
