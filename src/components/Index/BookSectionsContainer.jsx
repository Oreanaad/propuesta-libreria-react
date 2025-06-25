import React, { useState, useEffect } from 'react';
import BookList from './BookList'; // Ruta relativa a BookList
import SectionHeader from './SectionHeader'; // Ruta relativa a SectionHeader
import BestAuthors from './BestAuthors'; // Ruta relativa a BestAuthors
// Importa tu fuente de datos principal
// Asegúrate de que la ruta sea correcta y que tus libros tengan la propiedad 'category'
import { BookNovedades as allBooksData } from './BookListNovedades';
import {AuthorsList as allAuthorsData} from './Authors'; // Importa la lista de autores si es necesario

const BookSectionsContainer = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [authors, setAuthor] = useState([]); 

  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        // Simular una llamada a la API
        setTimeout(() => {
          setBooks(allBooksData);
          setAuthor(allAuthorsData); 
          setLoading(false);
        }, 1000); // Simula 1 segundo de carga
      } catch (err) {
        setError(err);
        setLoading(false);
        console.error("Error al cargar los libros en BookSectionsContainer:", err);
      }
    };

    fetchBooksData();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar

  if (loading) {
    return <div className="loading-message">Cargando secciones de libros y autores...</div>;
  }

  if (error) {
    return <div className="error-message">Error al cargar secciones: {error.message}</div>;
  }

  // Filtrar los libros por categoría
  // Asumo que tus objetos de libro tienen una propiedad 'category'
  const featuredBooks = books.filter(book => book.category === 'featured'); // Si tienes esta categoría
  const bestSellingBooks = books.filter(book => book.category === 'best-selling');
  const newArrivals = books.filter(book => book.category === 'new-arrivals');
  const bestAuthors = authors.filter(author => author.id); 

  return (
    <>
      {/* Sección de Libros Destacados */}
      {featuredBooks.length > 0 && (
        <>
          <SectionHeader icon="+V" title="LIBROS DESTACADOS" />
          <BookList books={featuredBooks} />
        </>
      )}

      {/* Sección de "Lo más vendido" */}
      {bestSellingBooks.length > 0 && (
        <>
          <SectionHeader icon="LV" title="LO MÁS VENDIDO" />
          <BookList books={bestSellingBooks} />
        </>
      )}

      {/* Sección de "Novedades" */}
      {newArrivals.length > 0 && (
        <>
          <SectionHeader icon="N" title="NOVEDADES" />
          <BookList books={newArrivals} />
        </>
      )}

      {/*Mejores autores*/}
    {bestAuthors.length > 0 && (
        <>
          <SectionHeader icon="A" title="AUTORES  DESTACADOS"/>
          <BestAuthors authors={bestAuthors} />
        </>
      )} 
     
    
    </>
  );
};

export default BookSectionsContainer;