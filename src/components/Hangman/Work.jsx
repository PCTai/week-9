import React from 'react'

const Work = ({ selectedWord, correctLetters }) => {
    const data='abcdefgh';
  return (
    <div className='text-center flex justify-center'>
      {
        selectedWord && selectedWord.split('').map((key,i ) =>(
            <div key={i} className="letter border-b-2 text-white m-4 w-5 text-xl">
                {correctLetters.includes(key) ? key :''}
            </div>
        ))
      }
    </div>
  )
}

export default Work
