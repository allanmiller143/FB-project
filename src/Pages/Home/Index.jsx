import React from 'react'
import { Typography, Button, Box } from '@mui/material'
import PageContainer from '../../Utils/Components/Containers/PageContainer'
import HeroSection from './Components/HeroSection/HeroSection'
import Members from './Components/Members/Members'
import ContactCard from './Components/Contact/ContactCard'
import News from './Components/News/News'
import Projects from './Components/Projects/Projects'
import ContactForm from '../Contact/Components/ContactForm'

const Index = () => {
  return (
    <PageContainer title="Início | Grupo de Pesquisa - Prof. Fernando Buarque" description="Bem-vindo ao site do grupo de pesquisa liderado pelo Prof. Fernando Buarque. Veja nossos projetos, publicações e equipe.">
        <HeroSection/>   
        <News/>
        <Projects/>
        <ContactForm/>
        <Members/>
        
        <ContactCard/>
    
        
        
    </PageContainer>
  )
}

export default Index
