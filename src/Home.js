import Navbar from "./Navbar";
import Cards from "./Cards";
import { Button} from "@material-ui/core";
import React, { useState } from "react";
function Home({ user }) {
  

  return (
    <div>
      <Navbar username={user} />
      
      <Cards user={user} />
    </div>
  );
}

export default Home;
