import type { ReactNode } from "react";
import cn from "../../lib/c";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

const Container = ({ className, children }: ContainerProps) => (
  <div className={cn("mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8", className)}>{children}</div>
);

export default Container;
