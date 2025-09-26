import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DestinationCardProps {
  title: string;
  location: string;
  description: string;
  image: string;
  rating: number;
  type: "beach" | "temple" | "country";
}

const DestinationCard = ({ title, location, description, image, rating, type }: DestinationCardProps) => {
  const getTypeColor = () => {
    switch (type) {
      case "beach":
        return "bg-blue-500";
      case "temple":
        return "bg-amber-500";
      case "country":
        return "bg-green-500";
      default:
        return "bg-primary";
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case "beach":
        return "Beach Paradise";
      case "temple":
        return "Cultural Heritage";
      case "country":
        return "Country Guide";
      default:
        return "Destination";
    }
  };

  return (
    <div className="bg-gradient-card rounded-xl shadow-travel hover:shadow-glow transition-bounce group overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getTypeColor()}`}>
            {getTypeLabel()}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 text-muted-foreground mb-2">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        
        <Button variant="travel" className="w-full">
          Explore Destination
        </Button>
      </div>
    </div>
  );
};

export default DestinationCard;