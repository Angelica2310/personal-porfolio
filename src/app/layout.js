import Script from "next/script";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";
import BackgroundBox from "@/components/BackgroundBox";
import SmoothFollower from "@/components/animation/cursor/CanvasCursor";

const themeInitScript = `(function () {
  try {
    var stored = localStorage.getItem("theme");
    var isDark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
  } catch (e) {}
})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className="font-sans relative z-10 flex flex-col min-h-screen">
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
