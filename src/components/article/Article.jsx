import React from 'react'

const Article = (props) => {
    
    return (
        <div>
          <h2>{props.articles.key}</h2>
          <h3>{props.articles.title}</h3>
          <p>{props.articles.description}</p>
          
        </div>
    )
}

export default Article
