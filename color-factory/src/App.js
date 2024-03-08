import {useState} from 'react';
import {BrowserRouter, Link} from 'react-router-dom'; 
import RoutesList from './RoutesList'; 
import "react-color-palette/css";  
import RenderColorPicker from './RenderColorPicker';

import './App.css';

function App() {
  const [colors, setColors] = useState(['red', 'purple', 'orange']);
 
  // Function to add a new color to the colors list
 function  addColor  (newColor)  {
    setColors([...colors, newColor]);
  };

  return (
    <div className="App">  

       
      <BrowserRouter>
        <RoutesList colors={colors} />
        <RenderColorPicker addColor={addColor} /> {/* Pass addColor function to RenderColorPicker */}
      </BrowserRouter>
    </div>
  );
}

export default App;
