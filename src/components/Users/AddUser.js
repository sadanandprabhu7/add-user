import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
const addUserHandler = (event) => {
  event.preventDefault();
  console.log("ho");
};
const AddUser = () => {
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <Button type="submit">add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
