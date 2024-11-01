import React from 'react';

function Container({ isOpen }){
    return (
        <div className='container'style={{ marginLeft: isOpen ? '0px' : '0px' }}>
            <h1>DAMINI</h1>
            <p> Laboris est culpa reprehenderit ullamco. Voluptate eiusmod sit est anim
        magna dolore. Commodo ex anim Lorem non adipisicing non. Nisi tempor
        quis nulla velit esse. Nisi occaecat commodo velit excepteur deserunt eu
        adipisicing amet culpa aute sint mollit. Cillum occaecat adipisicing
        fugiat aliqua tempor cupidatat labore ad commodo ut in.</p>
        </div>
    );
};

export default Container;