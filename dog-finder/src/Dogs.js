import DogList from "./DogList";

function Dog({dogs}) {
    return (
      <div>
        <h1>This is the Dog homepage.</h1>
       <DogList dogs={dogs} />
      </div>
    );
  }
  
  export default Dog;