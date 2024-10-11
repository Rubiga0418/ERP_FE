import { useEffect } from 'react';

const GoogleFontLoader = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return null;
};

export default GoogleFontLoader;
