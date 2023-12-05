import Robots from "./Robots";

const Home = () => {
  return (
    <section className="mb-[10rem">
      <nav className=" w-screen h-20 px-20 py-4 transparent-blk-bg flex justify-between">
        <h1>Bots4Sale</h1>
        <div>
          <a href="/">Home</a>
        </div>
      </nav>
      <div className="text-white h-[20]">
        <div className="mt-[28rem]">
          <h1>
            Welcome to the Future of Everyday Living with RoboTech Innovations!
          </h1>
          <p>"Bringing Tomorrow's Assistance to Your Doorstep Today!"</p>
        </div>
      </div>
      <div className="transparent-blk-bg w-[800px] mx-auto text-center py-12 mt-8 rounded-md">
        <h1 className="mb-8">Tasks</h1>
        <div className="flex gap-6 justify-center ">
          <button className="btn-primary">Task 1</button>
          <button className="btn-primary">Task 2</button>
          <button className="btn-primary">Task 3</button>
          <button className="btn-primary">Task 4</button>
          <button className="btn-primary">Task 5</button>
        </div>
      </div>
      <Robots />
    </section>
  );
};

export default Home;
