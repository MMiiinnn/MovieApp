import { useState } from "react";
import Icon from "./atoms/Icon";
import MobileSideBar from "./MobileSideBar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center">
        <h1 className="text-4xl p-3">FillFilm</h1>
        <div className="flex gap-1">
          <button className="p-3">
            <Icon name="search" className="text-3xl!" />
          </button>
          <button className="p-3" onClick={() => setIsOpen(!isOpen)}>
            <Icon name="density_medium" className="text-3xl!" />
          </button>
        </div>
      </nav>
      <MobileSideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default Navbar;
