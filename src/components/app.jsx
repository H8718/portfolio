import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner.jsx';
import {Content,ContentAbout,ContentSkills,ContentProjects} from './Content.jsx';
import Footer from './Footer.jsx';
import NavBar from './NavBar.jsx';
import './../css/style.scss';

document.addEventListener("DOMContentLoaded", function(event) { 
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;
    if(wrapper.className.indexOf('skewed') != -1){
        skew = 1000;
    }
    wrapper.addEventListener('mousemove', function(e){
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
        handle.style.left = e.clientX + delta + 'px';
        topLayer.style.width = e.clientX + skew + delta + 'px';
    });
});

ReactDOM.render(
    <div data-spy="scroll" data-target=" .navbar-inverse" data-offset="100">
        <Banner/>
        <NavBar/>
        <main>
            <ContentAbout contentKey={1}/>
            <ContentSkills contentKey={2}/>
            <ContentProjects contentKey={3}/>
        </main>
        <Footer contentKey={4}/>
    </div>,
    document.querySelector( '#main' )
);
