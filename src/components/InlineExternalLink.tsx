import { useLocation } from "@tanstack/react-router";
import { logExternalLink } from "../utils/log";

type Props = {
  href: string;
  children: React.ReactNode;
};

const InlineExternalLink = (props: Props) => {
  const loc = useLocation();
  const onClick = () => logExternalLink(loc.pathname, props.href);
  return (
    <a
      {...props}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline text-blue-600"
    />
  );
};

export default InlineExternalLink;
