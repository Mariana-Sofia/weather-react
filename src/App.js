import './App.css';
import Search from "./search";



import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="container">
        <h1>Weather App</h1>
        <Search city="lisboa" />
        </div>
        <p>Made by Mariana Chambel. Check it on <a href="https://github.com/Mariana-Sofia/weather-react" target="_blank">Github</a>. Hosted on <a href="https://app.netlify.com/">Netlify</a></p>
      </div>
      
    </div>
  );
}

export default App;
