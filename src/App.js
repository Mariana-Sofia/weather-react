import './App.css';
import Search from "./search";
import Container from 'react-bootstrap/Container';



import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <h1>Weather App</h1>
        <Search city="lisboa" />
        </Container>
        <p>Made by Mariana Chambel. Check it on <a href="https://github.com/Mariana-Sofia/weather-react">Github</a>. Hosted on <a href="https://app.netlify.com/">Netlify</a></p>
      </header>
      
    </div>
  );
}

export default App;
