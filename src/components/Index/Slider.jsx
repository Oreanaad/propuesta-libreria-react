import { useState } from "react";   
import "./Slider.css"; // Importa el archivo CSS específico para este componente
import { Link } from 'react-router-dom';
const Slider = ({images}) =>{ //Creacion de componente Slider
const [currentImgIndex, setCurrentImgIndex] = useState(0); // Declaracion de estado para el indice de la imagen actual

const goToPrevious = () => { // Función para ir a la imagen anterior
    const isFirstImage = currentImgIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentImgIndex - 1;
    setCurrentImgIndex(newIndex);
  };

const goToNext = () =>{
    const isLastImage =  currentImgIndex === images.length - 1; 
    const newIndex = isLastImage ? 0 : currentImgIndex + 1;
    setCurrentImgIndex(newIndex);
}

return(
     <div className="slider-container ">
      <div className="slider-image-wrapper">
        <img
          src={images[currentImgIndex]}
          alt={`Slider image ${currentImgIndex + 1}`}
          className="slider-image"
        />
      </div>
      <div className="slider-navigation">
        <button onClick={goToPrevious} className="slider-arrow left-arrow">
          &lt;
        </button>
        <button onClick={goToNext} className="slider-arrow right-arrow">
          &gt;
        </button>
      </div>
      {/* Opcional: Puntos indicadores */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentImgIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentImgIndex(index)}
          ></span>
        ))}
      </div>
    </div>

)
}

export default Slider; // Exportación del componente Slider