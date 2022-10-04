import React from 'react';

function GalaryDivision ({
    id,
    images,
    division,
    copyright,
    creditline,
    totaluniquepageviews,
    verificationleveldescription,
}){
    return (
        <div className='division'>
            <h4>{verificationleveldescription}</h4>
            <div className='imageGrid'>
                {images.map(({ baseimageurl, imageid }) => <img className='galleryItem' key={imageid} src={baseimageurl} alt=""/>)}
            </div>
            <div className='divisionInfo'>
                <div>Division: {division}</div>
                <div>Creditline: {creditline}</div>
                <div>Total unique page views: {totaluniquepageviews}</div>
                <div>Copyright: {copyright}</div>
            </div>
        </div>
    );
}

export default GalaryDivision;