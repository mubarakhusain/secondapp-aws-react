import React from "react";
import ReactPropTypes  from "prop-types";


const Button = ({text, color, onClick}) => {

    

    return (
        <div>
            <button onClick={onClick} style={{backgroundColor: color}} 
            className="btn" >
                {text}
                </button>
        </div>

    )
}
Button.defaultProps = {
    color: 'steelBlue',
}
Button.protoTypes = {
    text: ReactPropTypes.string,
    color: ReactPropTypes.string,
    onClick: ReactPropTypes.func,
}

export default Button;