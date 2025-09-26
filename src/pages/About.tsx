import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Globe, Users, Award, MapPin, Compass } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Travel enthusiast with 15+ years of exploring 60+ countries. Passionate about creating authentic travel experiences.",
    },
    {
      name: "Michael Chen",
      role: "Head of Destinations",
      bio: "Former travel photographer and guide who has led expeditions across all seven continents.",
    },
    {
      name: "Emma Rodriguez",
      role: "Cultural Expert",
      bio: "Anthropologist specializing in cultural heritage sites and sustainable tourism practices.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Travel",
      description: "We believe travel transforms lives and creates lasting memories.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Celebrating diversity and connecting cultures through meaningful experiences.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a supportive community of travelers sharing authentic experiences.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to providing the highest quality recommendations and service.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About TravelQuest
          </h1>
          <p className="text-xl md:text-2xl text-white/90 animate-fade-in">
            Inspiring wanderlust and creating unforgettable travel experiences since 2020
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-8"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-center space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              TravelQuest was born from a simple belief: everyone deserves to experience the magic of travel. 
              Founded in 2020 by a team of passionate travelers, we started as a small blog sharing hidden gems 
              and authentic experiences from around the world.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              What began as personal travel stories quickly grew into a comprehensive platform helping thousands 
              of travelers discover their perfect destinations. We specialize in three key areas: pristine beach 
              paradises, sacred cultural temples, and immersive country experiences.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, TravelQuest is more than a recommendation platform—we're a community of explorers, 
              dreamers, and adventure seekers united by our love for discovering the extraordinary in every corner of our planet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center bg-gradient-card p-6 rounded-xl shadow-travel">
              <div className="bg-gradient-ocean text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">150+</h3>
              <p className="text-muted-foreground">Destinations Covered</p>
            </div>
            
            <div className="text-center bg-gradient-card p-6 rounded-xl shadow-travel">
              <div className="bg-gradient-sunset text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">50,000+</h3>
              <p className="text-muted-foreground">Happy Travelers</p>
            </div>
            
            <div className="text-center bg-gradient-card p-6 rounded-xl shadow-travel">
              <div className="bg-gradient-hero text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Compass className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">4.9/5</h3>
              <p className="text-muted-foreground">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and help us create meaningful travel experiences for our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-ocean p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of travel experts, photographers, and cultural enthusiasts is dedicated to bringing you the best travel experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-card p-6 rounded-xl shadow-travel text-center group hover:shadow-glow transition-bounce">
                <div className="w-24 h-24 bg-gradient-ocean rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of travelers who trust TravelQuest to guide their adventures
          </p>
          <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
            Explore Destinations
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;