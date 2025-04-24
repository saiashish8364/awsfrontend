import logo from "./logo.svg";
import "./App.css";

function App() {
  async function apitest() {
    console.log(process.env.REACT_APP_API_URL);
    const data = await fetch(`${process.env.REACT_APP_API_URL}`);
    // const data = await fetch("http://51.21.128.140/categories");
    console.log(data);
    const data1 = await data.json();
    console.log(data1);
    // console.log(process.env.REACT_APP_API_URL);
  }
  apitest();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
