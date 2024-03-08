import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import {useState} from 'react';
import { Link } from 'react-router-dom';
import './RenderColorPicker.css'


function RenderColorPicker ({addColor}) {

 const [color, setColor] = useColor('#561ecb');
//  const [showColorPicker, setShowColorPicker] = useState(false);

 return(
    <div>
       {/* {showColorPicker && ( */}
        <ColorPicker color={color} onChange={setColor}  />
        <button onClick={() => addColor(color.hex)}>Add Color</button> {/* Add button to add color */}

        <div>
            <p>
                Click to go to the <Link to="/colors" className="link-white">home page </Link>
            </p>
        </div>
      
       {/* <button onClick={() => setShowColorPicker(true)}>Open Color Picker</button>  */}
    </div>
 )


}

export default RenderColorPicker;