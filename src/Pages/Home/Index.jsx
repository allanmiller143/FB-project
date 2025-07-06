import React from 'react'
import { Container, Typography, Button, Box } from '@mui/material'

const Index = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h1" gutterBottom>
          Página Inicial
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Bem-vindo ao nosso site! Este espaço será o ponto central de divulgação dos projetos do time de pesquisa do Prof. Fernando Buarque.
        </Typography>

        <Typography variant="body1" sx={{ fontFamily: "'Inter', sans-serif" }}>
          Este parágrafo está com Inter
        </Typography>

        <Button variant="contained" color="primary" size="large">
          Ver Projetos
        </Button>
      </Box>
    </Container>
  )
}

export default Index
