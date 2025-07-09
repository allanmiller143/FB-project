// src/pages/Contato.jsx
import React from 'react'
import { Box, Typography, Grid, TextField, Button, IconButton, Avatar } from '@mui/material'
import { LocationOn, Phone, Email } from '@mui/icons-material'
import { motion } from 'framer-motion'
import HeroSection from './Components/HeroSection'
import ContactForm from './Components/ContactForm'
import PageContainer from '../../Utils/Components/Containers/PageContainer'

const Contato = () => {
  return (
    <PageContainer title="Contato" description="Esta página é responsável por exibir as informações de contato">
      <HeroSection />
      <ContactForm/>
    </PageContainer>
  )
}

export default Contato
