import { useState } from "react";
import "../styles/BirthdayCard.css";

interface BirthdayCardProps {
  onExploreClick: () => void;
  onExploreMeClick: () => void;
}

export const BirthdayCard = ({
  onExploreClick,
  onExploreMeClick,
}: BirthdayCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="birthday-card-container">
      <div
        className={`birthday-card ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="card-front">
          <div className="card-content">
            <img
              className="sword-image"
              src="/gdy-2025/sword.svg"
              alt="Decorative sword"
            />
            <h2 className="birthday-title">
              <span> ¡ Feliz vuelta al sol Gabi !</span>
            </h2>
            
            <div className="tap-hint">dame click</div>

          </div>
        </div>
        <div className="card-inside">
          <div className="inside-content">
            <div className="cake">
              <div className="plate"></div>
              <div className="layer"></div>
              <div className="icing"></div>
              <div className="candle">
                <div className="flame"></div>
                <div className="stick"></div>
              </div>
            </div>
            <p className="message">
              Te deseo un día tan hermoso y único como tú. Que en tu cumpleaños
              abunden el amor, la alegría y momentos que atesores para siempre.
              🎉✨
            </p>
            <p className="message">- Mia</p>
            <button
              className="explore-button"
              onClick={(e) => {
                e.stopPropagation();
                onExploreClick();
              }}
            >
              Explore Historic Moments
            </button>
            <button
              className="explore-button"
              onClick={(e) => {
                e.stopPropagation();
                onExploreMeClick();
              }}
            >
              Explore My Moments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
