import { buttonVariants } from "./components/ui/button-variants";
import Heading from "./components/ui/Heading";
import Link from "./components/ui/Link";
import Text from "./components/ui/Text";
import useCurrentRoute from "./use-current-routes";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <Heading level={1}>Page not found</Heading>
      <Text variant="muted">That address doesn’t match any page in Orbix Studio.</Text>
      <Link href="/" className={buttonVariants({ variant: "primary" })}>
        Back to home
      </Link>
    </main>
  );
};

const Routes = () => {
  const route = useCurrentRoute();
  switch (route) {
    case "landing":
    //   return <LandingPage />;
    case "dashboard":
    //   return <DashboardPage />;
    default:
      return <NotFound />;
  }
};

export default Routes;
