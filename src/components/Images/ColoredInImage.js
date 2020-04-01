import React, { useState, useEffect } from 'react';
import Yosemite from './Yosemite';
import Sequoia from './Sequoia';
import Yosemite2 from './Yosemite2';
import Arches from './Arches';
import Glacier from './Glacier';
import GrandCanyon from './GrandCanyon';
import GrandTeton from './GrandTeton';
import Saguaro from './Saguaro';
import Zion from './Zion';

const components = {
    "Yosemite": Yosemite,
    "Yosemite2": Yosemite2,
    "Sequoia": Sequoia,
    "Arches": Arches,
    "Glacier": Glacier,
    "GrandCanyon": GrandCanyon,
    "GrandTeton": GrandTeton,
    "Saguaro": Saguaro,
    "Zion": Zion
}

export default function ColoredInImage(props) {

    const ColorImage = components[props.component]

   
    return(
       
        <ColorImage id="svg-image" onFill={props.onFill} fillColors={props.fillColors} {...props} />   
        
    )
}