import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRoutes from './AppRouter';
import weatherStore from './store/WeatherStore';

function App() {
  const isSunny = weatherStore.itsSun;
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() =>{
    const mainElement = mainRef.current;

    if (mainElement) {
      if (isSunny) {
        mainElement.classList.add('sunny-background');
        mainElement.classList.remove('rainy-background');
      } else {
        mainElement.classList.add('rainy-background');
        mainElement.classList.remove('sunny-background');
      }
    }
  },[isSunny])

  return (
    <div className='main' ref={mainRef}>
     <AppRoutes />
    </div>
  )
}

export default App;
