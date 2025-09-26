import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, MapPin, Users } from "lucide-react";
import heroBeach from "@/assets/hero-beach.jpg";
import beach1 from "@/assets/beach-1.jpg";
import beach2 from "@/assets/beach-2.jpg";
import temple1 from "@/assets/temple-main.jpg";
import temple2 from "@/assets/temple-2.jpg";
import japanCountry from "@/assets/japan-country.jpg";
import italyCountry from "@/assets/italy-country.jpg";

const Home = () => {
  const beachDestinations = [
    {
      title: "Tropical Paradise Beach",
      location: "Maldives",
      description: "Experience pristine white sand beaches with crystal-clear turquoise waters. Perfect for relaxation, water sports, and romantic getaways. Discover secluded coves and vibrant coral reefs.",
      image: beach1,
      rating: 4.9,
      type: "beach" as const,
    },
    {
      title: "Sunset Bay Resort",
      location: "Bali, Indonesia",
      description: "Watch breathtaking sunsets from this stunning coastal paradise. Enjoy world-class surfing, traditional Balinese culture, and luxury beachfront accommodations.",
      image: beach2,
      rating: 4.8,
      type: "beach" as const,
    },
  ];

  const templeDestinations = [
    {
      title: "Ancient Golden Temple",
      location: "Kyoto, Japan",
      description: "Discover centuries of spiritual heritage at this magnificent temple complex. Marvel at intricate architecture, peaceful gardens, and traditional ceremonies that continue today.",
      image: temple1,
      rating: 4.9,
      type: "temple" as const,
    },
    {
      title: "Sacred Stone Temple",
      location: "Angkor, Cambodia",
      description: "Explore the mystical ruins of ancient civilizations. This UNESCO World Heritage site showcases incredible stone carvings and architectural mastery from a bygone era.",
      image: temple2,
      rating: 4.7,
      type: "temple" as const,
    },
  ];

  const countryDestinations = [
    {
      title: "Land of the Rising Sun",
      location: "Japan",
      description: "Experience the perfect blend of ancient traditions and modern innovation. From Mount Fuji's majestic beauty to Tokyo's bustling streets, Japan offers unforgettable adventures.",
      image: japanCountry,
      rating: 4.9,
      type: "country" as const,
    },
    {
      title: "Mediterranean Jewel",
      location: "Italy",
      description: "Immerse yourself in art, history, and incredible cuisine. Explore rolling Tuscan hills, romantic Venice canals, and the timeless beauty of Rome's ancient monuments.",
      image: italyCountry,
      rating: 4.8,
      type: "country" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBeach})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/70" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Your Next
            <span className="block text-accent-glow">Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            Personalized travel recommendations to help you explore amazing destinations and create unforgettable memories around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button variant="hero" size="lg" className="text-lg">
              Start Exploring
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              Watch Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Welcome to TravelQuest
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            We are passionate about helping travelers discover their perfect destinations. Our platform provides 
            personalized recommendations, detailed guides, and insider tips to make your travel dreams come true. 
            From pristine beaches to ancient temples and vibrant countries, we've got your next adventure covered.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="bg-gradient-ocean p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-bounce">
                <Compass className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-muted-foreground">Curated recommendations from travel experts</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-sunset p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-bounce">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Diverse Destinations</h3>
              <p className="text-muted-foreground">From beaches to temples to countries worldwide</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-bounce">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-muted-foreground">Real experiences from fellow travelers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beach Recommendations */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Beach Paradise Destinations</h2>
            <p className="text-xl text-muted-foreground">Escape to pristine shores and crystal-clear waters</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {beachDestinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Temple Recommendations */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Sacred Temple Experiences</h2>
            <p className="text-xl text-muted-foreground">Discover spiritual heritage and ancient wisdom</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {templeDestinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Country Recommendations */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Country Adventures</h2>
            <p className="text-xl text-muted-foreground">Explore diverse cultures and breathtaking landscapes</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {countryDestinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;