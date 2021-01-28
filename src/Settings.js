import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { db } from "./firebase";
import firebase from "firebase";
import Cards from "./Cards";
import { useStateValue } from "./StateProvider";
import { Button } from "@material-ui/core";
function Settings({ username }) {
  const [r1, setr1] = useState("tables");
  const [resty, dispatch] = useStateValue();
  console.log(resty.rest);

  const R1 = () => {
    dispatch({
      type: "R1",
    });
  };

  const R2 = () => {
    dispatch({
      type: "R2",
    });
  };

  const Add_Card = (event) => {
    event.preventDefault();
    return db
      .collection("Restaurant")
      .doc(username.uid)
      .collection("tables")
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        table: "Hey",
      });
  };
  return (
    <div>
      <Navbar username={username} />
      <div>
        <h1>Click to Add tables </h1>
        <Button onClick={Add_Card}>Add</Button>
        <br></br>
        <Button onClick={R1}>Restaurant1</Button>
        <Button onClick={R2}>Restaurant2</Button>
      </div>
    </div>
  );
}

export default Settings;
