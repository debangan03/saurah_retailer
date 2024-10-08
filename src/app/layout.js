import { Inter } from "next/font/google";
import "./globals.css";

import NavbarMain from "./Components/Navbar/NavbarMain";
import Footer from "./Components/Footer/Footer";
import { AuthProvider } from "./Context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saurah Finance Retailer | Finance Your Solar",
  description: "Retailer portal for customer of saurah finance",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
    <html lang="en">
      <body className={inter.className}>
        {/* <NavbarMain/> */}
        {children}
        {/* <Footer/> */}
        </body>
    </html>
    </AuthProvider>
  );
}
