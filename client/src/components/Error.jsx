import { useEffect } from "react";
import { Link } from "react-router-dom";
// import error from '../assets/exclamation-warning.jpg';

const Error = () => {
  useEffect(() => {
    document.title = "Error";
  }, []);

  return (
    <section className="h-screen flex justify-center items-center my-3 px-1 py-2">
      <div className="w-11/12 grid grid-cols-1 gap-5 text-center bg-gradient-to-br from-[#00D2B5] to-[#01C4E0] p-3 rounded-md md:w-4/6">
        <h2 className="text-2xl font-bold">Page cannot be found</h2>
        <h1 className="text-9xl font-black">Eror 404</h1>
        {/* <img className="rounded-full h-60 w-60 mx-auto" src={error} alt="image" /> */}
        <Link
          className="text-xl bg-white hover:bg-slate-200 px-4 py-2 rounded-md mx-auto md:w-1/2"
          to="/"
        >
          Go Back
        </Link>
      </div>
    </section>
  );
};

export default Error;
