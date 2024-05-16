import React from "react";
import {BrowserRouter as Router,
        Routes,
        Route,
        Navigate,
} from "react-router-dom";


//pages
import Projects from './Pages/Projects';
import HomePages from './Pages/HomePages';


export default function MyApp(){
  return (
    <>
      <Router>
        <Routes>
          <Route
            path = "/" 
            element={<HomePages />}
          />
          <Route
            path = "/Projects" 
            element={<Projects />}
          />
          <Route
            path = "/" 
            element={<HomePages />}
          />
        </Routes>
      </Router>
    </>
      
     
  );
}