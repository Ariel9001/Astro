import React from 'react';

interface FooterProps {
    year?: number;
}

const FooterTSX: React.FC<FooterProps> = ({ year = new Date().getFullYear() }) => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4 absolute bottom-0 right-0 left-0">
            <p>Todos los derechos reservados &copy; {year}</p>
        </footer>
    );
}

export default FooterTSX;
