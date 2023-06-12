const HomeStats = () => {
  const hoppies = [
    {
      id: 1,
      value: 500,
      name: "Happy Clients",
    },
    {
      id: 2,
      value: 500,
      name: "Happy Clients",
    },
    {
      id: 3,
      value: 500,
      name: "Happy Clients",
    },
    {
      id: 4,
      value: 500,
      name: "Happy Clients",
    },
  ];
  return (
    <div className="py-20">
      <div className="inner_items flex flex-wrap items-center justify-center md:justify-between">
        {hoppies.map((el) => (
          <div
            key={el.id}
            className="item w-52 h-52 mb-14 rounded-full border-2 border-dashed me-8 md:me-0 border-primary flex justify-center items-center flex-col"
          >
            <h3 className="count mb-5 text-4xl font-bold">+{el.value}</h3>
            <p className="text-text-dark text-xl">{el.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeStats;
