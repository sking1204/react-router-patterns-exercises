
import { Link } from 'react-router-dom';
import './ColorList.css';

function ColorList({ colors }) {
  return (
    <div className="ColorList">
      <h2>Welcome to the color factory.</h2>

      <div>
        <p className="color-list">
            <Link to="/colors/new" className="link-white">Add a color</Link>
        </p>
      </div>

      <div>
        <p>Please select a color.</p>
      <ul className="color-list">
        {colors.map(color => (
          <li key={color}>
            <Link to={`/colors/${color}`} className="link-white">{color}</Link>
          </li>
        ))}
      </ul>
      </div>
      
      
    </div>
  );
}

export default ColorList;