import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
