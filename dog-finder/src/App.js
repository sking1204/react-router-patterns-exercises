import {BrowserRouter} from 'react-router-dom'
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import './App.css';



function App() {
  return (
    <div className="App">       
      <BrowserRouter>
      <NavBar dogs={App.defaultProps.dogs} />
      <RoutesList dogs={App.defaultProps.dogs} />
      </BrowserRouter>
      
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src:"https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?size=626&ext=jpg&ga=GA1.2.365238851.1701196117&semt=ais",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?size=626&ext=jpg&ga=GA1.2.365238851.1701196117&semt=ais",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "https://img.freepik.com/free-photo/cute-shepherd-dog-posing-isolated-white-background_155003-46179.jpg?size=626&ext=jpg&ga=GA1.2.365238851.1701196117&semt=ais",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "https://img.freepik.com/free-photo/portrait-dog-relaxing-against-white-backdrop_23-2147841044.jpg?t=st=1709841148~exp=1709844748~hmac=8054a2a34eefed80a8ee2a737cffd425c30da04771b9a66164c592fcb04c48b9&w=996",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
