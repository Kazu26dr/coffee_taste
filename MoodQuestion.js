import React from 'react';

function MoodQuestion({ onMoodSelect }) {
  return (
    <div className='text-center'>
      <p className='text-xl'>How are you feeling right now?</p>
      <div className='flex justify-center'>
        <button
          className='m-1.5 p-1.5 rounded-md bg-green-500 text-white'
          onClick={() => onMoodSelect('BRAZIL')}
        >
          Relax
        </button>
        <button
          className='m-1.5 p-1.5 rounded-md bg-red-500 text-white'
          onClick={() => onMoodSelect('COLOMBIA')}
        >
          Exciting
        </button>
      </div>
    </div>
  );
}

export default MoodQuestion;
