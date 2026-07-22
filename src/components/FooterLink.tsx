import { useLocation } from "@tanstack/react-router";
import { logExternalLink } from "../utils/log";

type Props = {
  href: string;
  children: React.ReactNode;
};

const FooterLink = (props: Props) => {
  const loc = useLocation();
  const onClick = () => logExternalLink(loc.pathname, props.href);
  return (
    <a
      {...props}
      onClick={onClick}
      className="text-center"
      target="_blank"
      rel="noopener noreferrer"
    />
  );
};

export default FooterLink;
