import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Index'
import Contato from '../Pages/Contact/Index.jsx'
import Projetos from '../Pages/AllProjects/Index.jsx'
import DetalheProjeto from '../Pages/ProjectDetail/Article/Index.jsx'
import Team from '../Pages/Team/Index.jsx'
import News from '../Pages/Notices/Index.jsx'
import NewsDetail from '../Pages/NewsDetail/Index.jsx'
import EventCalendar from '../Pages/Events/Index.jsx'
// import Projetos from '../pages/Projetos'
// import Contato from '../pages/Contato'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/publicações" element={<Projetos/>} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/time" element={<Team />} />
      <Route path="/noticias" element={<News/>} />
      <Route path="/publicações/:id" element={<DetalheProjeto/>}/>
      <Route path="/noticia/:id" element={<NewsDetail/>}/>
      <Route path="/eventos" element={<EventCalendar/>}/>

      

    </Routes>
  )
}
