import { Charm } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";
import BackgroundBox from "@/components/BackgroundBox";
// import Provider from "./provider";

const charm = Charm({
  variable: "--font-charm",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// const theme = extendTheme({});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${charm.variable}`}>
        <NavBar />
        {children}
        <Footer />
        <BackgroundBox />
      </body>
    </html>
  );
}
