import Robots from "./Robots";
import { useState, useEffect } from "react";

const Home = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/tasks");
        const data = await response.json();
        console.log(data);
        setTask(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="mb-[10rem]">
      <div className="text-white h-[20] pl-4xl">
        <div className="my-[12rem]">
          <h1 className="text-7xl mb-6">
            Welcome to the Future of Everyday <br /> Living with RoboTech
            Innovations!
          </h1>
          <p className="text-2xl">
            "Bringing Tomorrow's Assistance to Your Doorstep Today!"
          </p>
        </div>
      </div>
      <div className="transparent-blk-bg w-[800px] mx-auto text-center py-12 mt-8 rounded-md">
        <h1 className="mb-12">Tasks</h1>
        <div className="flex gap-10 justify-center mb-20 flex-wrap">
          {task.map((task) => (
            <div key={task.id}>
              <a className="btn-primary" href="">
                {task.taskname}
              </a>
            </div>
          ))}
        </div>

        <hr className="w-full" />
      </div>
      <Robots />
    </section>
  );
};

export default Home;
