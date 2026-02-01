import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-6 text-center">
      <div className="absolute w-64 h-64 bg-green-500/10 blur-[120px] rounded-full z-0" />

      <div className="relative z-10">
        <h1 className="text-9xl font-black text-zinc-800 tracking-tighter">
          {error.status || "404"}
        </h1>

        <div className="-mt-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Oops! Lost in Space?
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto mb-8">
            {error.statusText ||
              error.message ||
              "The cinematic universe you're looking for doesn't exist or has been moved to another galaxy."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-green-500/20 active:scale-95"
            >
              BACK TO HOME
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-full transition-all duration-300 active:scale-95"
            >
              RETRY AGAIN
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 text-zinc-600 text-sm italic font-light">
        "Even the best stories have unexpected plot twists."
      </div>
    </div>
  );
};

export default ErrorPage;
