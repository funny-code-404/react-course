import React from 'react'
import './style.css'


function Aside() {
	return (
        <div className="aside">
            <div className="boxaside">
                <h1>News</h1>
                <p>Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э.</p>
            </div>
            <div className="boxaside">
                <h1>Some links</h1>
                <ul className="p2aside">
                    <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                    <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                    <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                    <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                    <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                    <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                    <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Aside