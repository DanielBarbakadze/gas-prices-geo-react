import { Helmet } from "react-helmet";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import Graphs from "./Components/Graphs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>საწვავის ფასები</title>
      </Helmet>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graphs" element={<Graphs />} />
      </Routes>
    </div>
  );
}

export default App;
