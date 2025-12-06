import { Link, useLocation } from "@tanstack/react-router";
import { logInternalLink } from "../utils/log";

type Props = {
  to: string;
  children: React.ReactNode;
};

const HeaderInternalLink = (props: Props) => {
  const loc = useLocation();
  const onClick = () => logInternalLink(loc.pathname, props.to);
  return <Link {...props} onClick={onClick} />;
};

export default HeaderInternalLink;
