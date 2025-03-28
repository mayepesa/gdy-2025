import { useState, useMemo } from 'react'
import { historicalEvents, HistoricalEvent } from '../data/historicalEvents'
import '../styles/HistoricPlaces.css'

export const HistoricMoments = () => {
  const [searchParams, setSearchParams] = useState({
    text: '',
    year: '',
    month: '',
    day: ''
  });
  const [activeFilters, setActiveFilters] = useState({
    text: '',
    year: '',
    month: '',
    day: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  const filteredEvents = useMemo(() => {
    return historicalEvents.filter(event => {
      const matchesText = activeFilters.text === '' || 
        event.event.toLowerCase().includes(activeFilters.text.toLowerCase()) ||
        event.description.toLowerCase().includes(activeFilters.text.toLowerCase());
      const matchesYear = activeFilters.year === '' || event.year === activeFilters.year;
      const matchesMonth = activeFilters.month === '' || event.month === activeFilters.month;
      const matchesDay = activeFilters.day === '' || event.day === activeFilters.day;
      
      return matchesText && matchesYear && matchesMonth && matchesDay;
    });
  }, [activeFilters]);

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const paginatedEvents = useMemo(() => {
    const startIndex = (currentPage - 1) * eventsPerPage;
    return filteredEvents.slice(startIndex, startIndex + eventsPerPage);
  }, [filteredEvents, currentPage, eventsPerPage]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveFilters(searchParams);
    setCurrentPage(1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEventClick = (event: HistoricalEvent) => {
    window.open(event.wikipediaUrl, '_blank');
  };

  return (
    <section id="historic-places" className="historic-places">
      <h2>Explore Historic Moments</h2>
      
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          name="text"
          placeholder="Search events..."
          value={searchParams.text}
          onChange={handleInputChange}
          className="search-input"
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={searchParams.year}
          onChange={handleInputChange}
          className="search-input"
        />
        <input
          type="number"
          name="month"
          placeholder="Month (1-12)"
          min="1"
          max="12"
          value={searchParams.month}
          onChange={handleInputChange}
          className="search-input"
        />
        <input
          type="number"
          name="day"
          placeholder="Day (1-31)"
          min="1"
          max="31"
          value={searchParams.day}
          onChange={handleInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="places-grid">
        {paginatedEvents.map((event, index) => (
          <div key={index} className="place-card" onClick={() => handleEventClick(event)}>
            <div className="place-image">
              <img src={event.image} alt={event.event} />
            </div>
            <div className="place-content">
              <h3>{event.event}</h3>
              <p className="date">Date: {event.month}/{event.day}/{event.year}</p>
              <p className="description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </section>
  );
} 