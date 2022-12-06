import React, { useEffect } from 'react'
import {checkWin} from '../../pages/HangMan'
const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true;
  
    if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
      finalMessage = 'Congratulations! You won! 😃';
      playable = false;
    } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
      finalMessage = 'Unfortunately you lost. 😕';
      finalMessageRevealWord = `...the word was: ${selectedWord}`;
      playable = false
    }
  
    useEffect(() => {
      setPlayable(playable);
    });
    // console.log(finalMessage);

    return (
      <div className="popup-container absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center" style={finalMessage !== '' ? {display:'flex'} : {display:'none'}}>
        <div className="popup p-16 bg-white flex flex-col items-center rounded-2xl">
          <h2 className='text-3xl'>{finalMessage}</h2>
          <h3 className='text-2xl'>{finalMessageRevealWord}</h3>
          <button className='p-2 pl-6 pr-6 bg-gray-900 text-white rounded-lg mt-12' onClick={playAgain}>Play Again</button>
        </div>
      </div>
    )
  }

export default Popup
