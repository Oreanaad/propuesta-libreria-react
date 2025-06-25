import './AuthorCard.css'; // Estilos específicos para la tarjeta de autor


const AuthorCard = ({ author})=>{
  
     return (
    <div className="author-card">
      <div className="author-image-container">
        <img src={author.image} alt={author.name} className="author-image" />
      </div>
      <div className="author-info">
        <h3 className="author-title">{author.name}</h3>
        <p className="author-description">"{author.short_bio}"</p>
        <p className="author-description-new">Autor de "{author.best_book}"</p>
      </div>
    </div>
  );
}

export default AuthorCard;