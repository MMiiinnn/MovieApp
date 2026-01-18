import Input from "./Input";
import MobileSideBar from "./MobileSideBar";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Input id="search" label="search" placeholder="Search..." />
      <p>This is Home Page.</p>
    </div>
  );
}

export default Home;
