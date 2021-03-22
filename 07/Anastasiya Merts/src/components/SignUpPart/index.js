import { useState } from 'react';

const SignUpPart = (props) => {

    const [isRegistration, setRegistration] = useState(false);
    const handleChangeCheckBox = () => setRegistration(!isRegistration);

    const handleUpdate = (e) => {
        e.preventDefault();
        props.updateData(e.target.name, e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        props.updateData("isRegistration", isRegistration);
    }

    return (
        <div className="additional-part">
            <h3>Registration</h3>
            <p>
                <input type="checkbox" className="custom-checkbox" id="scales" name="scales" checked={isRegistration} onChange={handleChangeCheckBox} />
                <label htmlFor="scales"></label>
            </p>
            <input name="secondName" type="text" id="secondName" placeholder="Second name" onChange={handleUpdate} />
            <input name="birth" type="text" id="birth" placeholder="Year of birthday" onChange={handleUpdate} />
            <input name="phone" type="text" id="phone" placeholder="Number of phone" onChange={handleUpdate} />
            <button className="registration-button" onClick={handleClick}>Registration</button>
        </div>

    );
}

export default SignUpPart;