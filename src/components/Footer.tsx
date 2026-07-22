import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="w-full p-2 bg-gray-300 shadow sm:sticky bottom-0 text-sm">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row flex-wrap justify-evenly items-center gap-2 sm:gap-4">
        <FooterLink href="mailto:toby.ueno@ed.ac.uk">
          Academic: toby.ueno@ed.ac.uk
        </FooterLink>
        <FooterLink href="mailto:tobyueno@gmail.com">
          Personal: tobyueno@gmail.com
        </FooterLink>
        <FooterLink href="https://github.com/uenot">GitHub</FooterLink>
        <FooterLink href="https://www.linkedin.com/in/toby-ueno/">
          LinkedIn
        </FooterLink>
      </div>
    </footer>
  );
};

export default Footer;
