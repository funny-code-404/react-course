import React from 'react';

import './Entry.css'

const Entry = () => {

    return (
        <form className="entry">
            <h1>Вход</h1>
            <div>
                <input type="checkbox" name="entry"/>
                <label for="entry">Остаться в системе</label>
                <button>Войти</button>
            </div>

        </form>
    );
}
export default Entry;