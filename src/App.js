import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div> } />
          <Route path="/blogs" element={<div>hello</div>} />
          <Route path="/aboutus" element={<div>bye</div>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App