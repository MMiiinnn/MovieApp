import { Outlet } from "react-router-dom";
import Navbar from "../organisms/navigation/Navbar";
import Footer from "../organisms/Footer";
import ScrollToTop from "../atoms/ScrollToTop";

const RootLayout = () => {
  return (
    <div className="bg-zinc-950 min-h-screen flex flex-col selection:bg-green-500 selection:text-white">
      <Navbar />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />
      {/* <ScrollToTop /> */}
    </div>
  );
};

export default RootLayout;
