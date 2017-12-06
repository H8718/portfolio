import React from 'react';
import ReactDOM from 'react-dom'; 

export class ContentAbout extends React.Component {
   render() {
        return (
            <section className="container-fluid smoothScroll" id="about">
                <div className="col-md-4 col-md-offset-2">
                    <img id="portrait" className="img-circle" src="../images/portrait.jpg"/>
                </div>
                <div className="col-md-5">
                    <h3 className="row col-md-11">About Me</h3>
                    <div className="row">
                        <div className="transparent-white col-md-11">
                            <p></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 col-md-offset-0 transparent-white infobox">
                            <p><span className="glyphicon glyphicon-music"> </span>!</p>
                        </div>
                        <div className="col-md-5 transparent-white infobox"><p></p></div>
                        <div className="clear"></div>
                        <div className="col-md-5 col-md-offset-0 transparent-white infobox">
                            <p><span className="glyphicon glyphicon-globe"> </span></p>
                        </div>
                        <div className="col-md-5 col-md-offset-0 transparent-white infobox">
                            <p></p>
                        </div>
                    </div>
                </div>
		    </section>
        );
   } 
} 

export class ContentSkills extends React.Component {
   render() {
        return (
            <div>vid</div>
        );
   } 
}

export class ContentProjects extends React.Component {
   render() {
        return (
            <div>vid</div>
        );
   } 
}