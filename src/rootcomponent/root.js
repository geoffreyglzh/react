import React from 'react';
import Content from '../components/content';
import Footer from '../components/footer';
import Header from '../components/header';

function RootComponent() {
    return ( 
        <div>
            <h1>JSX comes here!!!!</h1>
            <h1>Root component created.</h1>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
     )
}

export default RootComponent;