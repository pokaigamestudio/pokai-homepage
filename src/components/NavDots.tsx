import { ReactElement } from 'react';

interface NavDotsProps {
    activeDot: number;
    totalDots: number;
}

function NavDots({ activeDot, totalDots }: NavDotsProps): ReactElement {
    return (
        <div className="nav-dots">
            {Array.from({ length: totalDots }).map((_, index) => (
                <div key={index} className={`nav-dot ${activeDot === index ? 'active' : ''}`}></div>
            ))}
        </div>
    );
}

export default NavDots;