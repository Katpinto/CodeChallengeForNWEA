import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Homepage";
import StudentsPage from "./Students";
import ExamsPage from "./Exams";



function App() {
  return (
      //React Router setup for navigation
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/> {/*Where our SampleData is mapped into Courses*/}
          <Route  path="/students" element={<StudentsPage/>}/>
          <Route  path="/exams" element={<ExamsPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
