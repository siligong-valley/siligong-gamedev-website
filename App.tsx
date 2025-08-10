import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Events } from "./components/Events";
import { Community } from "./components/Community";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Events />
      <Community />
      <Contact />
      <Footer />
    </div>
  );
}