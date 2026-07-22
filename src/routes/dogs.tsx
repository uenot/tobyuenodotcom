import { createFileRoute } from "@tanstack/react-router";
import otis from "../assets/otis.jpg";
import sammie from "../assets/sammie.jpg";
import PageContent from "../components/PageContent";

export const Route = createFileRoute("/dogs")({
  component: Dogs,
});

const Dog = ({ src, text }: { src: string; text: string }) => {
  return (
    <div className="px-2 sm:px-0">
      <img src={src} alt={text} />
      <p className="text-center text-xl py-2">{text}</p>
    </div>
  );
};

function Dogs() {
  return (
    <PageContent>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6">
        <Dog src={otis} text="Otis" />
        <Dog src={sammie} text="Sammie" />
      </div>
    </PageContent>
  );
}
