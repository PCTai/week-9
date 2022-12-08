
import React from 'react'

const MyMarker = ({ marker }) => {
  return (
    <div
      className=" w-5 h-5 bg-red-500 rounded-full "
      x={marker.lat}
      y={marker.lng}
      text="My Marker"
    >
      {marker.text}
    </div>
  )
}

export default MyMarker
