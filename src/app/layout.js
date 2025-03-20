import { Charm } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";
import BackgroundBox from "@/components/BackgroundBox";

const charm = Charm({
  variable: "--font-charm",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// const theme = extendTheme({});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${charm.variable} flex flex-col min-h-screen`}>
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackgroundBox />
      </body>
    </html>
  );
}
