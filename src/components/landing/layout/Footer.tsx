import { footerContent } from "../../../lib/data/landing";
import { Container, Logo } from "../../ui";

const Footer = () => (
  <footer>
    <Container className="border-t border-border pb-12 pt-8">
      <div className="flex flex-col items-center justify-between gap-4 text-small text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <Logo size="sm" />
          <span aria-hidden="true" className="text-border">
            |
          </span>
          <span>{footerContent.tagline}</span>
        </div>

        <nav aria-label="Footer">
          <ul className="flex items-center gap-5 font-medium">
            {footerContent.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                  {...(link.external && { target: "_blank", rel: "noreferrer" })}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Container>
  </footer>
);

export default Footer;
