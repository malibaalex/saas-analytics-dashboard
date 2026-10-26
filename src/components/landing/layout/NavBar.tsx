import { useState } from "react";
import cn from "../../../lib/c";
import { dashboardHref, icons, navLinks } from "../../../lib/data/landing";
import { Button, buttonVariants, Container, Icon, Logo, ThemeToggle } from "../../ui";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  const tertiaryLink = buttonVariants({ variant: "tertiary", size: "sm" });
  return (
    <header className="sticky top-0 z-50 border-b  border-border bg-background/85 backdrop-blur-md">
      <Container className="flex items-center  justify-between py-3">
        <a href="/" aria-label="Pulse home" className="rounded-xl">
          <Logo />
        </a>

        <nav aria-label="primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(tertiaryLink, "gap-1.5")}
                  {...(link.external && { target: "_blank", rel: "noreferret" })}
                >
                  {link.label}
                  {link.external && (
                    <Icon paths={icons.external} className="size-3 text-muted-foreground" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href={dashboardHref}
            className={cn(buttonVariants({ variant: "primary", size: "sm" }), "max-sm:hidden")}
          >
            Open dashboard
          </a>

          <Button
            variant="secondary"
            size="icon"
            className="bg-card md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            <Icon paths={open ? icons.close : icons.menu} className="size-4" />
          </Button>
        </div>
      </Container>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-border md:hidden"
      >
        <Container className="py-3">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(tertiaryLink, "w-full justify-start")}
                  onClick={closeMenu}
                  {...(link.external && { target: "_blank", rel: "noreferrer" })}
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li className="pt-2 sm:hidden">
              <a
                href={dashboardHref}
                className={cn(buttonVariants({ variant: "primary", size: "default" }), "w-full")}
              >
                Open dashboard
              </a>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  );
};

export default NavBar;
