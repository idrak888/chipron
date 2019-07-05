import React, { Component } from 'react';
import Main from '../layouts/main';
import Banner from '../components/Banner';
import Products from '../components/Products';
import Footer from '../components/Footer';

class Home extends Component {
    render () {
        return (
            <div className="Home">
                <Main>
                    <Banner/>
                    <br/>
                    <div className="partners">
                        <img src="/static/ibm.png"/> <img src="/static/dell.png"/> <img src="/static/cisco.png"/>
                    </div>
                    <br/>
                    <div className="showcase">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src="/static/nanochip.png"/>
                            </div>
                            <div className="col-sm-6">
                                <h1>Specs</h1>
                                <ul>
                                    <li>900-1000MHz speed</li>
                                    <li>L2 type: External</li>
                                    <li>20Million transistors</li>
                                    <li>64-bit bus width</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="about">
                        <h1>About us</h1>
                        <br/>
                        <div className="info">
                            <p>
                                Chipron is a newly established <strong>microprocessor</strong> manufacturer. The Chipron <strong>Fastlist</strong> contains some of the fastest, most efficient and miniscule chips. We currently operate only in the US and have partnered with large corporations such as <strong>IBM</strong> and <strong>Dell</strong>.
                            </p>
                        </div>
                    </div>
                    <br/>
                    <div className="specialities">
                        <h1>Specialities</h1>
                        <br/>
                        <div className="info-box">
                            <div className="row">
                                <div className="col-xs-4">
                                    <h3>Efficiency</h3>
                                    <img src="/static/efficient.png"/>
                                    <p>Our processors are highly efficient thanks to the ultra-slim gels and button screws</p>
                                </div>
                                <div className="col-xs-4">
                                    <h3>Security</h3>
                                    <img src="/static/security.png"/>
                                    <p>Security is our top priority to prevent any external threats such as hardware hacking</p>
                                </div>
                                <div className="col-xs-4">
                                    <h3>Affordability</h3>
                                    <img src="/static/affordable.png"/>
                                    <p>Eventhough our products are high in quality, their prices are surprisingly affordable</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <br/>
                    <Products/>
                    <br/>
                    <Footer/>
                    <div className="chat"><img src="/static/chat.png"/></div>
                </Main>
            </div>
        );
    }   
}

export default Home;