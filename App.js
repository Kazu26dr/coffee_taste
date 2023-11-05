// import React, { useState } from 'react';

// function CoffeeQuiz() {
//   const [mood, setMood] = useState('');
//   const [result, setResult] = useState('');
//   const [tastePreference, setTastePreference] = useState('');

//   const handleMoodSelection = (selectedMood) => {
//     setMood(selectedMood);
//     // "Relax"を選んだ後、味の好みの質問を表示
//     setTastePreference('');
//   };

//   const handleTastePreference = (preference) => {
//     setTastePreference(preference);
//     if (mood === 'BRAZIL' && preference === 'Mild') {
//       generateResult(mood);
//     }
//   };

//   const generateResult = (selectedMood) => {
//     // ここで適切な診断結果を生成するロジックを追加します
//     if (selectedMood === 'BRAZIL') {
//       setResult('Recommend COFFEE IS BRAZIL');
//     }
//   };

//   const handleReload = () => {
//     setMood('');
//     setTastePreference('');
//     setResult('');
//   };

//   return (
//     <div className='flex items-center flex-col'>
//       <h1 className="text-center text-3xl text-black p-4 m-20 w-56">COFFEE</h1>
//       {mood ? (
//         <div className='flex items-center flex-col'>
//           {tastePreference ? (
//             <div>
//               <p className='text-xl'>Taste Preference: {tastePreference}</p>
//               <p className='text-xl'>Result: {result}</p>
//               <button onClick={handleReload} className="bg-blue-500 text-white rounded-md p-2">Again</button>
//             </div>
//           ) : (
//             <div>
//               <p className='text-xl'>What kind of taste do you prefer?</p>
//               <div className='flex justify-center'>
//                 <button
//                   className='m-1.5 p-1.5 rounded-md bg-green-500 text-white'
//                   onClick={() => handleTastePreference('Mild')}
//                 >
//                   Mild
//                 </button>
//                 <button
//                   className='m-1.5 p-1.5 rounded-md bg-red-500 text-white'
//                   onClick={() => handleTastePreference('Bold')}
//                 >
//                   Bold
//                 </button>
//               </div>
//             </div>
//           )}
//           <button onClick={handleReload} className="bg-blue-500 text-white rounded-md p-2">Again</button>
//         </div>
//       ) : (
//         <div className='text-center'>
//           <p className='text-xl'>How are you feeling right now?</p>
//           <div className='flex justify-center'>
//             <button
//               className='m-1.5 p-1.5 rounded-md bg-green-500 text-white'
//               onClick={() => handleMoodSelection('BRAZIL')}
//             >
//               Relax
//             </button>
//             <button
//               className='m-1.5 p-1.5 rounded-md bg-red-500 text-white'
//               onClick={() => handleMoodSelection('COLOMBIA')}
//             >
//               Exciting
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CoffeeQuiz;

import React from 'react';
import CoffeeQuiz from './CoffeeComponents/CoffeeQuiz';

function App() {
  return (
    <div className="App">
      <CoffeeQuiz />
      <p className='flex justify-center m-24'>©Sasa'sCoffee Inc.</p>
    </div>
  );
}

export default App;
