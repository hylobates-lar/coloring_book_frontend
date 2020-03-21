import React, { useState, useEffect } from 'react';
import Sunflower from './Sunflower';
import Rose from './Rose';

const components = {
    "Sunflower": Sunflower,
    "Rose": Rose
    // "Flower": Flower
}

export default function ColoredInImage(props) {

    const ColorImage = components[props.component]

   
    return(
        <div>
    
            <ColorImage id="svg-image" onFill={props.onFill} fillColors={props.fillColors}/>
            
        </div>
    )
}