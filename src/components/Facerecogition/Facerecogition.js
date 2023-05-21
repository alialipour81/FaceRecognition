import React from 'react';
import './Facerecogition.css'


const Facerecogition = ({image,box}) => {
    return (
        <div className='my-2 d-flex justify-content-center '>
           <div className='absolute mt-2'>
               <img src={image} alt={'image Response'} width='400px' height='auto' id='inputimage'/>
               <div className='bounding-box ' style={{top:box.topRow,bottom:box.bottomRow,right: box.rightCol,left: box.leftCol}}></div>
           </div>
        </div>
    )
}

export default Facerecogition;