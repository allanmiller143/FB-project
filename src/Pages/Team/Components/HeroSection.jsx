// src/components/TeamMemberCard.jsx
import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import TeamDiamondGrid from './TeamDiamondGrid';
import { motion } from 'framer-motion'
const MotionBox = motion(Box)
const MotionTypography = motion(Typography)
import { useTranslation } from 'react-i18next';


const HeroSection = () => {
  const { t } = useTranslation('team');
    
  return (
    <MotionBox
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
    >
        <Box sx={{ color: 'primary.main', mb:5,display:'flex', alignItems:'center' }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item size={{xs:12, md:6}} sx ={{justifyContent:'center'}}>
                    {/* Titulo */}
                    <MotionTypography
                    variant="h1"
                    sx={{
                        fontWeight: 500,
                        fontSize: { xs: '2rem', md: '3.4rem' },
                        color: 'primary.main',
                        mb: 3,
                        textAlign:{xs:'center',md:'left'},
                    }}
                    >
                        {t('team_hero.title')}

                    </MotionTypography>
                    
                    {/* Subtitulo */}
                    <Typography variant='body1' sx={{color: 'text.secondary',mt:{ xs:2.5,md:1.5}, mb:4, fontSize:'1.5rem', textAlign:{xs:'center', md:'left'}}}>
                        {t('team_hero.subtitle')}
                    </Typography>

                    {/* Descrição */}
                    <Typography variant='body2' sx={{fontSize:'0.95rem', color:'text.secondary', maxWidth: {xs:'100%', md:'90%'}, textAlign:{xs:'center', md:'left'}}}>
                        {t('team_hero.caption')}           
                    </Typography>
                </Grid>
                <Grid item size={{xs:12, md:6}}>
                    <TeamDiamondGrid/>
                </Grid>
            </Grid>
            <Divider/>
        </Box>
    </MotionBox>
  );
};

export default HeroSection;
