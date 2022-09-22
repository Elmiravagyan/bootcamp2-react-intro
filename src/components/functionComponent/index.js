import React from 'react';
//Stateless
function Greet(props){
    console.log('Log ::: props ::: ', props);
    return (
        <div>
			{props.children}
        </div>
    );
}

export default Greet;