
import React from 'react'
import "./Book.css";

const Book = (props) => {
    return (

        <div class="book">
           <img src= {props.img}/>
           <h2> {props.title} </h2>
           <h3> {props.author} </h3>
           <p> {props.description}</p>
           <p> {props.price}$ </p>
        </div>

    )
}
export default Book;