//Card Component created by Mikaeel Zaman

import { ReactNode } from 'react';
import './style.css';

//Children prop for card
interface Cardprops {
    children: ReactNode
}

//Card component function
function Card({ children }: Cardprops) {
    return (
        <div className="card">
        {children}
        </div>
    )
}

export default Card;