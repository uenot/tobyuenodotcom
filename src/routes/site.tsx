import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/site")({
  component: Site,
});

function Site() {
  return (
    <>
      <h1 className="flex justify-center text-3xl p-4 font-bold">
        About the Site
      </h1>
      <div className="max-w-1/2 flex flex-col items-center justify-center space-y-3">
        <p>
          This version of the site began in the summer of 2025, and is built
          using React & TypeScript. Other technologies used include Tailwind for
          styling, TanStack Router for client-side routing, and Vite as a build
          system.
        </p>
        <p>
          I built this site with the side goal of familiarizing myself with the
          modern React ecosystem, as preparation for my upcoming research on
          reactive programming with effect handlers.
        </p>
      </div>
    </>
  );
}
