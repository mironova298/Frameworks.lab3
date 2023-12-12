import React from 'react';

const Footer = () => {
    return (

        <footer className="bg-#17181f p-10 fixed bottom-0  w-full text-white text-center py-4 px-6">
            <p align='center'>&copy; {new Date().getFullYear()} Lab3 made by Bodrug Gleb from IA2102</p>
        </footer>
    );
};

export default Footer;
