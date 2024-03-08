import React from "react";
import { Routes,Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import FilterDogDetail from "./FilterDogDetail";


   


function RoutesList({dogs}) {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} />} />       
      <Route path="/dogs/:name" element={<FilterDogDetail dogs={dogs} />} />    
      <Route path="*" element={<Navigate to="/dogs" />} />    
    </Routes>
  );
}

export default RoutesList;