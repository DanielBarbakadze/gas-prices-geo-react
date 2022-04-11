import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Graphs from "./Components/organisms/Graphs";
// import Notification from "./Components/Notification";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>საწვავის ფასები</title>
      </Helmet>

      {/* <Notification content={"ვებ გვერდი შექმნის პროცესშია"} /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graphs" element={<Graphs />} />
      </Routes>
    </div>
  );
}

export default App;
