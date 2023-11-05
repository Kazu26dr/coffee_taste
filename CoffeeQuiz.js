import React, { useState } from 'react';
import MoodQuestion from './MoodQuestion';
import TastePreferenceQuestion from './TastePreferenceQuestion';
import FruitFlavorPreferenceQuestion from './FruitFlavorPreferenceQuestion';


function CoffeeQuiz() {
  const [mood, setMood] = useState('');
  const [result, setResult] = useState('');
  const [tastePreference, setTastePreference] = useState('');
  const [fruitFlavorPreference, setFruitFlavorPreference] = useState('');


  const handleMoodSelection = (selectedMood) => {
    setMood(selectedMood);
    setTastePreference('');
    setFruitFlavorPreference('');
  };

  const handleTastePreference = (preference) => {
    setTastePreference(preference);
    generateResult(mood, preference);
  };

  const handleFruitFlavorPreference = (preference) => {
    setFruitFlavorPreference(preference);
    generateResult(mood, tastePreference, preference);
  };

  const generateResult = (selectedMood, selectedTastePreference, selectedFruitFlavorPreference) => {
    if (selectedMood === 'BRAZIL') {
      if (selectedTastePreference === 'Mild') {
        if (selectedFruitFlavorPreference === 'Mild') {
          setResult('Recommend COFFEE IS BRAZIL with mild fruit flavors');
        } else if (selectedFruitFlavorPreference === 'Strong') {
          setResult('Recommend COFFEE IS BRAZIL with strong fruit flavors');
        }
      } else if (selectedTastePreference === 'Bold') {
        if (selectedFruitFlavorPreference === 'Mild') {
          setResult('Recommend COFFEE IS ANOTHER TYPE FOR BOLD TASTE with mild fruit flavors');
        } else if (selectedFruitFlavorPreference === 'Strong') {
          setResult('Recommend COFFEE IS ANOTHER TYPE FOR BOLD TASTE with strong fruit flavors');
        }
      }
    } else if (selectedMood === 'COLOMBIA') {
      // COLOMBIAに関する診断ロジックを追加
      if (selectedFruitFlavorPreference === 'Mild') {
        setResult('Recommend COFFEE IS COLOMBIA with mild fruit flavors');
      } else if (selectedFruitFlavorPreference === 'Strong') {
        setResult('Recommend COFFEE IS COLOMBIA with strong fruit flavors');
      }
    } else if (selectedTastePreference === 'Bold') {
      if (selectedFruitFlavorPreference === 'Mild') {
        setResult('Recommend COFFEE IS ANOTHER TYPE FOR BOLD TASTE with mild fruit flavors');
      } else if (selectedFruitFlavorPreference === 'Strong') {
        setResult('Recommend COFFEE IS ANOTHER TYPE FOR BOLD TASTE with strong fruit flavors');
      }
    }
  };
  

  const handleReload = () => {
    setMood('');
    setTastePreference('');
    setFruitFlavorPreference('');
    setResult('');
  };

  return (
    <div className='flex items-center flex-col'>
      <h1 className="text-center text-3xl text-black p-4 m-8 w-56">COFFEE</h1>
      {mood ? (
        <div className='flex items-center flex-col'>
          {tastePreference ? (
            fruitFlavorPreference ? (
              <div>
                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1920px-Flag_of_Brazil.svg.png' alt='' className='m-20 w-[60%] '></img>
                <p className='text-xl text-center'>Fruit Flavor Preference: {fruitFlavorPreference}</p>
                <p className='text-xl text-center'>Result: {result}</p>
              </div>
            ) : (
              // "Exciting"の場合、新しい質問を表示
              <FruitFlavorPreferenceQuestion onFruitFlavorPreferenceSelect={handleFruitFlavorPreference} />
            )
          ) : (
            <TastePreferenceQuestion onTastePreferenceSelect={handleTastePreference} />
          )}
          <button onClick={handleReload} className="bg-blue-500 text-white rounded-md p-2 m-5">Again</button>
        </div>
      ) : (
        <MoodQuestion onMoodSelect={handleMoodSelection} />
      )}
    </div>
  );
}

export default CoffeeQuiz;