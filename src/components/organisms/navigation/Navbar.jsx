import { useEffect, useState } from "react";
import MobileSideBar from "./MobileSideBar";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const LINKS = ["Home", "Discover", "Movie Release", "Forum", "About"];

function Navbar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex items-center transition-all duration-300 ${
        isScrolled ? " backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <DesktopNav links={LINKS} />

      <MobileNav isOpenSidebar={setIsOpenSidebar} />
      <MobileSideBar
        onOpen={isOpenSidebar}
        onClose={() => setIsOpenSidebar(false)}
        links={LINKS}
      />
    </header>
  );
}

export default Navbar;
