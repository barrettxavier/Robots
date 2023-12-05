import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import RobotDetails from "./Pages/RobotDetails";

function App() {
  return (
    <>
      <nav className="mt-4 w-screen h-20 px-20 py-4 transparent-blk-bg flex justify-between">
        <h1>Bots4Sale</h1>
        <div>
          <a href="/">Home</a>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/robotDetails" element={<RobotDetails />} />
      </Routes>
    </>
  );
}

export default App;
