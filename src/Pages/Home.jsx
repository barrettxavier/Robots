import Robots from "./Robots";

const Home = () => {
  return (
    <section className="">
      <nav className="w-screen h-20 px-20 py-4 bg-slate-200 flex justify-between">
        <h1>Bots4Sale</h1>
        <div>
          <a href="/">Home</a>
        </div>
      </nav>
      <div className="bg-gray-100 w-[800px] mx-auto text-center py-12 mt-8 rounded-md">
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
