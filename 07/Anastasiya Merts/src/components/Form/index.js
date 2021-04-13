import React from 'react';
import { LoginPart, SignUpPart, DeletePart } from '../../components';
import { useState } from 'react';

import '../Form/styles.css';

const Form = (props) => {

    const [userData, setUserData] = useState({name: "", email: "", password:""});

    const updateUserData = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    }

    const updateData = (name, value) => {
        setUserData({
            ...userData,
            [name]: value,
        });
    }

    return (
        <form>
            <div className="main-part">
                <input name="name" type="text" placeholder="Name" onChange={updateUserData}/>
                <input name="email" type="text" placeholder="Email" onChange={updateUserData}/>
                <input name="password" type="password" placeholder="Password" onChange={updateUserData}/>
            </div>

            {props.isLogin && <LoginPart updateData={updateData}/>}
            {props.isSignUp && <SignUpPart updateData={updateData}/>}
            {props.isDelete && <DeletePart updateData={updateData}/>}

        </form>
    );
}

export default Form;