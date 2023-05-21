import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({searched,onButtonSubmit}) =>{
    return (
        <div className='w-50 mx-auto   '>
            <p className='font-size'>
                { 'You can upload a photo here' }
            </p>
            <div className='d-flex justify-content-center bg-sefareshi p-4 rounded shadow-lg'>
                <input type="text" className='form-control' onChange={searched} placeholder={'Enter a url'}/>
                <button className='btn-indigo px-4' onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
    )
}


export default ImageLinkForm;