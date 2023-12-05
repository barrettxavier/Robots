// Inside your React component code (Robots.jsx)
import { useState, useEffect } from "react";

const Robots = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/robots");
        const data = await response.json();
        console.log(data);
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

      <ul>
        {robots.map((robot) => (
          <li key={robot.id}>
            <h2>{robot.name}</h2>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Robots;
