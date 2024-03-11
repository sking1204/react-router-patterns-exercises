import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RenderColorPicker.css'


function RenderColorPicker ({addColor}) {

 const [color, setColor] = useColor('#561ecb');
 const navigate = useNavigate(); // Initialize useHistory
//  const [showColorPicker, setShowColorPicker] = useState(false);

const handleAddColor = () =>{
    addColor(color.hex)
    navigate('/'); //Navigate back to home page after adding color
}

 return(
    <div>
       {/* {showColorPicker && ( */}
        <ColorPicker color={color} onChange={setColor}  />
        <button onClick={() => handleAddColor()}>Add Color</button> {/* Add button to add color */}

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