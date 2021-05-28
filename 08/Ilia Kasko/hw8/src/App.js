import React from 'react';

import './App.css'

import Form from "./components/Form";

import withReg from "./hocs/withReg";
import withEntry from "./hocs/withEntry";
import withDel from "./hocs/withDel";



const App = () => {
    const RegPage = withReg(Form)
    const EntryPage = withEntry(Form)
    const DelPage = withDel(Form)



    return (
        <div className="main">
            <RegPage/>
            <EntryPage/>
            <DelPage/>

        </div>
    );


}

export default App;
