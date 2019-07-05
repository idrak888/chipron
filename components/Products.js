import React from 'react';

const Products = () => {
    return (
        <div className="products">
            <h1>The Fastlist</h1>
            <br />
            <div className="info-box">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="item">
                            <img src="/static/nanochip.png" /> <span>The NanoX</span>
                            <p>900-1000MHz speed - $420</p>
                            <span className="text-primary">View ></span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="item">
                            <img src="https://5.imimg.com/data5/BC/VK/MY-3030368/microprocessors-integrated-circuits-500x500.jpg" /> <span>GB-3 series</span>
                            <p>880MHz speed - $270</p>
                            <span className="text-primary">View ></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="item">
                            <img src="https://3.imimg.com/data3/LE/VP/MY-10234164/microprocessors-250x250.jpg" /> <span>GB-6 series</span>
                            <p>100-120MHz speed - $162</p>
                            <span className="text-primary">View ></span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Intel_4004.jpg/220px-Intel_4004.jpg" /> <span>Tri-byte series</span>
                            <p>76Mhz - $120</p>
                            <span className="text-primary">View ></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Products;