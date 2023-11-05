import React from 'react';

function FruitFlavorPreferenceQuestion({ onFruitFlavorPreferenceSelect }) {
  return (
    <div>
      <p className='text-xl'>Do you prefer strong fruit flavors?</p>
      <div className='flex justify-center'>
        <button
          className='m-1.5 p-1.5 rounded-md bg-green-500 text-white'
          onClick={() => onFruitFlavorPreferenceSelect('Mild')}
        >
          Mild
        </button>
        <button
          className='m-1.5 p-1.5 rounded-md bg-red-500 text-white'
          onClick={() => onFruitFlavorPreferenceSelect('Strong')}
        >
          Strong
        </button>
      </div>
    </div>
  );
}

export default FruitFlavorPreferenceQuestion;
