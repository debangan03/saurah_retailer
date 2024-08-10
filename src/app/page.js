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

// # MONGODB_URI=mongodb+srv://saurah_finance:aJXHr2ijAjb6mE7k@cluster0.hjrtzgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// MONGODB_URI=mongodb+srv://saurahtech:Zya63yI4GPVDBlr6@cluster0.59zum7r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// JWT_SECRET=eyJSb2xlIjoiQWRtaW4iLCJJc
// CRYPTO_SECRET=eyJhbGciOiJIUzI1NiJ9
// NEXT_PUBLIC_VERCEL_URL=http://localhost:3000
// NEXT_PUBLIC_SERVICE=service_4j4t696
// NEXT_PUBLIC_TEMPLATE=template_ny4xgyn
// NEXT_PUBLIC_RESET_PASSWORD_TEMPLATE=template_z23585o
// NEXT_PUBLIC_API_KEY=X4Z5KNfWLBtiWGjhT
// NEXT_PRIVATE_EMAILJS_API_KEY=E-IRQJP-bEvbF35MLBHK4
// EMAIL_USER=saurahfn24@gmail.com
// EMAIL_PASS=vquf mqby yxvl wble
