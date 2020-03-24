import React, { useState, useEffect } from 'react';
import Sunflower from './Sunflower';
import Rose from './Rose';
import Yosemite from './Yosemite';
import Sequoia from './Sequoia'

const components = {
    "Sunflower": Sunflower,
    "Rose": Rose,
    "Yosemite": Yosemite,
    "Sequoia": Sequoia
    // "Flower": Flower
}

export default function ColoredInImage(props) {

    const ColorImage = components[props.component]

   
    return(
       
        <ColorImage id="svg-image" onFill={props.onFill} fillColors={props.fillColors} {...props} />   
        
    )
}