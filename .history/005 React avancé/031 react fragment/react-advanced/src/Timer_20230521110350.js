import {useState, useEffect} from 'react'


function Timer() {

  const [timer, setTimer] = useState(1)

  useEffect(() => {//useEffect = cicle de vie d un composant

    const intervalID = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)

    return () => {
      clearInterval(intervalID);
    }

  }, [])


  return (//Avec return, on peut retourner qu un seul élment jsx
    <>
        <h1>{timer}</h1>
        <h1>{timer}</h1>
        <h1>{timer}</h1>
        <h1>{timer}</h1>
    </>
  );
}

export default Timer;
