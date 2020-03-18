import React, { useState, useEffect } from 'react';
import Sunflower from './Sunflower';

const components = {
    "Sunflower": Sunflower,
    // "Rose": Rose,
    // "Flower": Flower
}

export default function ColoredInImage(props) {

    const ColorImage = components[props.component]

   
    return(
        <div>
            <h1>This is the Colored Image</h1>
            <ColorImage onFill={props.onFill} fillColors={props.fillColors}/>
            
        </div>
    )
}