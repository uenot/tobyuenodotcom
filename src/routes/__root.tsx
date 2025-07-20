import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <header className="w-full p-2 bg-blue-400 shadow sticky top-0 text-lg">
        <nav className="max-w-4xl mx-auto flex justify-evenly items-center px-4">
          <Link to="/">Home</Link>
          <Link to="/site">About the Site</Link>
        </nav>
      </header>
      <main className="flex-1 p-4 flex flex-col items-center">
        <Outlet />
      </main>
      <footer className="w-full p-2 bg-gray-300 shadow sticky bottom-0 text-sm">
        <div className="max-w-4xl mx-auto flex items-center px-4">
          <a
            className="flex-1 text-center"
            href="mailto:tobyueno@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            tobyueno@gmail.com
          </a>
          <a
            className="flex-1 text-center"
            href="https://github.com/uenot"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="flex-1 text-center"
            href="https://www.linkedin.com/in/toby-ueno/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  ),
});
