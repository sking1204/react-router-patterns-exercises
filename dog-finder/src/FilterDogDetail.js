import React from 'react';
import { useParams } from 'react-router-dom';
import DogDetail from './DogDetail';


/**
 * FilterDogDetails finds a dog by name or renders null
 *
 * state: none
 *
 * props:
  * dogs: [{name, src}]
 *
 *
  * Rendered at /dogs/:name
 *
 */

function FilterDogDetails({ dogs }) {
  const { name } = useParams();

  if (name) {
    const currentDog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetail dog={currentDog} />;
  }

  return null;
}

export default FilterDogDetails;