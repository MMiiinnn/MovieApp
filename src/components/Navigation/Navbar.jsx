import { useState } from "react";
import Icon from "../Atoms/Icon";
import MobileSideBar from "./MobileSideBar";
import Input from "../Atoms/Input";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const LINKS = ["Home", "Discover", "Movie Release", "Forum", "About"];

function Navbar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div className="relative w-full overflow-hidden  flex items-center">
      <DesktopNav links={LINKS} />

      <MobileNav isOpenSidebar={setIsOpenSidebar} />
      <MobileSideBar
        onOpen={isOpenSidebar}
        onClose={() => setIsOpenSidebar(false)}
        links={LINKS}
      />
    </div>
  );
}

export default Navbar;
