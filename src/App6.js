import React, { useEffect, useState } from 'react';
import DivisionContainer from './components6/divisionContainer';
import InfoSection from './components6/infoSection';
import Pagination from './components6/pagination';
import FilterOptions from './components6/filterOptions';
import { API_URL } from './constants/api';

function App (){
    const loadCountPerPage = 10;
    const [totalRecords, setTotalRecords] = useState([]);
    const [offset, setPageOffset] = useState(0);
    const [filterKey, setFilterKey] = useState('');
    const [data, setData] = useState({
        info: {},
        records: [],
    });
    
    console.log('Log ::: totalRecords ::: ', totalRecords);
    
    const handleLoadMore = () => {
        setPageOffset(offset + loadCountPerPage);
    }

    const handlePageClick = (page) => {
        setPageOffset(loadCountPerPage*(page-1));
    }

    useEffect(() => {
        fetch(`${API_URL}?load_amount=${100}&offset=${offset}`)
            .then(res => res.json())
            .then(res => setTotalRecords(res.records));
    }, [filterKey])
    

    useEffect(() => {
        fetch(`${API_URL}?load_amount=${loadCountPerPage}&offset=${offset}`)
            .then(res => res.json())
            .then(res => setData(res));
            // .then(res => setData(prev => ({
            //     records: [...prev.records, ...res.records],
            //     info: {...prev.info, ...res.info}
            // })))
    }, [offset]);


    const filterData = (division) => {
        console.log('Log ::: division ::: ', division);
        console.log('Log ::: totalRecords ::: ', totalRecords);
        // setData(prev => ({
        //     info: prev.info,
        //     records: totalRecords.filter(item => item.division.includes(division))
        // }))
    }


    return (
        <div>
            <h1>Harvard musium</h1>
            <FilterOptions filterData={filterData} />
            <div className='content'>
                {/*<section className='info'>*/}
                {/*    /!*<InfoSection info={data.info} />*!/*/}
                {/*</section>*/}
                <section className='divisions'>
                    <DivisionContainer records={data.records}  />
                    {/*<button onClick={handleLoadMore}>Load more</button>*/}
                    <Pagination totalPages={data.info.pages} handlePageClick={handlePageClick} />
                </section>
            </div>
        </div>
    );
}

export default App;