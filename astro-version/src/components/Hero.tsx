import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Resolve the Figma asset using our asset system
const siligongLogo = "/images/logo-horz.svg";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=800&fit=crop"
          alt="Game development workspace"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <img
            src={siligongLogo}
            alt="Siligong Valley Logo"
            className="w-48 md:w-60 h-auto mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-6xl mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent uppercase">
            Siligong Gamedev
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Part of the Siligong Valley Community
          </p>
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Wollongong's Premier Game Development Community
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Join passionate game developers, designers, and enthusiasts in the
          Illawarra region. Learn, create, and share your gaming projects with
          like-minded creators.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-3">
            Join Our Community
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3">
            Next Meetup
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
