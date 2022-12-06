import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet'

const Home = () => {
    return (
        <Helmet title="Home" className=" ">
            <h1 className='text-5xl text-yellow-500 text-center pt-12 font-bold'>Week 9</h1>
            <div className="home-col  container m-auto justify-around pt-12">
                <Link to={'/hangman'}>
                    <div className="bg-blue-900 p-20 text-white rounded-2xl text-3xl text-center hover:scale-105">HangMan App</div>
                </Link>
                <Link to={'/weather'}>
                    <div className="bg-gray-900 p-20 text-white rounded-2xl text-3xl text-center hover:scale-105">Weather App</div>
                </Link>
            </div>
        </Helmet>
    )
}

export default Home
