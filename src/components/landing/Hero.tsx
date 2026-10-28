import cn from "../../lib/c";
import { dashboardHref, heroContent, icons, trustItems } from "../../lib/data/landing";
import { buttonVariants, Container, Icon } from "../ui";
import HeroPreview from "./HeroPreview";

const Hero = () => {
  return (
    <section aria-labelledby="hero-heading" className="mb-16 mt-6 sm:mt-10 md:mb-24">
      <Container>
        <div className="mb-10 max-w-3xl">
          <div
            className="hero-load-item mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-small font-semibold text-foreground shadow-xs"
            style={{ animationDelay: "0ms" }}
          >
            <span className="size-2 animate-pulse rounded-full bg-primary" aria-hidden="true" />
            <span>{heroContent.badge}</span>
          </div>

          <h1
            id="hero-heading"
            className="hero-load-item mb-5 text-h1 font-extrabold text-foreground sm:text-display"
            style={{ animationDelay: "80ms" }}
          >
            {heroContent.title}
          </h1>

          <p
            className="hero-load-item mb-8 max-w-2xl text-body text-muted-foreground sm:text-h3"
            style={{ animationDelay: "160ms" }}
          >
            {heroContent.description}
          </p>

          <div
            className="hero-load-item mb-6 flex flex-wrap items-center gap-3.5"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={dashboardHref}
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              {heroContent.primaryCta}
            </a>
            <a
              href="#demo"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "bg-card")}
            >
              {heroContent.secondaryCta}
            </a>
          </div>

          <ul
            className="hero-load-item flex flex-wrap items-center gap-x-5 gap-y-2 text-small font-medium text-muted-foreground"
            style={{ animationDelay: "320ms" }}
          >
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <Icon paths={icons.check} strokeWidth={2.5} className="size-3.5 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-load-item" style={{ animationDelay: "420ms" }}>
          <HeroPreview />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
