import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HangMan from '../pages/HangMan';
import Home from '../pages/Home';
import Weather from '../pages/Weather';

const Layout = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to={'home'}/>}/>
        <Route path='weather' element={<Weather/>}/>
        <Route path='hangman' element={<HangMan/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='*' element={<Home/>}/>
    </Routes>
  )
}

export default Layout
