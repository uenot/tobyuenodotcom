import { useLocation } from "@tanstack/react-router";
import { logInternalLink } from "../utils/log";

type Props = {
  to: string;
  href: string;
  children: React.ReactNode;
};

const HeaderStaticLink = (props: Props) => {
  const loc = useLocation();
  const onClick = () => logInternalLink(loc.pathname, props.to);
  return (
    <a {...props} target="_blank" rel="noopener noreferrer" onClick={onClick} />
  );
};

export default HeaderStaticLink;
