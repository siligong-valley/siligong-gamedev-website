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
import { Mail, MessageSquare, Calendar } from "lucide-react";
import { LinkButton } from "./ui/link-button";
import { siteConfig } from "@/config";
import { SiGithub, SiSlack, SiDiscord } from "@icons-pack/react-simple-icons";

export default function Contact() {
  return (
    <section className="py-20 bg-secondary/30" id="join">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Join Our Community</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to level up your game development journey? Connect with us and
            become part of the Siligong Valley community!
          </p>
        </div>

        <div>
          <div>
            <h3 className="text-2xl md:text-3xl mb-8">Get Connected</h3>

            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="min-w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="text-lg">
                        Siligong Valley Slack
                      </CardTitle>
                      <CardDescription>
                        Join the Siligong Valley Slack community to connect with
                        the wider community, share knowledge, and collaborate on
                        projects.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <LinkButton
                    className="w-full"
                    href={siteConfig.social.slack}
                    external
                  >
                    Join Slack
                  </LinkButton>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="min-w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="text-lg">
                        Siligong Valley Discord
                      </CardTitle>
                      <CardDescription>
                        Talk gamedev, play games, and chill with the community.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <LinkButton
                    className="w-full"
                    href={siteConfig.social.discord}
                    external
                  >
                    Join Discord
                  </LinkButton>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="min-w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="text-lg">Meetups</CardTitle>
                      <CardDescription>
                        RSVP for upcoming events.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <LinkButton
                    className="w-full"
                    external
                    href={siteConfig.social.meetup}
                  >
                    View Meetups
                  </LinkButton>
                </CardContent>
              </Card>
            </div>

            <div className="hidden">
              <h4 className="text-lg mb-4">Get in touch</h4>
              <div className="flex gap-4">
                <LinkButton
                  variant="outline"
                  size="icon"
                  external
                  href={siteConfig.social.slack}
                >
                  <SiSlack className="w-4 h-4" />
                </LinkButton>
                <LinkButton
                  variant="outline"
                  size="icon"
                  external
                  href={siteConfig.social.discord}
                >
                  <SiDiscord className="w-4 h-4" />
                </LinkButton>
                <LinkButton
                  variant="outline"
                  size="icon"
                  external
                  href={siteConfig.social.github}
                >
                  <SiGithub className="w-4 h-4" />
                </LinkButton>
              </div>
            </div>
          </div>

          <div className="hidden">
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
