// Inside your React component code (Robots.jsx)
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Robots = () => {
  const [robots, setRobots] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/robots");
        const data = await response.json();
        setRobots(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClickOnRobot = (event) => {
    const robotName = event.target.innerText;
    navigate(`/robots/${robotName}`);
  };

  return (
    <section>
      <h1 className="my-4 text-center font-[8rem]">ROBOTS OF THE</h1>

      <section className="grid w-screen mx-0 grid-cols-2 ">
        {robots.map((robot) => (
          <div
            onClick={handleClickOnRobot}
            className="card-primary group relative overflow-hidden"
            key={robot.id}
          >
            <h2 className="mb-6 text-2xl font-semibold text-white absolute bottom-4 left-4">
              {robot.name}
            </h2>
            <img
              src={robot.imageurl}
              alt=""
              className="w-full h-auto transform transition-transform hover:scale-150 hover:translate-y-1 duration-1000"
            />
          </div>
        ))}
      </section>
    </section>
  );
};

export default Robots;
