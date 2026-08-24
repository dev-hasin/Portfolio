import { useEffect } from "react";

export function useScrollReveal(routeKey: string) {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("main section, main article, main aside, main form"),
    );
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    elements.forEach((element, index) => {
      element.classList.add("reveal-ready");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 80}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [routeKey]);
}
