import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Community() {
  const projects = [
    {
      title: "Pixel Quest Adventures",
      author: "Sarah Chen",
      description: "A charming 16-bit style RPG featuring procedurally generated dungeons and crafting systems.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
      tags: ["Unity", "C#", "Pixel Art"]
    },
    {
      title: "Ocean Depths",
      author: "Mike Rodriguez",
      description: "Underwater exploration game with realistic physics and beautiful marine life simulations.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      tags: ["Unreal", "Blueprint", "3D"]
    },
    {
      title: "Robo Rescue",
      author: "Alex Thompson",
      description: "Fast-paced puzzle platformer where you control multiple robots to solve environmental challenges.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      tags: ["Godot", "GDScript", "Mobile"]
    }
  ];

  const testimonials = [
    {
      name: "Emma Wilson",
      role: "Indie Developer",
      avatar: "EW",
      quote: "Siligong Gamedev has been instrumental in my journey from hobbyist to published developer. The community support is incredible!"
    },
    {
      name: "James Park",
      role: "Game Designer",
      avatar: "JP", 
      quote: "The workshops and game jams pushed me to try new technologies and techniques I never would have explored on my own."
    },
    {
      name: "Lisa Chen",
      role: "3D Artist",
      avatar: "LC",
      quote: "Meeting other creatives and getting feedback on my work has improved my skills tremendously. This community rocks!"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Community Spotlight</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Check out amazing projects created by our members and hear what they have to say about our community.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl text-center mb-12">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    by {project.author}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl text-center mb-12">What Members Say</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.avatar}`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}