// Inside your React component code (Robots.jsx)
import React, { useState, useEffect } from "react";

const Robots = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/robots");
        const data = await response.json();
        setRobots(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <h1>Robots</h1>

      <section className="flex gap-10 flex-wrap">
        {robots.map((robot) => (
          <div className="bg-green-200 p-4 pt-8 rounded-sm" key={robot.id}>
            <h2>{robot.name}</h2>
            <img src={robot.imageurl} alt="" />

            {/* Add more details as needed */}
          </div>
        ))}
      </section>
    </section>
  );
};

export default Robots;
