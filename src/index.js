import react from 'react';
import reactDOM from 'react-dom';
import Cabecero from './cabecero';
import Carrusel from './carrusel';
import Destacados from './destacados';
import Posts from './posts';

const App = () => {
    return (
        <div>
            <Cabecero />
            <Carrusel />
            <Destacados />
            <Posts />
        </div>
    );
};

reactDOM.render(<App />, document.getElementById('root'));