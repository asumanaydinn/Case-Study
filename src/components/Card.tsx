const Card = ({ title, info }: { title: string; info: string }) => {
  return (
    <div className="group flex h-32 w-64 flex-col items-center justify-center rounded-lg border border-zinc-200 bg-white hover:border-blue-600 cursor-pointer hover:outline hover:outline-indigo-100 transition duration-200">
      <div className="text-lg font-bold tracking-wide text-gray-400 group-hover:text-blue-600">
        {title}
      </div>
      <div className="text-4xl font-bold tracking-wide text-gray-800 group-hover:text-blue-600">
        {info}
      </div>
    </div>
  );
};

export default Card;
