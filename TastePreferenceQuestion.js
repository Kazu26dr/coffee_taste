import React from 'react';

function TastePreferenceQuestion({ onTastePreferenceSelect }) {
  return (
    <div>
      <p className='text-xl'>Do you like a mild taste?</p>
      <div className='flex justify-center'>
        <button
          className='m-1.5 p-1.5 rounded-md bg-green-500 text-white'
          onClick={() => onTastePreferenceSelect('Mild')}
        >
          Mild
        </button>
        <button
          className='m-1.5 p-1.5 rounded-md bg-red-500 text-white'
          onClick={() => onTastePreferenceSelect('Bold')}
        >
          Strong
        </button>
      </div>
    </div>
  );
}

export default TastePreferenceQuestion;
