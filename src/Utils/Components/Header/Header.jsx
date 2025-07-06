import React, { useState } from 'react'
import {Box,Container,Typography,Button,IconButton,Drawer,List,ListItem,ListItemButton,ListItemText,} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Início', path: '/' },
  { label: 'Projetos', path: '/projetos' },
  { label: 'Equipe', path: '/membros' },
  { label: 'Notícias', path: '/noticias' },
]

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'linear-gradient(to right, #f4f6f8, #ffffff)',
        backdropFilter: 'blur(6px)',
        borderBottom: '1px solid transparent',
        py: 4,
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
          Pesquisa | Prof. F. Buarque
        </Typography>

        {/* MENU DESKTOP */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              onClick={() => navigate(item.path)}
              sx={{
                fontFamily: `'IBM Plex Sans', sans-serif`,
                fontWeight: isActive(item.path) ? 600 : 400,
                fontSize: '1rem',
                color: isActive(item.path) ? 'primary.main' : 'text.primary',
                textTransform: 'none',
                backgroundColor: 'transparent',
                padding: 0,
                minWidth: 'auto',
                '&:hover': {
                  color: 'primary.main',
                  backgroundColor: 'transparent',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* MOBILE MENU */}
        <IconButton
          onClick={() => setDrawerOpen(true)}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: 260, mt: 4 }}>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton onClick={() => {
                    navigate(item.path)
                    setDrawerOpen(false)
                  }}>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontFamily: `'IBM Plex Sans', sans-serif`,
                        fontWeight: isActive(item.path) ? 600 : 400,
                        color: isActive(item.path) ? 'primary.main' : 'text.primary',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Container>
    </Box>
  )
}

export default Header
