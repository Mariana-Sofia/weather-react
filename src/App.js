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
      </header>
    </div>
  );
}

export default App;
