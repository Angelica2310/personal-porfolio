import { Charm } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";

const charm = Charm({
  variable: "--font-charm",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${charm.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
