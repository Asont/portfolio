import React from 'react';
import './App.scss';
import Header from './header/Header';
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Remote from "./remote/Remote";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import Presentation from "./presentation/Presentation";

function App() {
    return (
        <div className="App">
            <Header/>
            <Presentation/>
            <Main/>
            <Skills/>
            <Projects/>
            <Remote/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
