import "./App.css";
import Home from "./Components/Home";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>საწვავის ფასები</title>
      </Helmet>
      <Home />
    </div>
  );
}

export default App;
