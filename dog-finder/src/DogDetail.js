

import { Link, Navigate } from "react-router-dom";
import './DogDetail.css'



/**
 * DogDetails
 *
 * state: none
 *
 * props:
  * dog: {name, src}
 *
 *
  * FilterDogDetails -> DogDetails
 *
 */

function DogDetails({ dog }) {

  if (!dog) return <Navigate to="/dogs" />

  return (
    <div className="row DogDetails">
      <div className="col d-flex flex-column align-items-center">
        <img src={dog.src} alt={dog.name} />
        <h2>{dog.name}</h2>
        <h3>{dog.age} years old</h3>
        <div className="dog-facts">
        <ul>
          {dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
        </div>
        <Link to="/dogs">Back to Home</Link>
      </div>
    </div>
  );
}

export default DogDetails;
