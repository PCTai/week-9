import React from 'react'

const WrongLetters  = ({wrongLetters}) => {
    const length= wrongLetters.length ;
  return (
    <div className='ml-3 w-52 text-end'>
     {length>0 && <h3 className='text-white '>Wrong</h3>}
     <div className="flex justify-end">
     {
        wrongLetters && wrongLetters.map((key,i ) =>(
            <div key={i} className="letter border-b-2 border-red-500 text-white m-2 w-5 text-xl">
               {key}
            </div>
        ))
     }
     </div>
    </div>
  )
}

export default WrongLetters 
