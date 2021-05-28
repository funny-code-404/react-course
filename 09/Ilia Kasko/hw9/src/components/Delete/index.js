import React from 'react';

import './Delete.css'

const Delete = () => {

    return (
        <form>
            <h1>Удаление аккаунта</h1>
             <textarea/>
            <div>
                    <label form="del">Оцените работу приложения</label>
                    <input type="radio" name="del" id="1"  value="1"/>
                    <label form="1">1</label>
                    <input type="radio" name="del" id="2" value="2"/>
                    <label form="2">2</label>
                    <input type="radio" name="del" id="3" value="3"/>
                    <label form="3">3</label>
                    <input type="radio" name="del" id="4" value="4"/>
                    <label form="4">4</label>
                    <input type="radio" name="del" id="5" value="5"/>
                    <label form="5">5</label>
            </div>


            <button>Отправить</button>
        </form>
    );
}
export default Delete;