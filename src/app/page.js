import Image from "next/image";
import ApplyNowButton from "./Components/ApplyNowButton";
import DashboardMain from "./Components/Dashboard/New/DashboardMain";
import Footer from "./Components/Footer/Footer";
import NavbarMain from "./Components/Navbar/NavbarMain";

export default function Home() {
  return (
    <>
    <NavbarMain/>
   <main className="min-h-screen">
    <DashboardMain/>
   </main>
   <Footer/></>
  );
}


