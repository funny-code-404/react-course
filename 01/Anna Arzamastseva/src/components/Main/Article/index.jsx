import React from 'react'

class Article extends React.Component{
 render(){
     let someText = 'Apple News+ delivers an incredibly diverse collection of the world’s best publications. Vivid photography and animation, rich videos, and immersive layouts bring articles to life in stunning new ways. Swipe through issues from cover to cover or download them to read on the go.lorem ';

     return (
     <article>
         <h2>Article header</h2>
         <p>{someText}</p>
         <a href="#">Read more</a>
     </article>
     )
 }
}

export default Article;