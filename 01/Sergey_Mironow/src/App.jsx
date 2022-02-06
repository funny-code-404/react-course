import React from "react"
import './App.css'

import Header from './Components/Header/Header'
import headerLogo from '../src/data/header/logo.svg'
import headerNav from './data/header/menu'

import Footer from "./Components/Footer/Footer"
import footerData from './data/footer/footer'

import Articles from './Components/Articles/Articles'
import articlesData from "./data/articles/articles"


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header 
                    logo = {headerLogo}
                    navigation = {headerNav} 
                />
                <Articles articles = {articlesData}/>
                <Footer about = {footerData.about} contacts = {footerData.contacts}/>
            </div>
        )
    }
}

export default App