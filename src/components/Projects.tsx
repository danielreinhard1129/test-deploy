const Projects = () => {
    
  const experiences = [
    {
      tag: "Fintech",
      title: "CEO Tokped",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Isterepudiandae a harum odio repellat unde reiciendis nulla sed saepeullam, adipisci velit quam eius eos consectetur quo asperioresdignissimos libero",
    },
    {
      tag: "Technology",
      title: "CTO Tiktok",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Isterepudiandae a harum odio repellat unde reiciendis nulla sed saepeullam, adipisci velit quam eius eos consectetur quo asperioresdignissimos libero",
    },
    {
      tag: "Business",
      title: "Manager Pwdk",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Isterepudiandae a harum odio repellat unde reiciendis nulla sed saepeullam, adipisci velit quam eius eos consectetur quo asperioresdignissimos libero",
    },
  ];

  return (
    <div className="container mx-auto mt-4">
      <div className="mb-4 space-y-3 text-center">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          accusamus, aliquid unde iure reiciendis dolorem ipsa a dolore amet ex.
          Animi sit cupiditate velit repellat assumenda eos pariatur quasi
          ipsam?
        </p>
      </div>

      <div className="space-y-10">
        {experiences.map((experience, index) => {
          return (
            <div className="grid grid-cols-2 gap-8">
              <div
                className={`my-auto space-y-6 ${index % 2 === 1 ? "order-2" : ""}`}
              >
                <div className="w-fit rounded-xl bg-yellow-200 p-1">
                  <p className="text-xs text-yellow-600">{experience.tag}</p>
                </div>
                <h2 className="text-3xl font-bold">{experience.title}</h2>
                <p className="font-extralight">{experience.description}</p>
                <button className="boder bg-orange-500 px-8 py-2 text-white">
                  View case study
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-[400px] w-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
