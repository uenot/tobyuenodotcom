import { createFileRoute } from "@tanstack/react-router";
import PageContent from "../components/PageContent";

export const Route = createFileRoute("/site")({
  component: Site,
});

function Site() {
  return (
    <>
      <h1 className="flex justify-center text-3xl p-4 font-bold">
        About the Site
      </h1>
      <PageContent>
        <p>
          This version of the site began in the summer of 2025, and is built
          using React & TypeScript. Other technologies used include Tailwind for
          styling, TanStack Router for client-side routing, and Vite as a build
          system.
        </p>
        <p>
          There also exists a Haskell backend, using the Servant, Beam, and
          Effectful packages. It doesn't do much right now besides receive
          pings, but the hope is that it will become useful in future site
          extensions.
        </p>
        <p>
          I built this site with the side goal of familiarizing myself with the
          modern React ecosystem, as preparation for my research on reactive
          programming with effect handlers.
        </p>
      </PageContent>
    </>
  );
}
