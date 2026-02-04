import { useState } from "react";
import Icon from "../../atoms/Icon";
import Button from "../../atoms/Button";

function DesktopNav() {
  const [isSearch, setIsSearch] = useState(false);
  const links = ["Home", "Discover", "Movie Release", "Forum", "About"];

  return (
    <nav className="hidden lg:flex justify-between items-center h-20 px-10 bg-transparent text-white w-full relative">
      <h1 className="text-4xl px-4">FillFilm</h1>

      <ul
        className={`flex gap-1 h-full transition-opacity duration-300 ${isSearch ? "opacity-20 pointer-events-none" : "opacity-100"}`}
      >
        {links.map((link) => (
          <li key={link} className="h-full">
            <a
              href="#"
              className="flex items-center h-full px-5 hover:bg-white hover:text-black transition-all"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 h-full relative">
        {/* Search input */}
        <div
          className={`absolute right-0 flex items-center bg-transparent rounded-full transition-all duration-500 ease-in-out overflow-hidden z-20
            ${isSearch ? "w-100 px-3 py-1 border border-zinc-700" : "w-0 opacity-0"}`}
        >
          <Icon name="search" className="text-2xl text-zinc-400 ml-2" />
          <input
            className="bg-transparent border-none outline-none px-3 w-full text-white h-10"
            placeholder="Search movies..."
            autoFocus={isSearch}
            onBlur={() => setIsSearch(false)} // Close when clicking outside
          />
          <button
            onClick={() => setIsSearch(false)}
            className="p-1 hover:text-red-500"
          >
            <Icon name="close" className="text-2xl!" />
          </button>
        </div>

        <div
          className={`flex items-center gap-4  ${isSearch ? "invisible" : undefined}`}
        >
          <button
            className="p-2 hover:bg-zinc-800 rounded-full transition-colors cursor-pointer"
            onClick={() => setIsSearch(true)}
          >
            <Icon name="search" className="text-3xl!" />
          </button>
          <Button variant="outline">Sign up</Button>
          <Button variant="primary">Login</Button>
        </div>
      </div>
    </nav>
  );
}

export default DesktopNav;
