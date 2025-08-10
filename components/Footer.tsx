import { Separator } from "./ui/separator";
import siligongLogo from "figma:asset/2ee758f66f1f8612bc72a41c64d213728aefd136.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-10 overflow-hidden relative flex items-center">
                <img
                  src={siligongLogo}
                  alt="Siligong Valley Logo"
                  className="h-auto w-full object-cover object-left absolute left-2"
                  style={{
                    minHeight: "40px",
                    width: "120px",
                    marginLeft: "-2px",
                  }}
                />
              </div>
              <div>
                <h3 className="text-2xl">Siligong Gamedev</h3>
                <p className="text-sm text-primary-foreground/70">
                  Part of Siligong Valley
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Wollongong's premier game development community.
              Bringing together passionate creators, learners,
              and innovators in the Illawarra region as part of
              the broader Siligong Valley ecosystem.
            </p>
            <p className="text-sm text-primary-foreground/60">
              © 2025 Siligong Valley. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Learning Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Game Engines
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Community Guidelines
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Siligong Valley
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="text-center text-primary-foreground/60">
          <p>
            Made with ❤️ by the Siligong Valley community in
            Wollongong, NSW, Australia
          </p>
        </div>
      </div>
    </footer>
  );
}