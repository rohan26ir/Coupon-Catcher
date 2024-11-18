import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const MainLayout = () => {
  return (
    <div>
      
      <header>
         <Navbar></Navbar>
       </header>
       <main>
         <Outlet></Outlet>
       </main>
       <footer>
         <Footer></Footer>
       </footer>
    </div>
  );
};

export default MainLayout;