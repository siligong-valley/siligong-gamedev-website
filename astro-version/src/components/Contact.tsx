import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Mail,
  MessageSquare,
  Calendar,
  Github,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Join Our Community</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to level up your game development journey? Connect with us and
            become part of the Siligong Valley community!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl md:text-3xl mb-8">Get Connected</h3>

            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="text-lg">
                        Discord Community
                      </CardTitle>
                      <CardDescription>Chat with members 24/7</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Join Discord</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="text-lg">Meetup Events</CardTitle>
                      <CardDescription>
                        RSVP for upcoming events
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    View Meetup
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="text-lg">Newsletter</CardTitle>
                      <CardDescription>
                        Stay updated with latest news
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input placeholder="your@email.com" className="flex-1" />
                    <Button>Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h4 className="text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Have questions or want to get involved? We'd love to hear from
                  you!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="I'd like to join the community"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about yourself and your interests in game development..."
                    className="min-h-32"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
