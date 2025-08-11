import { siteConfig } from "@/config";
import { Separator } from "./ui/separator";
import siligongLogoOnly from "@/assets/images/logo-only.svg";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-10 overflow-hidden relative flex items-center">
                <img
                  src={siligongLogoOnly.src}
                  alt="Siligong Valley Logo"
                  className="h-full"
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
              Wollongong's premier game development community. Bringing together
              passionate creators, learners, and innovators in the Illawarra
              region as part of the broader Siligong Valley ecosystem.
            </p>
            <p className="text-sm text-primary-foreground/60">
              © 2025 Siligong Valley. All rights reserved.
            </p>
          </div>

          <div className="col-span-2">
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="text-primary-foreground/80 flex flex-wrap gap-x-4">
              <li>
                <a
                  href={siteConfig.social.slack}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Slack
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.discord}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Discord
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
                  href={siteConfig.social.siligongValley}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Siligong Valley
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.github}
                  className="hover:text-primary-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden">
            <h4 className="text-lg mb-4">Resources</h4>
            <ul className="gap-y-2 text-primary-foreground/80 flex flex-wrap">
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
                  href={siteConfig.social.siligongValley}
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
            Made with ❤️ by the Siligong Valley community in Wollongong, NSW,
            Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
