import React from 'react';

const Scroll = (props) => {

    return(
        <div style={{overflowY: 'scroll', height:'500px'}}>
            {props.children}
        </div>

    );// I can create components that wrap other components with props.children
};

export default Scroll;
