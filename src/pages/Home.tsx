import { useNavigate } from 'react-router-dom'
import { BirthdayCard } from '../components/BirthdayCard'
import { HistoricPlaces } from '../components/HistoricMoments'
import '../styles/Home.css'

const historicPlaces = [
  {
    id: "rome",
    name: "Ancient Rome",
    description: "Explore the ruins of the Roman Empire",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    details: "Ancient Rome was a civilization that began on the Italian Peninsula as early as the 8th century BC. Located along the Mediterranean Sea, it became the largest empire in the ancient world."
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    description: "Discover the lost city of the Incas",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    details: "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter mountain ridge. It is the most familiar icon of the Inca civilization."
  },
  {
    id: "great-wall",
    name: "Great Wall of China",
    description: "Walk along the ancient wonder of the world",
    image: "https://images.unsplash.com/photo-1508804185872-7f738f2a7f41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    details: "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups."
  }
]

export const Home = () => {

  const handleExploreClick = () => {
    document.getElementById('historic-places')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      <BirthdayCard onExploreClick={handleExploreClick} />
    </div>
  );
} 