import { Outlet, useLocation } from "react-router";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { useEffect } from "react";

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
