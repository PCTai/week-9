import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Weather = () => {
  const [location, setLocation] = useState('');
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const handleSearchLocation = (e) => {
    const { key } = e;
    if (key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          setData(res);
          setLocation('');
        })
    }
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
                  bootstrapURLKeys={{ key: "AIzaSyAmGRGC_q6HJoA6rKxk6kqkupFhJa0u4Og" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />  
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
              {/* <div className="">
              {data.main && <h3 className="font-bold text-3xl text-white">30°F</h3>}
              <h3 className="font-medium text-white text-xl">FeelLike</h3>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  )
}

export default Weather
