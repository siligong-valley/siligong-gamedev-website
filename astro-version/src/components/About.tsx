import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Gamepad2, Users, Lightbulb, Code } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function About() {
  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Game Development",
      description:
        "From indie games to AAA concepts, we explore all aspects of game creation including programming, design, and storytelling.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description:
        "Connect with developers of all skill levels, from beginners taking their first steps to experienced professionals.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Learning & Growth",
      description:
        "Regular workshops, talks, and game jams to help you develop new skills and bring your ideas to life.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technology Focus",
      description:
        "Explore different game engines, programming languages, and development tools used in modern game development.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">About Siligong Gamedev</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a vibrant community of game developers and enthusiasts based
            in Wollongong, part of the broader Siligong Valley ecosystem. We
            bring together creative minds to share knowledge, collaborate on
            projects, and push the boundaries of interactive entertainment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-6">
              As part of Siligong Valley, we exist to foster innovation and
              creativity in the Illawarra gaming community. We believe that
              great games come from diverse perspectives and collaborative
              efforts within our broader tech ecosystem.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're interested in programming, art, design, music, or
              just love playing games, there's a place for you in our community.
              We meet regularly to share projects, learn new techniques, and
              support each other's creative journeys.
            </p>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop"
              alt="Game developers collaborating"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 text-primary">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
