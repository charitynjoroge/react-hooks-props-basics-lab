import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";


import user from "../data/user";


function App() {
  return (
    <div>
    <NavBar />
    <Home user={user} color={user.color} name={user.name} city={user.city}/>
    <About bio={user.bio} Links={user.links}/>
   </div>
  );
}

export default App;
 