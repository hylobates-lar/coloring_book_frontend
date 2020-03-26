import React from 'react';



export default function ColorPalette(props) {
    const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "white", "darkturquoise", "teal", "hotpink", "sienna", "goldenrod", "darkviolet", "khaki", "olive", "darkgreen", "mediumseagreen", "tomato", "#007fff", "maroon", "darkblue", "cornflowerblue", "darkslategray", "darkorange", "deeppink", "rebeccapurple", "#1F4275", "#aaa9ad", "#391802", "#006a4e", "#af002a", "#ffe135", "#bd33a4", "#318ce7", "#66b447", "#46cb18", "#ff7f00", "#00c3e3", "#512888", "#007fff", "#e94196" ]

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