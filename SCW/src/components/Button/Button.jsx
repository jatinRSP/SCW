import React from 'react';
import "../../css/Button.css";

function Button({titletext,classes}){
    let classlist = [...classes.split(" ")].join(" ");
    console.log(classlist);
    return (
        <>
            <button className={ classlist }>
                <div className="hover"></div>
                {titletext}
            </button>
        </>
    )
}

export default Button;