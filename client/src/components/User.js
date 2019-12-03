import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <div>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default User;
