import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-text-muted text-sm border-t border-white/5">
            <p>&copy; {new Date().getFullYear()} Harish V. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
