import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLogVisit } from "../utils/log";

export const Route = createRootRoute({
  component: () => {
    useLogVisit();
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4 flex flex-col items-center">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  },
});
