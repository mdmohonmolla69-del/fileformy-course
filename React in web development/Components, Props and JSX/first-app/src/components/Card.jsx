import React from 'react'
import "./Card.css"
const Card = (props) => {
    return (
        <div className='Card' style={{overflow: "hidden"}}>
            <img src="https://www.shutterstock.com/image-photo/digital-technology-software-development-concept-600nw-2111828198.jpg" alt="" width={170} style={{border: "2px solid black"}}/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Card
