import React from 'react'
import { Typography, Button, Box } from '@mui/material'
import PageContainer from '../../Utils/Components/Containers/PageContainer'
import TeamSection from './Components/TeamSection'
import HeroSection from './Components/HeroSection'

const Team = () => {
  return (
    <PageContainer title="Time" description="Esta página é responsável por exibir o time de pesquisa do professor Fernando Buarque">
      <Box sx = {{maxWidth:'lg', margin:'0 auto', px:1, py:{xs:8,md:10}}}>
        <HeroSection/>
        <TeamSection/>
      </Box>      
    </PageContainer>
  )
}

export default Team
