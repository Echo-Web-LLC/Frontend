import React from 'react';

function Demo(props) {
    return (
        <>
        <div className='Demo_Page_E-commerce'>
            <h1 className="Header_1_Demo">
                DEMO
            </h1>
            <h2 className="Header_2_Demo"> 
                Disclaimer: This is for demo purposes only! Please Do NOT put in sensitive information.
            </h2>
            <br></br>
            <main>
                <div>
                <h3>
                    Login
                </h3>
                  <button> Guest Login </button>
                </div>
                <div>
                <h3> Browsing Items </h3>
                <button> Add to Cart </button>
                <button> Remove from Cart </button>
                </div>
                <div>
                <h3>
                Check out (Buying)
                </h3>
                <button> Check out </button>
                </div>
            </main>
        </div>
        </>
    );
}

export default Demo;