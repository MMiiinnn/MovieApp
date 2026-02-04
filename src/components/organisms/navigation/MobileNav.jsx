import { useState } from "react";
import Icon from "../../atoms/Icon";
import Input from "../../atoms/Input";

function MobileNav({ isOpenSidebar }) {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <>
      <nav
        className={`flex lg:hidden justify-between items-center w-full px-2 transition-all duration-500 ease-in-out bg-transparent!
          ${isSearch ? "opacity-0 invisible -translate-x-5" : "opacity-100 visible translate-x-0"}`}
      >
        <h1 className="text-4xl p-3">FillFilm</h1>
        <div className="flex gap-1">
          <button className="p-3" onClick={() => setIsSearch(true)}>
            <Icon name="search" className="text-3xl!" />
          </button>
          <button className="p-3" onClick={() => isOpenSidebar(true)}>
            <Icon name="density_medium" className="text-3xl!" />
          </button>
        </div>
      </nav>

      <div
        className={`absolute inset-0 flex items-center gap-2 py-2 px-3 bg-transparent transition-all duration-500 ease-in-out z-10
          ${isSearch ? "w-full opacity-100" : "w-0 opacity-0 overflow-hidden"}`}
      >
        <button className="p-1 shrink-0" onClick={() => setIsSearch(false)}>
          <Icon name="arrow_back_ios" className="text-3xl!" />
        </button>
        <div className="flex-1 min-w-50">
          <Input
            id="search"
            label=""
            placeholder="Search..."
            autoFocus={isSearch}
          />
        </div>
      </div>
    </>
  );
}

export default MobileNav;
