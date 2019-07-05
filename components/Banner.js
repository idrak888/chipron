import React from 'react';

const Banner = () => {
    return (
        <div className="Banner">
            <div className="row">
                <div className="col-sm-6">
                    <div className="info-box">
                        <h2>The NanoX</h2>
                        <p>Our newest addition to the <strong>FastList</strong>, the NanoX is now available for purchase. At a size of just 3mm by 3mm, the NanoX can process up to 18GBs per second!</p>
                        <button className="btn btn-success">Learn more</button>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h1>Faster.</h1>
                    <h1>Smarter.</h1>
                    <h1>Better.</h1>
                </div>
            </div>
        </div>
    );
}

export default Banner;