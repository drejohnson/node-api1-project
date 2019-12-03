import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";
import AddUser from "./AddUser";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await axios.get("http://localhost:4000/api/users");
      let data = await res.data;
      setUsers(data);
    })();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <AddUser users={users} setUsers={setUsers} />
      {users.map(user => (
        <React.Fragment key={user.id}>
          <User user={user} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default UserList;
