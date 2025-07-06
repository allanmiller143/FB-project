// src/components/ProjetosDestaque.jsx
import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ py: 6, px: 2 }}>
      <Typography variant="h2" gutterBottom>
        Projetos em Destaque
      </Typography>

      {/* Aqui entrariam os cards de projeto */}
      {/* Pode usar mock de dados com map() */}

      <Button onClick={() => navigate('/projetos')} variant="outlined" sx={{ mt: 4 }}>
        Ver todos os projetos
      </Button>
    </Box>
  )
}

export default Projects
