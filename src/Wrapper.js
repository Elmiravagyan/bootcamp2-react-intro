import React from 'react';
import useResize from './hooks/useResize';

function Wrapper (){
	const isMobile = useResize();

    return (
        <div>
			{!isMobile ?
				<h1 className='desktop'>Desktop</h1>
				:
				<h1 className='Mobile'>Mobile</h1>
			}
        </div>
    );
}

export default Wrapper;