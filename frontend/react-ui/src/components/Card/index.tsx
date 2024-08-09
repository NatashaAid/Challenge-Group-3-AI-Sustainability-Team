//Card Component created by Mikaeel Zaman

import { ReactNode } from 'react';
import './style.css';

//Children prop for card
interface Cardprops {
    header: ReactNode;
    children: ReactNode;
}

//Card component function
function Card({ children, header }: Cardprops) {
    return (
        <div className='card'>
            <div className="cardHeader">
            {header}
            </div>
            <div className="cardContent">
            {children}
            </div>
        </div>
    )
}

export default Card;