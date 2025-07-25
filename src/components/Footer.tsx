const Footer = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log("test!");
  };

  return (
    <footer className="w-full p-2 bg-gray-300 shadow sticky bottom-0 text-sm">
      <div className="max-w-4xl mx-auto flex items-center px-4">
        <a
          className="flex-1 text-center"
          href="mailto:tobyueno@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          tobyueno@gmail.com
        </a>
        <a
          className="flex-1 text-center"
          href="https://github.com/uenot"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          GitHub
        </a>
        <a
          className="flex-1 text-center"
          href="https://www.linkedin.com/in/toby-ueno/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
