import React from "react";
const addUserHandler = (event) => {
  event.preventDefault();
  console.log("ho");
};
const AddUser = () => {
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age</label>
      <input id="age" type="number" />
      <button type="submit">add User</button>
    </form>
  );
};

export default AddUser;
