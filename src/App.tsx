import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage2 from "./Homepage";
import StudentsPage from "./Students";
import ExamsPage from "./Exams";



function App() {
  return (
      /*basic react router stuff here! I know it's not necessarily needed for a single page app like this,
      but I prefer to leave my options open in case I want to expand on functionality! */
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage2/>}/>
          <Route  path="/students" element={<StudentsPage/>}/>
          <Route  path="/exams" element={<ExamsPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
