import React, { useState } from "react";
import axios from "axios";

const AddUser = ({ setUsers }) => {
  const [user, setUser] = useState({ name: "", bio: "" });
  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/users", user);
    setUsers(prevState => [...prevState, user]);
    setUser({
      name: "",
      bio: ""
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" type="text" onChange={onChange} />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input name="bio" type="text" onChange={onChange} />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
