import React from 'react';



export default function ColorPalette(props) {
    const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "white"]

    return(
        <div>
            {colors.map(color => { 
                const textDecoration = props.currentColor === color ? "underline" : "none";
                return (
                    <div onClick={() => {props.changeColor(color)}}>
                        <h4 style={{backgroundColor: color, textDecoration: textDecoration}}>{color}</h4>
                    </div>
                )
            })}
        </div>
    )
}