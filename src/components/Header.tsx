import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <header className="w-full p-2 bg-blue-400 shadow sticky top-0 text-lg">
      <nav className="max-w-4xl mx-auto flex justify-evenly items-center px-4">
        <Link to="/">Home</Link>
        <Link to="/site">About the Site</Link>
      </nav>
    </header>
  );
};

export default Header;
