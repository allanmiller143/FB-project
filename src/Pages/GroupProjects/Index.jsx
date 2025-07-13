import React from 'react'
import { Typography, Button, Box } from '@mui/material'
import PageContainer from '../../Utils/Components/Containers/PageContainer'
import {groupProjectsData} from './Components/Data'
import GroupProjectsCard from './Components/GroupProjectsCard'
import HeroSection from './Components/HeroSection'

const GroupProjects = () => {
if(!groupProjectsData){
    return;
}
  return (
    <PageContainer title="Início | Grupo de Pesquisa - Prof. Fernando Buarque" description="Bem-vindo ao site do grupo de pesquisa liderado pelo Prof. Fernando Buarque. Veja nossos projetos, publicações e equipe.">
      <Box sx={{width:'100%', maxWidth:"lg", margin:'0 auto', py:{xs:3,md:8}, px:1 }}>      
        <HeroSection/>
        <Box>
            {groupProjectsData.map((projeto) => (
            <GroupProjectsCard key={projeto.id} projeto={projeto} />
            ))}
        </Box>
      </Box>
    </PageContainer>
  )
}

export default GroupProjects
