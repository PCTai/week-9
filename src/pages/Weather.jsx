import React, { useEffect, useState } from 'react';
import { Link, useFetcher } from 'react-router-dom';
import Helmet from '../components/Helmet'
// import MyMarker from '../components/MyMarker';
import GoogleMapReact from 'google-map-react';
import { getLocation, getWeatherFormLocation } from '../helper';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [data, setData] = useState({});
  const [marker, setMarker] = useState({
    text: 'my marker',
    lat: 16.4667,
    lng: 107.6
  });
  const [open, setOpen] = useState(false);
  const defaultProps = {
    center: {
      lat: 16.4667,
      lng: 107.6
    },
    zoom: 11
  };
  useEffect(() => {
    const setNewLocation = async () => {
      const location = await getLocation(marker);
      const data = await getWeatherFormLocation(location);
      setData(data);
    }
    setNewLocation()
  }, [marker]);

  const handleSearchLocation = async (e) => {
    const { key } = e;
    if (key === "Enter") {
      const data = await getWeatherFormLocation(location);
      setData(data);
      console.log(data);
      setLocation('');
    }
  }
  const handleOnclick = (e) => {
    const { lat, lng } = e;
    setMarker(
      {
        text: "new",
        lat,
        lng
      }
    )
  }
  return (
    <Helmet title="Weather" className="">
      <div className="weather h-screen ">
        <div className="container m-auto p-6 pt-0 pb-0 relative h-full">

          <div className="absolute top-6 left-4">
            <Link to={'/home'}><button className=' p-2 pl-4 pr-4 text-white rounded-full border border-slate-300'>Back</button></Link>
          </div>
          <div className="absolute top-6 right-4">
            <button
              onClick={() => setOpen(!open)}
              className=' p-2 pl-4 pr-4 text-white rounded-full border border-slate-300 '
            >Map</button>

            {open && <div className='absolute w-96 h-96 top-12 right-0  z-20 '>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                onClick={(e) => handleOnclick(e)}
              >
                {/* { marker.text && <MyMarker marker={marker}/>} */}
              </GoogleMapReact>
            </div>}

          </div>
          <div className="pt-6  text-center">
            <input className='placeholder:italic placeholder:text-white bg-white  border border-slate-300 rounded-3xl py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-white bg-transparent'
              type="text"
              placeholder='Enter Location'
              value={location}
              onChange={e => setLocation(e.target.value)}
              onKeyDown={handleSearchLocation}
            />
          </div>

          <div className="flex mt-40 relative">
            {data.main && (
              <div className="l">
                <h3 className="text-white font-medium text-3xl">{data.name}</h3>
                <h1 className='text-white font-bold text-6xl mt-6'>{data.main.temp_max}°F</h1>
              </div>
            )}
            {data.main && <div className="text-white absolute bottom-0 right-0 -rotate-90 font-medium text-3xl">{data.weather[0].main}</div>}
          </div>

          <div className="max-w-2xl w-full  absolute bottom-4 right-0 left-0    m-auto">
            <div className="m-4 flex justify-around p-6 rounded-2xl bg-opacity-50 bg-gray-400">
              <div className="mr-4 text-center">
                {data.main && <h3 className="font-bold text-3xl text-white">{data.main.feels_like}°F</h3>}
                <h3 className="font-medium text-white text-xl">Feels Like</h3>
              </div>
              <div className="mr-4 text-center">
                {data.main && <h3 className="font-bold text-3xl text-white">{data.main.humidity}</h3>}
                <h3 className="font-medium text-white text-xl">Humidity</h3>
              </div>
              <div className="mr-4 text-center">
                {data.main && <h3 className="font-bold text-3xl text-white">{data.wind.speed}</h3>}
                <h3 className="font-medium text-white text-xl">Wind</h3>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  )
}

export default Weather
