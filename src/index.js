import react from 'react';
import reactDOM from 'react-dom';
import Cabecero from './cabecero';
import Carrusel from './carrusel';
import Destacados from './destacados';

const App = () => {
    return (
        <div>
            <Cabecero />
            <Carrusel />
            <Destacados />
        </div>
    );
};

reactDOM.render(<App />, document.getElementById('root'));