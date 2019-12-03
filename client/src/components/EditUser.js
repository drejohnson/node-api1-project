import React, { useState } from "react";
import axios from "axios";

const EditUser = ({ user, users, setUsers, toggleEdit }) => {
  const [userToEdit, setUserToEdit] = useState(user);

  const onChange = e => {
    setUserToEdit({ ...userToEdit, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const res = await axios.put(
      `http://localhost:4000/api/users/${userToEdit.id}`,
      userToEdit
    );
    const data = await res.data;
    const newUsers = users && users.filter(user => user.id !== userToEdit.id);
    setUsers([...newUsers, data]);
    setUserToEdit({
      name: "",
      bio: ""
    });
    toggleEdit();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            value={userToEdit.name}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input
            name="bio"
            type="text"
            value={userToEdit.bio}
            onChange={onChange}
          />
        </div>
        <button type="submit">Edit User</button>
        <button onClick={toggleEdit}>Cancel</button>
      </form>
    </div>
  );
};

export default EditUser;
