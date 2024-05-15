import { useState, useEffect } from 'react'
import { debounce } from 'lodash'
import pokaiLogo from './assets/pokai.svg'
import NavDots from './components/NavDots'
import './App.css'

function App() {
  const [scrolledTab, setScrolledTab] = useState<number>(0)


  useEffect(() => {
    const onWheel = debounce((e: WheelEvent) => {
      if (e.deltaY > 0) {
        setScrolledTab(prevTab => Math.min(prevTab + 1, 1));
      } else {
        setScrolledTab(prevTab => Math.max(prevTab - 1, 0));
      }
    }, 100); // Adjust the debounce time as needed
  
    window.addEventListener('wheel', onWheel);
    return () => window.removeEventListener('wheel', onWheel);
  }, []); // Empty dependency array

  return (
    <div id="root">
      {scrolledTab == 1 ? (
        <div className="coming-soon">Coming Soon</div>
      ) : (
        <img src={pokaiLogo} className="logo" alt="Your Studio Logo" />
      )}
      <NavDots key={scrolledTab} activeDot={scrolledTab} />
    </div>
  )
}

export default App