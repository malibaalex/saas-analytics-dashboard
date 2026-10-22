import { buttonVariants } from "../../components/ui/button-variants";
import Link from "../../components/ui/Link";

const HeroCta = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link href="/dashboard" className={buttonVariants({ variant: "primary", size: "lg" })}>
        Open dashboard
      </Link>
      <Link href="#features" className={buttonVariants({ variant: "secondary", size: "lg" })}>
        See what’s inside
      </Link>
    </div>
  );
};

export default HeroCta;
