import React from 'react';
import ReactDOM from 'react-dom'; 
 
export default class Footer extends React.Component{
   render() {
        return (
            <section className="container-fluid smoothScroll" id="footer">
                <div id="footer-wrapper">
                    <div className="row text-center">
                        <h2>Contact</h2>
                    </div>
                    <div className="row footer-images col-md-10 col-md-offset-1">
                        <div className="col-md-1 col-md-offset-4">
                            <a href="mailto:h8718@student.jamk.fi" target="_top" className="footer-img"><img className="img-circle center-block footer-img" src="../images/email-icon.png" alt="email"/></a>
                        </div>
                        <div className="col-md-1">
                            <a href="http://www.linkedin.com/in/markus-moilanen-a0927b10b" className="footer-img" target="_blank"><img className="img-circle footer-img center-block" src="../images/linkedin-icon.png" alt="linkedin"/></a>
                        </div>
                        <div className="col-md-1">
                            <a href="http://github.com/H8718" className="footer-img"><img className="img-circle footer-img center-block" src="../images/github-icon.png" alt="linkedin"/></a>
                        </div>
                        <div className="col-md-1">
                            <a href="cv.pdf" target="_blank" className="footer-img"><img className="img-circle center-block cv-button" src="../images/cv-icon.png" alt="cv"/></a>
                        </div>
                    </div>
                    <div className="row text-center col-md-10 col-md-offset-1">
                        <div className="col-md-1 col-md-offset-4">
                            <p>Email</p>
                        </div>
                        <div className="col-md-1">
                            <p>LinkedIn</p>
                        </div>
                        <div className="col-md-1">
                            <p>GitHub</p>
                        </div>
                        <div className="col-md-1">
                            <p>Resume</p>
                        </div>
                    </div>
                </div>
            </section>
        );
   } 
} 