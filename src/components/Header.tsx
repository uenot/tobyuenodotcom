import HeaderLink from "./HeaderLink";

const Header = () => {
  return (
    <header className="w-full p-2 bg-blue-400 shadow sticky top-0 text-lg">
      <nav className="max-w-4xl mx-auto flex justify-evenly items-center px-4">
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/site">About the Site</HeaderLink>
      </nav>
    </header>
  );
};

export default Header;
