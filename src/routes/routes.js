import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBarPage from '../components/navbar/NavBarPage'
import { Home } from '../pages/home/Home'
import TableUsers from '../pages/Table/TableUsers'

export const RoutesPages = () => {
  return (
    <BrowserRouter>
      <NavBarPage/>
      <Routes>
        <Route path='/' element={<Home/>}/>  
        <Route path='/table' element={<TableUsers/>}/>
      </Routes>  
    </BrowserRouter>
  )
}
 