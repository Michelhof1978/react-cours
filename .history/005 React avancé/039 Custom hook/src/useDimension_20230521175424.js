import {useState, useEffect} from 'react';


export default function useDimension(){//Va retourner soit une fonction, soit une valeur

    const [dimension, setDimension] = useState();

    useEffect(() => {

        window.addEventListener('resize', resizeFunc);

        function resizeFunc(){
            setDimension(window.innerWidth)
        }
        resizeFunc();

        return () => {
            window.removeEventListener('resize', resizeFunc);
        }

    }, []);

    return dimension;
}

