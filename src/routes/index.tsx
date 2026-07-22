import { createFileRoute } from "@tanstack/react-router";
import headshot from "../assets/headshot.jpg";
import InlineExternalLink from "../components/InlineExternalLink";
import InlineInternalLink from "../components/InlineInternalLink";
import PageContent from "../components/PageContent";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <h1 className="flex justify-center text-3xl p-4 font-bold">Toby Ueno</h1>
      <PageContent>
        <p>Welcome to my website!</p>
        <img src={headshot} alt="Headshot" className="p-2 max-w-full"></img>
        <p>
          As of July 2026, I am a Ph.D. student in Informatics at the University
          of Edinburgh, supervised by{" "}
          <InlineExternalLink href="https://homepages.inf.ed.ac.uk/slindley/">
            Sam Lindley
          </InlineExternalLink>{" "}
          and{" "}
          <InlineExternalLink href="https://simonjf.com/">
            Simon Fowler
          </InlineExternalLink>
          .
        </p>
        <p>
          My research interests broadly revolve around programming language
          design and type systems. I'm currently studying the relationship
          between <i>effect handlers </i>
          and <i>reactive programming</i>.
        </p>
        <p>
          I graduated from Boston University in May 2025 with an M.S. in
          Computer Science and a B.A. in both Computer Science and
          Linguistics/Philosophy.
        </p>
        <p>
          At BU, I worked on session types and refinement types under the
          guidance of{" "}
          <InlineExternalLink href="https://ankushdas.github.io/">
            Prof. Ankush Das
          </InlineExternalLink>
          . We wrote a paper about our work,{" "}
          <InlineExternalLink href="https://arxiv.org/abs/2602.06715">
            which you can find here
          </InlineExternalLink>
          .
        </p>
        <p>
          I was born & raised in Portland, Oregon, USA. In my free time, I enjoy
          reading, running, playing guitar, and spending time with{" "}
          <InlineInternalLink to="/dogs">
            my two dogs, Otis and Sammie.
          </InlineInternalLink>
        </p>
        <p>Feel free to get in touch via my contact info below!</p>
      </PageContent>
    </>
  );
}
