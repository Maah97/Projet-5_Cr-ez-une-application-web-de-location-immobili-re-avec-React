import React, { useState } from 'react';

function Caroussel(props) {
    const [imgIndex, SetImgIndex] = useState(0);
    function prevImg (){

    }

    function nextImg (){
        SetImgIndex(imgIndex+1);
    }
    return (
        <div className="caroussel-pitures">
            <div className='carroussel-container' style={{transform:`translateX(-${imgIndex*100}%)`}}>
            {props.pictures.map((picture, i) =>
                <img className='pictures' src={picture} alt="" />
            )}
            </div>
            <div onClick={prevImg} className="fleche-precedent"><i class="fa-solid fa-chevron-left"></i></div>
            <p className="pagination">1/4</p>
            <div onClick={nextImg} className="fleche-suivant"><i class="fa-solid fa-chevron-right"></i></div>
        </div>
    );
}

export default Caroussel