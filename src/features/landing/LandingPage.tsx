import Container from "../../components/ui/Container";
import FeatureStrip from "./FeatureStrip";
import Hero from "./Hero";

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-background pb-20">
      <Container>
        <Hero />
        <FeatureStrip />
      </Container>
    </main>
  );
};

export default LandingPage;
