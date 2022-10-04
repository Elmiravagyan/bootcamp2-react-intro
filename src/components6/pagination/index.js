import React, { useState, useEffect, useCallback } from 'react';


function Pagination ({ handlePageClick, totalPages }){
    const [activeIndex, setActiveIndex] = useState(1);
    const [currentPages,setCurrentPages] = useState([1,2,3,4,5]);

    const [filterkey, setFilter] = useState('');
    
    console.log('Log ::: page outside ::: ', activeIndex );
    const onClick = useCallback((page) => {
        console.log('Log ::: page inside ::: ', activeIndex);
        setActiveIndex(page);
        handlePageClick(page);
    }, []);

    useEffect(() => {
        if(activeIndex === currentPages[currentPages.length - 1] + 1) {
            setCurrentPages(prev => prev.map(page => page + 5))
        }
        if(activeIndex === currentPages[0] - 1) {
            setCurrentPages(prev => prev.map(page => page - 5))
        }
    }, [activeIndex]);

    return (
        <div className='paginationWrapper'>
            <button disabled={activeIndex===1}  onClick={() => onClick(activeIndex - 1)}>Prev</button>
            {currentPages.map(page => <button className={activeIndex === page ? 'active' : ''} onClick={() => onClick(page)} key={page}>{page}</button>)}
            <button onClick={() => onClick(activeIndex + 1)}>Next</button>
        </div>
    );
}

export default Pagination;