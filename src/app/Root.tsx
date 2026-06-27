import { Outlet, useLocation } from "react-router";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { useEffect } from "react";
import { useScrollReveal } from "../utils/useScrollReveal";

export function Root() {
  const { pathname } = useLocation();
  useScrollReveal(pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main key={pathname} className="route-enter flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
