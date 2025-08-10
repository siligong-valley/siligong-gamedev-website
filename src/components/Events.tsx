import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { LinkButton } from "./ui/link-button";
import { Badge } from "./ui/badge";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/config";
import dayjs from "dayjs";
import { useState } from "react";

interface EventData {
  id: string;
  slug: string;
  body: string;
  collection: "events";
  data: {
    title: string;
    date: Date;
    endDate?: Date;
    time: string;
    location: string;
    description: string;
    category?: string;
    tags?: string[];
    featured?: boolean;
    image?: string;
    eventUrl?: string;
    capacity?: number;
    attendees?: number;
  };
}

interface EventsProps {
  events?: EventData[];
}

interface FormattedEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  attendees?: number;
  type: string;
  description: string;
  featured: boolean;
  eventUrl?: string;
}

interface EventCardProps {
  event: FormattedEvent;
  isPast?: boolean;
}

function EventCard({ event, isPast = false }: EventCardProps) {
  const buttonText = isPast
    ? "View Event"
    : siteConfig.content.defaultEventRegistration;

  return (
    <Card
      className={`${event.featured && !isPast ? "ring-2 ring-primary/20 shadow-lg" : ""} hover:shadow-lg transition-shadow`}
    >
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant={event.type === "Game Jam" ? "default" : "secondary"}>
            {event.type}
          </Badge>
          {event.featured && !isPast && (
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
              Featured
            </Badge>
          )}
          {isPast && (
            <Badge variant="outline" className="text-muted-foreground">
              Past
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
          {event.attendees != null && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>
                {event.attendees} {isPast ? "attended" : "attending"}
              </span>
            </div>
          )}
        </div>

        {event.eventUrl != null && (
          <LinkButton
            href={event.eventUrl}
            external
            className="w-full"
            variant={event.featured ? "default" : "outline"}
          >
            {buttonText}
          </LinkButton>
        )}
      </CardContent>
    </Card>
  );
}

export default function Events({ events = [] }: EventsProps) {
  const [showPastEvents, setShowPastEvents] = useState(true);

  // Separate past and upcoming events
  const now = dayjs();
  const upcoming = events.filter((event) =>
    dayjs(event.data.date).isAfter(now),
  );
  const past = events.filter((event) => dayjs(event.data.date).isBefore(now));

  // Format events for display
  const formatEvent = (event: EventData) => {
    const startDate = dayjs(event.data.date);
    const endDate = event.data.endDate ? dayjs(event.data.endDate) : null;

    // Format date display
    let dateDisplay: string;
    if (endDate) {
      // Multi-day event
      if (startDate.month() === endDate.month()) {
        // Same month
        dateDisplay = `${startDate.format("D")}-${endDate.format("D MMMM YYYY")}`;
      } else {
        // Different months
        dateDisplay = `${startDate.format("D MMMM YYYY")} - ${endDate.format("D MMMM YYYY")}`;
      }
    } else {
      // Single day event
      dateDisplay = startDate.format("D MMMM YYYY");
    }

    return {
      title: event.data.title,
      date: dateDisplay,
      time: event.data.time,
      location: event.data.location,
      attendees: event.data.attendees,
      type: event.data.category || event.data.tags?.[0] || "Event",
      description: event.data.description,
      featured: event.data.featured || false,
      eventUrl: event.data.eventUrl,
    };
  };

  const upcomingEvents = upcoming.slice(0, 6).map(formatEvent);
  const pastEvents = past.slice(0, 6).map(formatEvent);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Upcoming Events</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for exciting meetups, workshops, and game jams. All skill
            levels welcome!
          </p>
        </div>

        {/* Upcoming Events */}
        {upcomingEvents.length === 0 ? (
          <div className="text-center py-2">
            <p className="text-xl text-muted-foreground">
              {siteConfig.content.noEventsMessage}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <LinkButton
            variant="outline"
            size="lg"
            external
            href={siteConfig.social.meetup}
          >
            View All Siligong Valley Events
          </LinkButton>
        </div>

        {/* Past Events Section */}
        {pastEvents.length > 0 && (
          <div className="mt-16 border-t pt-16">
            <div className="text-center mb-8">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setShowPastEvents(!showPastEvents)}
                className="flex items-center gap-2 text-lg"
              >
                Past Events
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${showPastEvents ? "rotate-180" : ""}`}
                />
              </Button>
            </div>

            {showPastEvents && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event, index) => (
                  <EventCard key={`past-${index}`} event={event} isPast />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
