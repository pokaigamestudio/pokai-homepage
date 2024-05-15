import { useState, useEffect } from 'react'
import { debounce } from 'lodash'
import pokaiLogo from './assets/pokai.svg'
import gameLogo from './assets/terra_glaciallis_logo.svg'
import NavDots from './components/NavDots'
import './App.css'

function App() {
  const [scrolledTab, setScrolledTab] = useState<number>(0)
  const TOTAL_TABS = 3;

  useEffect(() => {
    document.body.style.setProperty('--background-color', scrolledTab === 1 ? 'black' : 'white');
  }, [scrolledTab]);

  useEffect(() => {
    const onWheel = debounce((e: WheelEvent) => {
      if (e.deltaY > 0) {
        setScrolledTab(prevTab => Math.min(prevTab + 1, TOTAL_TABS - 1));
      } else {
        setScrolledTab(prevTab => Math.max(prevTab - 1, 0));
      }
    }, 100); // Adjust the debounce time as needed
  
    window.addEventListener('wheel', onWheel);
    return () => window.removeEventListener('wheel', onWheel);
  }, []); // Empty dependency array


  return (
    <div id="root">
      <img src={pokaiLogo} className={`logo ${scrolledTab === 0 ? 'visible' : ''}`} alt="Studio Logo" />
      <img src={gameLogo} className={`game-logo ${scrolledTab === 1 ? 'visible' : ''}`} alt="Game Logo" />
      <div className={`coming-soon ${scrolledTab === 2 ? 'visible' : ''}`}>Coming Soon</div>
      <NavDots key={scrolledTab} activeDot={scrolledTab} totalDots={TOTAL_TABS} />
    </div>
  )
}

export default App