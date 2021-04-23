import React from 'react';
import './HeroButton.css';

function HeroButton({description}){
    return <div>
        <button type="button" className="hero-button">{description}</button>
    </div>
}
export default HeroButton