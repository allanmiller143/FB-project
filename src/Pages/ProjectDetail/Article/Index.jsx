// src/pages/Projetos/ProjetoDetalhado.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import { projetosData } from '../../Home/Components/Projects/Data'
import {Box,Typography,Chip,Divider,Stack,Button,Link,Paper} from '@mui/material'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import HeroSection from './Components/HeroSection'
import Abstract from './Components/Abstract'
import ProjectInformation from './Components/ProjectInformation'
import PageContainer from '../../../Utils/Components/Containers/PageContainer'

const ProjetoDetalhado = () => {
  const { id } = useParams()
  const projeto = projetosData.find((p) => p.id === id)

  if (!projeto) {
    return (
      <Box sx={{ py: 10, px: 4 }}>
        <Typography variant="h5">Projeto não encontrado.</Typography>
      </Box>
    )
  }

  return (
    <PageContainer title={`${projeto.titulo}`} description="Detalhes do projeto">
      <Box sx={{ maxWidth: 'lg', mx: 'auto', py: {xs:0, mb:6}, px: 2 }}>
        <HeroSection projeto={projeto}/>  
        <Abstract projeto={projeto}/>
        <ProjectInformation projeto={projeto}/>
      </Box>
    </PageContainer>
  )
}

export default ProjetoDetalhado
