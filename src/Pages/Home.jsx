import Robots from "./Robots";

const Home = () => {
  return (
    <section className="mb-[10rem]">
      <nav className="mt-4 w-screen h-20 px-20 py-4 transparent-blk-bg flex justify-between">
        <h1>Bots4Sale</h1>
        <div>
          <a href="/">Home</a>
        </div>
      </nav>
      <div className="text-white h-[20] pl-6xl">
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
        <div className="flex gap-10 justify-center mb-20">
          <button className="btn-primary">Task 1</button>
          <button className="btn-primary">Task 2</button>
          <button className="btn-primary">Task 3</button>
          <button className="btn-primary">Task 4</button>
          <button className="btn-primary">Task 5</button>
          <button className="btn-primary">Task 6</button>
        </div>

        <hr className="w-full" />
      </div>
      <Robots />
    </section>
  );
};

export default Home;
