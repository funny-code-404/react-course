import { useState, } from 'react';

const LoginPart = (props) => {

    const [isKeep, setKeep] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        props.updateData('isKeep', isKeep);
    }

    const handleChangeCheckBox = (e) => {
        setKeep(!isKeep);
    }

    return (
        <div className="additional-part">
            <h3 className="additional-title">Login to your account</h3>
            <p>
                <input name="isKeep" type="checkbox" className="custom-checkbox" id="keepLogged" checked={isKeep} onChange={handleChangeCheckBox}/>
                <label htmlFor="keepLogged">Keep me logged in</label>
            </p>
            <button className="login-button" onClick={handleClick}>Login</button>
        </div>

    );
}

export default LoginPart;