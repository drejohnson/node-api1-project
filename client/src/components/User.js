import React from "react";
import axios from "axios";

const User = ({ user, users, setUsers }) => {
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
    <div>
      <div>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </div>
      <div>
        <button>Edit</button>
        <button onClick={deleteUser}>Delete</button>
      </div>
    </div>
  );
};

export default User;
