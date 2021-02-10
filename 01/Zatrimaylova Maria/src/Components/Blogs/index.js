import React from 'react';
import './style.css'
import './img/Background.png'

class Blogs extends React.Component {
    render() {
        const { acticleTitle, articleTitle2, articleTitle3, articleDate, articleText, articleText2, infoDate, infoDate2 } = this.props;
        
        return (
            <>
                <div className="content__blogs">
                    <a href="#">
                        <div class="type__stories">
                            <div class="stories__article">
                                <h3 class="article__title">{acticleTitle}</h3>
                                <p class="article__date">{articleDate}</p>
                            </div>
                        </div>
                    </a>

                    <a href="#">
                        <div class="posts__story">
                            <div class="story__img post_item-left">
                            
                            </div>

                            <div class="story__preview">
                                <h4 class="preview__title">{articleTitle2}</h4>
                                <p class="preview__text">{articleText}</p>
                                <div class="preview__info">
                                    <div class="info__day">{infoDate}</div>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="#">
                        <div class="posts__story">
                            <div class="story__img post_item-right">
                            
                            </div>

                            <div class="story__preview">
                                <h4 class="preview__title">{articleTitle3}</h4>
                                <p class="preview__text">{articleText2}</p>
                                <div class="preview__info">
                                    <div class="info__day">{infoDate2}</div>
                                </div>
                            </div>
                        </div>
                    </a>

                </div>
            </>
        )
    }
}

export default Blogs;