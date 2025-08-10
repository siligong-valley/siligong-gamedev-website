export const siteConfig = {
  // Core Site Information
  name: "Siligong Gamedev",
  tagline: "Wollongong's Premier Game Development Community",
  description:
    "Join passionate game developers, designers, and enthusiasts in the Illawarra region. Learn, create, and share your gaming projects with like-minded creators.",
  parentOrganization: "Siligong Valley Community",
  url: "https://siligong-gamedev.com",

  // Location Information
  location: {
    city: "Wollongong",
    state: "NSW",
    country: "Australia",
    region: "Illawarra",
    defaultVenue: "University of Wollongong",
    timezone: "Australia/Sydney",
  },

  // Social Links & Contact
  social: {
    discord: "https://discord.gg/Czd8ufdbEV",
    meetup: "https://www.meetup.com/siligongvalley/",
    github: "https://github.com/siligong-valley",
    siligongValley: "https://siligongvalley.com",
  },

  // Feature Flags
  features: {
    events: true,
    newsletter: true,
    projectShowcase: true,
    memberTestimonials: true,
    contactForm: true,
    darkMode: true,
    animations: true,
  },

  // Navigation
  navigation: {
    main: [
      { label: "About", href: "#about" },
      { label: "Events", href: "#events" },
      { label: "Projects", href: "#projects" },
      { label: "Community", href: "#community" },
      { label: "Contact", href: "#contact" },
    ],
    footer: {
      quickLinks: [
        { label: "About Us", href: "#about" },
        { label: "Events", href: "#events" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
      resources: [
        { label: "Learning Resources", href: "#" },
        { label: "Game Engines", href: "#" },
        { label: "Community Guidelines", href: "#" },
        { label: "Siligong Valley", href: "#" },
      ],
    },
  },

  // Default Content & Messages
  content: {
    copyright: `© ${new Date().getFullYear()} Siligong Valley. All rights reserved.`,
    madeWith:
      "Made with ❤️ by the Siligong Valley community in Wollongong, NSW, Australia",
    noEventsMessage: "No upcoming events scheduled. Check back soon!",
    defaultEventRegistration: "Register Now",
    joinCommunityButton: "Join Our Community",
    nextMeetupButton: "Next Meetup",
  },

  // Event Defaults
  events: {
    defaultCapacity: 30,
    registrationRequired: true,
    defaultDuration: "2 hours",
    categories: ["Meetup", "Workshop", "Game Jam", "Talk", "Social"],
  },

  // API Endpoints (use environment variables for actual URLs)
  api: {
    newsletter: import.meta.env.PUBLIC_NEWSLETTER_ENDPOINT || "/api/newsletter",
    contact: import.meta.env.PUBLIC_CONTACT_ENDPOINT || "/api/contact",
    events: import.meta.env.PUBLIC_EVENTS_ENDPOINT || "/api/events",
  },

  // SEO & Meta
  seo: {
    defaultImage: "/og-image.png",
    twitterHandle: "@siligonggamedev",
    keywords: [
      "game development",
      "gamedev",
      "wollongong",
      "illawarra",
      "siligong valley",
      "indie games",
      "game programming",
      "unity",
      "unreal engine",
      "godot",
      "game design",
      "game jam",
    ],
  },
} as const;

// Type exports for TypeScript support
export type SiteConfig = typeof siteConfig;
export type NavigationItem = (typeof siteConfig.navigation.main)[0];
export type SocialPlatform = keyof typeof siteConfig.social;
