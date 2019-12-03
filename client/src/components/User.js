import React from "react";

const User = ({ user }) => {
  const handleDelete = e => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div>
      <div>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </div>
      <div>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default User;
