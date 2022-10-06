import React, { useRef, useState } from 'react';

function App1 (){
    const [, forceUpdate] = useState();
    const ref = useRef();
    
    const forceFocus = () => {
        ref.current.focus();
    }

    return (
        <div>
           <h1>HELP</h1>
            <button onClick={forceUpdate}>Force Update</button>
            <A inputRef={ref} />
            <C><B forceFocus={forceFocus}/></C>
        </div>
    );
}

export default App1;

const A = ({ inputRef }) => {
    console.log('Log ::: ref ::: ', inputRef);
    return  <div><input ref={inputRef} type="text"/></div>
}
const B = ({ forceFocus }) => <div className='corner'><button onClick={forceFocus} className='icon'>Focus</button></div>
const C = ({ children }) => <div>{children}</div>