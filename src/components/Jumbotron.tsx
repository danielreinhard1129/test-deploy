const Jumbotron = () => {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col justify-center gap-4 text-white">
            <h1 className="text-4xl font-bold">Budi Doremi 123</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              et dolor reprehenderit quibusdam eligendi consequatur consequuntur
              deserunt rerum vel animi?
            </p>
            <button className="max-w-[200px] rounded-md border border-black bg-green-500 p-4 text-black">
              Lets get started
            </button>
          </div>
          <div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-[300px] w-[300px] rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
