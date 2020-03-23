import React from 'react';



export default function ColorPalette(props) {
    const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "white", "darkturquoise", "teal", "hotpink", "sienna", "goldenrod", "darkviolet", "khaki", "olive", "darkgreen", "mediumseagreen", "tomato", "orangered", "maroon", "darkblue", "cornflowerblue", "darkslategray", "darkorange", "deeppink"]

    return(
        <div className="color-palette">
            {colors.map(color => { 
                const activeClass = props.currentColor === color ? "color-swatch-active" : "";
                return (
                    <div onClick={() => {props.changeColor(color)}}>
                        <div className={`color-swatch ${activeClass}`}  style={{backgroundColor: color}}></div>
                    </div>
                )
            })}
        </div>
    )
}