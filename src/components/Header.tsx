import HeaderInternalLink from "./HeaderInternalLink";
import HeaderStaticLink from "./HeaderStaticLink";

const Header = () => {
  return (
    <header className="w-full p-2 bg-blue-400 shadow sticky top-0 text-lg">
      <nav className="max-w-4xl mx-auto flex justify-evenly items-center px-4">
        <HeaderInternalLink to="/">Home</HeaderInternalLink>
        <HeaderInternalLink to="/site">About the Site</HeaderInternalLink>
        <HeaderStaticLink to="/cv" href="/files/CV.pdf">
          CV
        </HeaderStaticLink>
      </nav>
    </header>
  );
};

export default Header;
