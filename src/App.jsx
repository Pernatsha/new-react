import { Routes,Route } from "react-router-dom"
import React from "react"
import New from "./New"
import Signin from "./Signin"
import Homepage from "./Homepage"


function App() {
  

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/new" element={<New/>}/>
        <Route path="/signin" element={<Signin/>}></Route>

        
      </Routes>
    </>
  )
}

export default App
