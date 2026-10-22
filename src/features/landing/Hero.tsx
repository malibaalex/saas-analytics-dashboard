import Heading from "../../components/ui/Heading";
import Text from "../../components/ui/Text";
import HeroCta from "./HeroCta";

const Hero = () => {
  return (
    <section className="flex max-w-2xl flex-col gap-5 py-16 md:py-24">
      <Text as="span" className="text-small font-semibold text-accent">
        Orbix Studio
      </Text>
      <Heading level={1} size="display">
        Every report, and where it stands.
      </Heading>
      <Text variant="muted" className="max-w-xl text-lg">
        Draft, review, and publish financial reports from one dashboard, without chasing status
        updates in email.
      </Text>
      <HeroCta />
    </section>
  );
};

export default Hero;
