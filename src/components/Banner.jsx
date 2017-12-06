import React from 'react';
import ReactDOM from 'react-dom'; 


export default class Banner extends React.Component {

    constructor(props) {
        super();

        

        this.state = {
            hasFocus: true,
            headerLines: [
                ["> Hi! I'm", "Markus"],
                ["> I make", "Websites"],
                [">", "Web apps"],
                [">", "Mobile apps"]
            ]
        }
    }

    render() {
        return (
            <div className="container-fluid smoothScroll" id="banner">
                <section id="wrapper" className="skewed">
                    <div className="layer bottom">
                    <div className="content-wrap">
                        <div className="content-body">
                        <h1>Look Sharp</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam temporibus dolore vero reiciendis atque debitis. Sequi at consequatur deserunt?</p>
                        </div>
                        <img src="http://www.traversymedia.com/downloads/assets/image1.png" alt=""/>
                    </div>
                    </div>

                    <div className="layer top">
                        <div className="content-wrap">
                        <div className="content-body">
                            <h1>Stay Cool</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam temporibus dolore vero reiciendis atque debitis. Sequi at consequatur deserunt?</p>
                        </div>
                        <img src="http://www.traversymedia.com/downloads/assets/image2.png" alt=""/>
                        </div>
                    </div>

                    <div className="handle"></div> 

                </section>
                
                <Header linesList={this.state.headerLines}/>
            </div>
        )
    };
}

class Header extends React.Component {

    constructor(props) {
        super();

        var headerLines = [];
        props.linesList.map((line, i) => {
            headerLines.push(
                <div className='header-line' key={"line"+i}>
                    {line[0]} <a className="orange smoothScroll no-style">{line[1]}</a>
                </div>
            );
        });

        this.state = {
            headerLines: headerLines
        }
    }

    render() {
        return <div>
            {this.state.headerLines[0]}
            {this.state.headerLines[1]}
            {this.state.headerLines[2]}
            {this.state.headerLines[3]}
        </div>
    }
}

/*
<div className="header-line" id="line1">> Hi, I'm <a className="orange smoothScroll no-style" href="#nav-container">Markus</a></div>
<div className="header-line" id="line2">> I make <a className="orange smoothScroll no-style" href="#portfolio">websites</a></div>
                    */