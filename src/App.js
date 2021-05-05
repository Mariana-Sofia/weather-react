import Search from "./search";
import Date from"./date";


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="container">
        <h1>Weather</h1>
        <Date/>

        <Search />
        </div>
        
        <p>Made by Mariana Chambel. Check it on <a href="https://github.com/Mariana-Sofia/weather-react" rel="noreferrer"target="_blank">Github</a>. Hosted on <a href="https://app.netlify.com/">Netlify</a></p>
      </div>
      
    </div>
  );
}

export default App;
