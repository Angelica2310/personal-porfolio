import { Charm } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";
import BackgroundBox from "@/components/BackgroundBox";
import SmoothFollower from "@/components/animation/cursor/CanvasCursor";

const charm = Charm({
  variable: "--font-charm",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// const theme = extendTheme({});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${charm.variable} relative z-10 flex flex-col min-h-screen`}
      >
        <BackgroundBox />
        <NavBar />
        <main className="flex-grow z-10 relative">{children}</main>
        <footer className="z-10 relative">
          <Footer />
        </footer>
        <SmoothFollower />
      </body>
    </html>
  );
}
