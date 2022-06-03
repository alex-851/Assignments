import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
  return (
    <div className=''>
        <p className='f3'>
            {'This magic brain will detect faces.give it a try.'}
        </p>
        <div className='center'>
            <div className='form center pa4 br-3 shadow-5'>
            <input className='f3 pa2 w-70 center' type='text' onChange={onInputChange}/>
            <button className='w-30 f4 grow link ph3 white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
            </div>
         
        </div>
        
    </div>
  )
}

export default ImageLinkForm;
