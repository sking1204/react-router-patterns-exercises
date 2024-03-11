import React from "react";
import { Routes,Route, Navigate } from "react-router-dom";
import ColorList from "./ColorList";
import RenderColorPicker from "./RenderColorPicker";
import ColorPage from "./ColorPage";
// import FilterDogDetail from "./FilterDogDetail";


   


function RoutesList({colors, addColor}) {
  return (
    <Routes>
      <Route path="/colors" element={<ColorList colors={colors} />} />       
      <Route path="/colors/:color" element={<ColorPage colors={colors}/>} />
      <Route path="/colors/new" element={<RenderColorPicker addColor={addColor} />} />         
      <Route path="*" element={<Navigate to="/colors" />} />    
    </Routes>
  );
}

export default RoutesList;