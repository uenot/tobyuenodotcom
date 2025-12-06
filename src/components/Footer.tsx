import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="w-full p-2 bg-gray-300 shadow sticky bottom-0 text-sm">
      <div className="max-w-4xl mx-auto flex items-center px-4">
        <FooterLink href="mailto:tobyueno@gmail.com">
          tobyueno@gmail.com
        </FooterLink>
        <FooterLink href="https://github.com/uenot">Github</FooterLink>
        <FooterLink href="https://www.linkedin.com/in/toby-ueno/">
          LinkedIn
        </FooterLink>
      </div>
    </footer>
  );
};

export default Footer;
