import { useParams, useNavigate } from 'react-router-dom'
import '../styles/PlaceDetail.css'

interface Place {
  id: string;
  name: string;
  description: string;
  image: string;
  details: string;
}

interface PlaceDetailProps {
  places: Place[];
}

export const PlaceDetail = ({ places }: PlaceDetailProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const place = places.find(p => p.id === id);

  if (!place) {
    return (
      <div className="place-detail-error">
        <h2>Place not found</h2>
        <button onClick={() => navigate('/')}>Go back home</button>
      </div>
    );
  }

  return (
    <div className="place-detail">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Places
      </button>
      <div className="place-detail-content">
        <div 
          className="place-detail-image"
          style={{ backgroundImage: `url(${place.image})` }}
        >
          <div className="place-detail-overlay">
            <h1>{place.name}</h1>
          </div>
        </div>
        <div className="place-detail-info">
          <p className="place-description">{place.description}</p>
          <div className="place-details">
            <h2>About {place.name}</h2>
            <p>{place.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 