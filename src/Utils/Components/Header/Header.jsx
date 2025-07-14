// src/components/Header.jsx
import React, { useState } from 'react'
import {Box,Container,Typography,Button,IconButton,Drawer,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Divider} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import WorkspacesIcon from '@mui/icons-material/Workspaces'
import GroupIcon from '@mui/icons-material/Group'
import ArticleIcon from '@mui/icons-material/Article'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import LogoutIcon from '@mui/icons-material/Logout'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const navItems = [
  { label: 'Início', path: '/', icon: <HomeIcon /> },
  { label: 'Publicações', path: '/publicacoes', icon: <WorkspacesIcon /> },
  { label: 'Projetos', path: '/projetos', icon: <LogoutIcon /> },
  { label: 'Equipe', path: '/time', icon: <GroupIcon /> },
  { label: 'Notícias', path: '/noticias', icon: <ArticleIcon /> },
  { label: 'Contato', path: '/contato', icon: <ContactMailIcon /> }
]

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const isActive = (path) => location.pathname === path
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };


  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'linear-gradient(to right, #f4f6f8, #ffffff)',
        backdropFilter: 'blur(6px)',
        borderBottom: '1px solid #e0e0e0',
        py: 3,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* LOGO / TÍTULO */}
        <Typography
          onClick={() => navigate('/')}
          sx={{
            fontFamily: `'Lora', serif`,
            fontWeight: 600,
            fontSize: '1.4rem',
            letterSpacing: '-0.02em',
            color: 'primary.main',
            cursor: 'pointer',
            userSelect: 'none',
            transition: 'opacity 0.2s ease-in-out',
            '&:hover': {
              opacity: 0.8,
            },
          }}
        >
          CIRG Research group
        </Typography>
        <Button
          onClick={toggleLanguage}
          sx={{
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '0.9rem',
            minWidth: 40,
            px: 1.5,
            color: 'text.secondary',
            '&:hover': {
              color: 'primary.main',
            },
            display: { xs: 'none', md: 'inline-flex' }, // apenas no desktop
          }}
        >
          {i18n.language === 'pt' ? 'EN' : 'PT'}
        </Button>

        

        {/* DESKTOP MENU */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              onClick={() => navigate(item.path)}
              sx={{
                fontWeight: isActive(item.path) ? 600 : 400,
                fontSize: isActive(item.path) ? '1.1rem' : '1rem',
                color: isActive(item.path) ? 'primary.main' : 'text.primary',
                textTransform: 'none',
                backgroundColor: 'transparent',
                padding: 0,
                minWidth: 'auto',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* BOTÃO MENU MOBILE */}
        <IconButton
          onClick={() => setDrawerOpen(true)}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* DRAWER MOBILE MODERNO */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              width: 280,
              bgcolor: '#fefefe',
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              boxShadow: 6,
              px: 2,
              py: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 4, pl: 1, color: 'primary.main' }}>
              Menu
            </Typography>

            <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {navItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(item.path)
                      setDrawerOpen(false)
                    }}
                    sx={{
                      borderRadius: 2,
                      px: 2,
                      py: 1.5,
                      bgcolor: isActive(item.path) ? 'primary.main' : 'transparent',
                      '&:hover': {
                        bgcolor: 'primary.light',
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: isActive(item.path) ? 'text.light' : 'text.secondary' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        color: isActive(item.path) ? 'text.light' : 'text.primary',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* RODAPÉ DO MENU (opcional) */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="caption" color="text.secondary">
              © {new Date().getFullYear()} CIRG@UPE
            </Typography>
          </Box>
        </Drawer>
      </Container>
    </Box>
  )
}

export default Header
