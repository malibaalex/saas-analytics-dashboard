import Card from "../../components/ui/Card";
import Heading from "../../components/ui/Heading";
import Text from "../../components/ui/Text";
import type { Feature } from "./feature-content";

const FeatureItem = ({ feature }: { feature: Feature }) => {
  return (
    <Card className="flex flex-col gap-2">
      <Heading level={3}>{feature.title}</Heading>
      <Text variant="muted">{feature.description}</Text>
    </Card>
  );
};

export default FeatureItem;
