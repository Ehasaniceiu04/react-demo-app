import React from 'react';
import HomePage from './HomePage';
import AboutPage from "./AboutPage";
import Header from "./common/header"
import {Route} from 'react-router-dom';
import CoursesPage from './CoursesPage';

function App(){
    return (
    <div className="container-fluid">
        <Header/>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/courses" component={CoursesPage}></Route>
        <Route path="/about" component={AboutPage}></Route>
    </div>
    )
}

export default App;