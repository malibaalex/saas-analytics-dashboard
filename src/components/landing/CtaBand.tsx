import { ctaContent, dashboardHref } from "../../lib/data/landing";
import { buttonVariants, Container } from "../ui";

const CtaBand = () => (
  <section aria-labelledby="cta-heading" className="mb-16">
    <Container>
      <div className="rounded-3xl border border-border bg-secondary p-8 text-center text-secondary-foreground shadow-lg sm:p-12">
        <div className="mx-auto max-w-xl">
          <h2 id="cta-heading" className="mb-3 text-h1 font-extrabold">
            {ctaContent.heading}
          </h2>
          <p className="mb-8 text-body text-secondary-foreground/70">{ctaContent.description}</p>
          <a href={dashboardHref} className={buttonVariants({ variant: "primary", size: "lg" })}>
            {ctaContent.button}
          </a>
        </div>
      </div>
    </Container>
  </section>
);

export default CtaBand;
