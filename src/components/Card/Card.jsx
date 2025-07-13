import { Link } from "react-router";
export const Card = ({ title, flag, population, region, capital, to }) => {
  return (
    <Link
      to={to.path}
      state={to.state}
      className="bg-white dark:bg-gray-600  shadow-md rounded-sm overflow-hidden w-[280px] cursor-pointer hover:translate-y-[-10px] duration-500 h-[320px] "
    >
      <img className="w-full h-[160px]" src={flag} alt="flag not found" />
      <div className="px-6 space-y-2 pt-6 pb-8">
        <h1 className="text-md font-semibold">{title}</h1>
        <div className="text-black dark:text-white transition-theme text-xs flex flex-col items-start justify-center space-y-1.5 ">
          <div className="flex items-center justify-start gap-2">
            <p className="font-semibold ">Population:</p>
            <p>{population}</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <p className="font-semibold">Region:</p>
            <p>{region}</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <p className="font-semibold">Capital:</p>
            <p>{capital}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
