// src/components/LargeContainer.jsx
import React from 'react'
import { Container } from '@mui/material'

const LargeContainer = ({ children, sx = {} }) => {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', margin: '0 auto', ...sx }}>
      {children}
    </Container>
  )
}

export default LargeContainer
