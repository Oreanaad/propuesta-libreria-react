import React from 'react';
import './BookCard.css'; // Estilos específicos para la tarjeta de libro

const BookCard = ({ book }) => {
  const handleAddToCart = () => {
    alert(`"${book.title}" añadido al carrito!`);
    // Aquí iría la lógica real para añadir al carrito (e.g., Redux, Context API, etc.)
  };

  const renderStars = (rating) => {
    if (rating === null || rating === undefined) {
      return null;
    }

    const roundedRating = Math.round(rating * 2) / 2; // Redondear a la media estrella más cercana (0, 0.5, 1, 1.5, etc.)
    const stars = [];

    // Creamos 5 spans para las estrellas. El CSS determinará si están llenas, medio llenas o vacías.
    for (let i = 1; i <= 5; i++) {
      let starClass = 'empty-star';
      if (i <= roundedRating) {
        starClass = 'full-star';
      } else if (i - 0.5 === roundedRating) {
        starClass = 'half-star';
      }
      stars.push(<span key={i} className={`star ${starClass}`}>★</span>); // Siempre usamos el caracter de estrella completa
    }

    return <div className="book-rating" data-rating={roundedRating}>{stars}</div>;
  };
  
  return (
    <div className="book-card">
      <div className="book-image-container">
        <img src={book.imageUrl} alt={book.title} className="book-image" />
      </div>
      <div className="book-info">
        {renderStars(book.rating)} 
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <p className="book-price-new">€{book.price}</p> {/* Formato de moneda */}
      </div>
      <div className="book-actions">
        <button href='#' className="button details-button">Detalles </button>
        <button onClick={handleAddToCart} className="button add-to-cart-button">
        <span className="icon"></span> Añadir
        </button>
      </div>
    </div>
  );
};

export default BookCard;