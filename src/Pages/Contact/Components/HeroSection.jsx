// src/pages/Contato.jsx
import React from 'react'
import { Box, Typography, Grid, TextField, Button, IconButton, Avatar } from '@mui/material'
import { LocationOn, Phone, Email } from '@mui/icons-material'
import Contact from '../../../assets/Contact.svg'

const HeroSection = () => {

  const contactData = [
    {
      icon: <Phone color="primary" />,
      title: '+55 (81) 99999-9999',
      description: 'Nosso contato'
    },
    {
      icon: <Email color="primary" />,
      title: 'contato@pesquisa.ai',
      description: 'e-mail institucional'
    },
    {
      icon: <LocationOn color="primary" />,
      title: 'Endereço',
      description: 'Rua Benfica, 455 - Madalena, Recife - PE'
    }
  ]
  return (
    <Box
        sx={{
            width: "100%",
            display: "flex",
            mx: "auto",
            gap: 2,
            alignItems: "center",
            backgroundImage: {xs:`linear-gradient(to bottom,transparent 0%,transparent 27%,white 27%, #F4F6F8 100%),linear-gradient(135deg,#062144,#0D3B66,rgb(75, 109, 141))`, md: `linear-gradient(to bottom,transparent 0%,transparent 50%,white 50%, #F4F6F8 100%),linear-gradient(135deg,#062144,#0D3B66,rgb(75, 109, 141))`},
            backgroundBlendMode: "normal",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
        }}
        >   
        <Box sx = {{ width :'100%', maxWidth:'lg', mx:'auto', display :'flex', gap: 5, justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, py: {xs:1,md:3}, px: { xs: 2, md: 2 } }}>                                       
            <Box >                                         
                <Box> 
                    <Box sx = {{width: '100%', maxWidth: 'lg', mx: 'auto', py: 10, }}>
                        <Typography variant="h4" fontWeight={700} gutterBottom color="text.light">
                            Contate-nos
                        </Typography>
                        <Typography variant="body1" color="text.secondaryLight" sx = {{maxWidth: 500, mb: 4}}>
                            Estamos aqui para ajudar! Se você tiver alguma dúvida, sugestão ou precisar de mais informações sobre nossos projetos, não hesite em entrar em contato conosco.
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Box sx = {{width: '100%', maxWidth: 'lg', mx: 'auto', py: 2 }}>
                        <Typography variant="h5" fontWeight={700} gutterBottom color="primary.main">
                            Informações de contato
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx = {{maxWidth: 500, mb: 4}}>
                            Preencha o formulário abaixo ou entre em contato diretamente através dos nossos canais de comunicação. Estamos ansiosos para ouvir de você!
                        </Typography>
                        <Box sx = {{display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center', justifyContent: 'start'}}>
                            {contactData.map((item, index) => (
                                <Box key={index} sx={{display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'start',}}>
                                    {item.icon}
                                    <Typography variant="body1" fontWeight={600} mt={1}>{item.title}</Typography>
                                    <Typography variant="body2" color="text.secondary" sx  ={{fontSize: { xs: '0.875rem', md: '0.8rem' }}}>{item.description}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ 
                width: { xs: 220, md: 400 },
                height: { xs: 300, md: 480 },
                overflow: 'hidden',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                alignSelf: 'center',
            }}>
                <Box
                component="img"
                src={Contact}
                alt="Contato"
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
                />
            </Box>
        </Box>  
    </Box>
  )
}

export default HeroSection
