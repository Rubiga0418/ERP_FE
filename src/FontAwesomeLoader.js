import { useEffect } from 'react';

const FontAwesomeLoader = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://kit.fontawesome.com/42d5adcbca.js";
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default FontAwesomeLoader;
