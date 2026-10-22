import FeatureItem from "./feature-item";
import { features } from "./feature-content";

const FeatureStrip = () => {
  return (
    <section id="features" aria-label="Features" className="grid gap-4 md:grid-cols-3">
      {features.map((feature) => (
        <FeatureItem key={feature.id} feature={feature} />
      ))}
    </section>
  );
};

export default FeatureStrip;
