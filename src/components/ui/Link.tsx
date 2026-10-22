import type { AnchorHTMLAttributes, MouseEvent } from "react";
import shouldInterceptClick from "./shouldInterceptClick";
import locationStore from "../../lib/location-store";
interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const Link = ({ href, onClick, target, ...props }: LinkProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (shouldInterceptClick(event, href, target)) {
      event.preventDefault();
      locationStore.navigate(href);
    }
  };
  return <a href={href} target={target} onClick={handleClick} {...props} />;
};

export default Link;
