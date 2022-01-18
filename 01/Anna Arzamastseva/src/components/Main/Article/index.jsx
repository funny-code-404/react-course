import React from 'react'

import {ARTICLE_TITLE} from './consts';
import {ARTICLE_TEXT} from './consts';
import {READ_MORE_TEXT} from './consts';

class Article extends React.Component{
 render(){
     return (
     <article>
         <h2>{ARTICLE_TITLE}</h2>
         <p>{ARTICLE_TEXT}</p>
         <a href="#">{READ_MORE_TEXT}</a>
     </article>
     )
 }
}

export default Article;