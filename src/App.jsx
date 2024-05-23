import { Routes,Route } from "react-router-dom"
import React from "react"
import New from "./New"
import Signin from "./Signin"
import Homepage from "./Homepage"
import Menupage from "./Menupage"
import TestBar from "./TestBar"


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/new" element={<New />} />
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/menu" element={<Menupage />}></Route>
        <Route path="/test" element={<TestBar />} />
      </Routes>
    </>
  );
}

export default App
