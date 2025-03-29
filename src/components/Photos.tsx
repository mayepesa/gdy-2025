import React from 'react';
import '../styles/Photos.css';

interface Photo {
  id: number;
  url: string;
  caption: string;
  size: 'small' | 'medium' | 'large';
}

const photos: Photo[] = [
  {
    id: 1,
    url: '/public/memories/WhatsApp Image 2025-03-28 at 1.10.27 PM.jpeg',
    caption: 'Rebel',
    size: 'small'
  },
  {
    id: 2,
    url: '/memories/WhatsApp Image 2025-03-28 at 1.10.27 PM (1).jpeg',
    caption: 'Princess',
    size: 'small'
  },
  {
    id: 3,
    url: '/memories/WhatsApp Image 2025-03-28 at 1.10.27 PM (2).jpeg',
    caption: 'Mom time',
    size: 'small'
  },
  {
    id: 4,
    url: '/memories/WhatsApp Image 2025-03-28 at 1.10.27 PM (3).jpeg',
    caption: 'PC girly',
    size: 'small'
  },
  {
    id: 5,
    url: '/memories/WhatsApp Image 2025-03-28 at 1.10.28 PM.jpeg',
    caption: 'Jetski girly',
    size: 'small'
  },
  {
    id: 6,
    url: '/memories/WhatsApp Image 2025-03-28 at 1.10.28 PM (1).jpeg',
    caption: 'Rope swings',
    size: 'small'
  },
  {
    id: 7,
    url: '/memories/WhatsApp Image 2025-03-28 at 1.10.28 PM (2).jpeg',
    caption: ':c girly',
    size: 'small'
  },
  {
    id: 8,
    url: '/memories/WhatsApp Image 2025-03-28 at 1.10.28 PM (3).jpeg',
    caption: 'Tetero girly',
    size: 'small'
  },
  {
    id: 9,
    url: '/memories/WhatsApp Image 2025-03-28 at 1.10.29 PM.jpeg',
    caption: 'Dancing girly',
    size: 'small'
  },
  {
    id: 10,
    url: '/memories/WhatsApp Image 2025-03-28 at 1.10.29 PM (1).jpeg',
    caption: 'Winner',
    size: 'small'
  },
  {
    id: 11,
    url: '/memories/WhatsApp Image 2025-03-28 at 1.10.29 PM (2).jpeg',
    caption: 'Model',
    size: 'small'
  },
  {
    id: 12,
    url: '/memories/WhatsApp Image 2025-03-28 at 1.10.29 PM (3).jpeg',
    caption: 'Forehead crespo',
    size: 'small'
  },
  {
    id: 13,
    url: '/memories/WhatsApp Image 2025-03-28 at 1.10.29 PM (4).jpeg',
    caption: 'Sand monster',
    size: 'small'
  },
  {
    id: 14,
    url: '/memories/WhatsApp Image 2025-03-28 at 1.10.30 PM.jpeg',
    caption: 'Cutie',
    size: 'small'
  },
  {
    id: 15,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.38.11 AM (13).jpeg',
    caption: 'Shark girl',
    size: 'small'
  },
  {
    id: 16,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.38.11 AM (14).jpeg',
    caption: 'Sandwoman',
    size: 'small'
  },
  {
    id: 17,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.38.11 AM (15).jpeg',
    caption: 'Damn',
    size: 'small'
  },
  {
    id: 18,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (19).jpeg',
    caption: 'Dog walker',
    size: 'small'
  },
  {
    id: 19,
    url: '/memories/WhatsApp Image 2025-03-05 at 11.13.32 AM.jpeg',
    caption: 'Hi',
    size: 'small'
  },
  {
    id: 20,
    url: '/memories/WhatsApp Image 2025-03-28 at 1.10.26 PM.jpeg',
    caption: 'Dancer',
    size: 'small'
  },
  {
    id: 21,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.38.10 AM.jpeg',
    caption: 'Rider',
    size: 'small'
  },
  {
    id: 22,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.38.11 AM (1).jpeg',
    caption: 'Let me go',
    size: 'small'
  },
  {
    id: 23,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.38.11 AM (10).jpeg',
    caption: 'Sand thinking',
    size: 'small'
  },
  {
    id: 24,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.38.11 AM (11).jpeg',
    caption: 'Doggy leader',
    size: 'small'
  },
  {
    id: 25,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.38.11 AM (12).jpeg',
    caption: 'Piraña',
    size: 'small'
  },
  {
    id: 26,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.38.11 AM (2).jpeg',
    caption: 'Stairs girly',
    size: 'small'
  },
  {
    id: 27,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.38.11 AM (3).jpeg',
    caption: ':o',
    size: 'small'
  },
  {
    id: 28,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.38.11 AM (4).jpeg',
    caption: 'Camping girly',
    size: 'small'
  },
  {
    id: 29,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.38.11 AM (5).jpeg',
    caption: 'Dinner girly',
    size: 'small'
  },
  {
    id: 30,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.38.11 AM (6).jpeg',
    caption: 'Again with the sand',
    size: 'small'
  },
  {
    id: 31,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.38.11 AM (7).jpeg',
    caption: 'Termales',
    size: 'small'
  },
  {
    id: 32,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.38.11 AM (8).jpeg',
    caption: 'Girlies',
    size: 'small'
  },
  {
    id: 33,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.38.11 AM (9).jpeg',
    caption: 'Peace',
    size: 'small'
  },
  {
    id: 34,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.38.11 AM.jpeg',
    caption: 'Viva Las Vegas',
    size: 'small'
  },
  {
    id: 35,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.16 AM (1).jpeg',
    caption: 'Sister cutiepies',
    size: 'small'
  },
  {
    id: 36,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.16 AM (2).jpeg',
    caption: '?',
    size: 'small'
  },
  {
    id: 37,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.16 AM (3).jpeg',
    caption: 'jiji',
    size: 'small'
  },
  {
    id: 38,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.16 AM.jpeg',
    caption: 'Trying to scape your mortal body',
    size: 'small'
  },
  {
    id: 39,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.17 AM (1).jpeg',
    caption: 'Hair hurts',
    size: 'small'
  },
  {
    id: 40,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.17 AM.jpeg',
    caption: 'My pony',
    size: 'small'
  },
  {
    id: 41,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.18 AM (1).jpeg',
    caption: '11',
    size: 'small'
  },
  {
    id: 42,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.18 AM (2).jpeg',
    caption: 'Floating girly',
    size: 'small'
  },
  {
    id: 43,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.18 AM (3).jpeg',
    caption: 'Sand cuties',
    size: 'small'
  },
  {
    id: 44,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.18 AM (4).jpeg',
    caption: 'Christmas vibes',
    size: 'small'
  },
  {
    id: 45,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.18 AM (5).jpeg',
    caption: ':3',
    size: 'small'
  },
  {
    id: 46,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.18 AM (6).jpeg',
    caption: 'Whats that',
    size: 'small'
  },
  {
    id: 47,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.18 AM.jpeg',
    caption: 'Royalty',
    size: 'small'
  },
  {
    id: 48,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (1).jpeg',
    caption: 'Bathroom pic',
    size: 'small'
  },
  {
    id: 49,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (10).jpeg',
    caption: 'Tamagotchi',
    size: 'small'
  },
  {
    id: 50,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (11).jpeg',
    caption: 'Castle vibes',
    size: 'small'
  },
  {
    id: 51,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (12).jpeg',
    caption: 'Cute couple',
    size: 'small'
  },
  {
    id: 52,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (13).jpeg',
    caption: 'Hiii',
    size: 'small'
  },
  {
    id: 53,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (14).jpeg',
    caption: 'Exploring girlies',
    size: 'small'
  },
  {
    id: 54,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (15).jpeg',
    caption: 'Sunny times',
    size: 'small'
  },
  {
    id: 55,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (16).jpeg',
    caption: 'Piña colada consumer',
    size: 'small'
  },
  {
    id: 56,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (17).jpeg',
    caption: 'Its hands *-*',
    size: 'small'
  },
  {
    id: 57,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (18).jpeg',
    caption: 'San Felix',
    size: 'small'
  },
  {
    id: 58,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (2).jpeg',
    caption: 'Blue walker',
    size: 'small'
  },
  {
    id: 59,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (3).jpeg',
    caption: 'Cineee Marce cinee',
    size: 'small'
  },
  {
    id: 60,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (4).jpeg',
    caption: 'Fam time',
    size: 'small'
  },
  {
    id: 61,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (5).jpeg',
    caption: 'Unicorn',
    size: 'small'
  },
  {
    id: 62,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (6).jpeg',
    caption: 'Sushi day',
    size: 'small'
  },
  {
    id: 63,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (7).jpeg',
    caption: 'Yei',
    size: 'small'
  },
  {
    id: 64,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (8).jpeg',
    caption: 'More sushi time',
    size: 'small'
  },
  {
    id: 65,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM (9).jpeg',
    caption: 'Again',
    size: 'small'
  },
  {
    id: 66,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.19 AM.jpeg',
    caption: 'Gabi Scissorhands',
    size: 'small'
  },
  {
    id: 67,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.20 AM (1).jpeg',
    caption: 'Sir Haru',
    size: 'small'
  },
  {
    id: 68,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.20 AM (10).jpeg',
    caption: 'Jiji',
    size: 'small'
  },
  {
    id: 69,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.20 AM (2).jpeg',
    caption: 'Gabi the explorer',
    size: 'small'
  },
  {
    id: 70,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.20 AM (3).jpeg',
    caption: 'Mud girly',
    size: 'small'
  },
  {
    id: 72,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.20 AM (5).jpeg',
    caption: 'Rave girly',
    size: 'small'
  },
  {
    id: 73,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.20 AM (6).jpeg',
    caption: 'Las amo',
    size: 'small'
  },
  {
    id: 74,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.20 AM (7).jpeg',
    caption: 'Mica',
    size: 'small'
  },
  {
    id: 75,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.20 AM (8).jpeg',
    caption: 'Vibes girl',
    size: 'small'
  },
  {
    id: 76,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.20 AM (9).jpeg',
    caption: 'Trabajando brazo',
    size: 'small'
  },
  {
    id: 77,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.20 AM.jpeg',
    caption: 'Baker',
    size: 'small'
  },
  {
    id: 78,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.51.58 AM.jpeg',
    caption: 'Fun <3',
    size: 'small'
  },
  {
    id: 79,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.52.46 AM (1).jpeg',
    caption: 'Gabi core',
    size: 'small'
  },
  {
    id: 80,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.52.46 AM (2).jpeg',
    caption: 'Fat pony',
    size: 'small'
  },
  {
    id: 82,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.52.46 AM (4).jpeg',
    caption: 'Gamer',
    size: 'small'
  },
  {
    id: 84,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.52.46 AM (6).jpeg',
    caption: 'Standing up for the right to have a pony',
    size: 'small'
  },
  {
    id: 87,
    url: '/memories/WhatsApp Image 2025-03-28 at 10.52.46 AM.jpeg',
    caption: 'A little uncomfy',
    size: 'small'
  },
  {
    id: 88,
    url: '/memories/WhatsApp Image 2025-03-28 at 11.30.35 AM (1).jpeg',
    caption: 'Yasss',
    size: 'small'
  },
  {
    id: 89,
    url: '/memories/WhatsApp Image 2025-03-28 at 11.30.35 AM (2).jpeg',
    caption: 'With big sis Isha',
    size: 'small'
  },
  {
    id: 90,
    url: '/memories/WhatsApp Image 2025-03-28 at 11.30.35 AM.jpeg',
    caption: 'DAMNNN ',
    size: 'small'
  },
  {
    id: 91,
    url: '/memories/WhatsApp Image 2025-03-28 at 11.30.36 AM (1).jpeg',
    caption: 'Michelin',
    size: 'small'
  },
  {
    id: 92,
    url: '/memories/WhatsApp Image 2025-03-28 at 11.30.36 AM (2).jpeg',
    caption: 'Beach girly',
    size: 'small'
  },
  {
    id: 93,
    url: '/memories/WhatsApp Image 2025-03-28 at 11.30.36 AM (3).jpeg',
    caption: 'We cute',
    size: 'small'
  },
  {
    id: 94,
    url: '/memories/WhatsApp Image 2025-03-28 at 11.30.36 AM (4).jpeg',
    caption: 'Cuter',
    size: 'small'
  },
  {
    id: 95,
    url: '/memories/WhatsApp Image 2025-03-28 at 11.30.36 AM (5).jpeg',
    caption: 'Yasss',
    size: 'small'
  },
  {
    id: 96,
    url: '/memories/WhatsApp Image 2025-03-28 at 11.30.36 AM.jpeg',
    caption: 'Swim girly',
    size: 'small'
  },
  {
    id: 97,
    url: '/memories/WhatsApp Image 2025-03-28 at 11.30.44 AM.jpeg',
    caption: 'Tomato planting',
    size: 'small'
  },
  {
    id: 98,
    url: '/memories/WhatsApp Image 2025-03-28 at 11.32.33 AM (1).jpeg',
    caption: 'Jericó',
    size: 'small'
  },
  {
    id: 99,
    url: '/memories/WhatsApp Image 2025-03-28 at 11.32.33 AM.jpeg',
    caption: 'Beautiful smile girly',
    size: 'small'
  },
  {
    id: 100,
    url: '/memories/AIGABI.jpeg',
    caption: 'AI Gabi',
    size: 'small'
  }
];

const Photos: React.FC = () => {
  return (
    <section className="photo-carousel">
      <h2>My Moments</h2>
      <div className="masonry-grid">
        {photos.map((photo) => (
          <div key={photo.id} className={`masonry-item ${photo.size}`}>
            <div className="photo-container">
              <img src={photo.url} alt={photo.caption} />
              <div className="photo-overlay">
                <p className="photo-caption">{photo.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photos; 