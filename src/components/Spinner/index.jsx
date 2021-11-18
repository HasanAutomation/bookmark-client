import React from 'react';
import './Spinner.scss';

export default function Spinner({ text = 'Loading' }) {
  return (
    <>
      <div className='spinner'>
        <span className='spinner-inner-1'></span>
        <span className='spinner-inner-2'></span>
        <span className='spinner-inner-3'></span>
      </div>
    </>
  );
}
