import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Index'
// import Projetos from '../pages/Projetos'
// import Contato from '../pages/Contato'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/projetos" element={<Projetos />} />
      <Route path="/contato" element={<Contato />} /> */}
    </Routes>
  )
}
