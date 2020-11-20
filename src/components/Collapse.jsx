import React, { useState, useRef } from 'react'
import Chevron from './Chevron';
import "./Collapse.css";

export default function Collapse(props) {

    const [active, setActive] = useState('')
    const [height, setHeight] = useState('0px')
    const [rotation, setRotation] = useState("accordion__icon")

    const content = useRef(null)

    let text = ''
    
    for(const detail in props.content) {
        text += `${detail}: ${props.content[detail]} `
    }


    function toggleAccordion() {
        setActive(active === '' ? 'active' : '')
        setHeight(
            active === "active" ? "0px" : `${content.current.scrollHeight}px`
        )
        setRotation(
            active === "active" ? "accordion__icon" : "accordion__icon rotate"
        )
    }
    
    return (
        <div className="accordion__section">
            <button className={`accordion ${active}`} onClick={toggleAccordion}>
                <p className="accordion__title">{props.title}</p>
                <Chevron 
                className={rotation} 
                width={10} fill={"#777"} 
                />
            </button>
            <div 
            ref={content} 
            className="accordion__content"
            style={{maxHeight: `${height}`}}
            >
                <div
                    className="accordion__text"
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            </div>
        </div>
    );
}
