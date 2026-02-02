import { Outlet } from "react-router-dom";
import Navbar from "../organisms/navigation/Navbar";
import Footer from "../organisms/Footer";
import BackToTop from "../atoms/BackToTop";

const RootLayout = () => {
  return (
    <div className="bg-zinc-950 min-h-screen flex flex-col selection:bg-green-500 selection:text-white">
      <Navbar />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default RootLayout;
