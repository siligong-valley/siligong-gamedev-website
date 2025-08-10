import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export function Events() {
  const upcomingEvents = [
    {
      title: "Monthly Gamedev Meetup",
      date: "March 15, 2025",
      time: "6:00 PM - 8:30 PM",
      location: "University of Wollongong, Building 3",
      attendees: 24,
      type: "Meetup",
      description: "Our monthly gathering featuring project showcases, networking, and a guest speaker on procedural generation techniques.",
      featured: true
    },
    {
      title: "Unity Workshop: 2D Platformers",
      date: "March 22, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Wollongong Library",
      attendees: 12,
      type: "Workshop",
      description: "Hands-on workshop covering character controllers, level design, and game mechanics for 2D platformer games.",
      featured: false
    },
    {
      title: "Game Jam Weekend",
      date: "April 5-7, 2025",
      time: "Friday 6PM - Sunday 6PM",
      location: "Innovation Campus",
      attendees: 45,
      type: "Game Jam",
      description: "48-hour game development challenge with prizes! Form teams and create amazing games around this month's theme.",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Upcoming Events</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for exciting meetups, workshops, and game jams. All skill levels welcome!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className={`${event.featured ? 'ring-2 ring-primary/20 shadow-lg' : ''} hover:shadow-lg transition-shadow`}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={event.type === 'Game Jam' ? 'default' : 'secondary'}>
                    {event.type}
                  </Badge>
                  {event.featured && (
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  {event.description}
                </CardDescription>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>

                <Button className="w-full" variant={event.featured ? 'default' : 'outline'}>
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}