import React from 'react'

const Helmet = (props) => {

    document.title= "Week9 -" +props.title;
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Helmet
