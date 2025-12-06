import { createFileRoute } from "@tanstack/react-router";
import headshot from "../assets/headshot.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <h1 className="flex justify-center text-3xl p-4 font-bold">Toby Ueno</h1>
      <div className="max-w-1/2 flex flex-col items-center justify-center space-y-3">
        <p>Welcome to my website!</p>
        <img src={headshot} alt="Headshot" className="p-2 max-w-lg"></img>
        <p>
          I was born & raised in Portland, Oregon, and I graduated from Boston
          University earlier this year with an M.S. in Computer Science and a
          B.A. in both Computer Science and Linguistics/Philosophy. At BU, I
          worked closely with Prof. Ankush Das.
        </p>
        <p>
          Later this year I'll be starting my Ph.D in Informatics at the
          University of Edinburgh, advised by Dr. Sam Lindley.
        </p>
        <p>
          In my free time, I enjoy reading, running, playing guitar, and
          spending time with my two dogs, Otis and Sammie.
        </p>
        <p>Feel free to get in touch via my contact info below!</p>
      </div>
    </>
  );
}
