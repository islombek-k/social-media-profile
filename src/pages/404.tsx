import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 h-screen ">
      <h1 className="font-semibold text-6xl text-red-500">
        404 PAGE NOT FOUND
      </h1>
      <Link
        to="/"
        className="border border-gray-200 rounded-md py-1.5 px-3 hover:opacity-80 mt-8"
      >
        Go home page
      </Link>
    </div>
  );
};

export default PageNotFound;
