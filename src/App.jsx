import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import RobotDetails from "./Pages/RobotDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/robotDetails" element={<RobotDetails />} />
      </Routes>
    </>
  );
}

export default App;
