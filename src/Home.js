
import Navbar from './Navbar'
import Cards from './Cards'
import { Button, Input } from "@material-ui/core";
import React, { useState, useEffect } from "react";
function Home({user}) {

    const [r1, setr1] = useState(1);
const R1=()=>{
setr1(1)
console.log(r1)
}


const R2=()=>{
    setr1(2)
    console.log(r1)
    }



    return (
        <div>
         <Navbar username={user} />
         <Button onClick={R1}>Restaurant1</Button>
         <Button onClick={R2}>Restaurant2</Button>
         <Cards user={user}  />
        </div>
    )
}

export default Home
