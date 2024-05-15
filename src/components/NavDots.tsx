import { ReactElement } from 'react';

interface NavDotsProps {
    activeDot: number;
  }

function NavDots({ activeDot }: NavDotsProps): ReactElement {
    console.log(activeDot);
    return (
      <div className="nav-dots">
        <div className={`nav-dot ${activeDot === 0 ? 'active' : ''}`}></div>
        <div className={`nav-dot ${activeDot === 1 ? 'active' : ''}`}></div>
      </div>
    );
  }
  
  export default NavDots;