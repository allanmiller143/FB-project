// src/components/Authors.jsx
import React from 'react'
import {Box,Typography,Avatar,Stack,Link } from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'

const Authors = ({ projeto }) => {
  const autores = projeto.autores_info || []

  return (
    <Stack spacing={2} mt={2}>
      {autores.map((autor, i) => (
        <Stack
          key={i}
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <Avatar
            src={autor.img}
            alt={autor.nome}
            sx={{ width: 44, height: 44 }}
          >
            {autor.nome[0].toUpperCase()}
          </Avatar>

          <Box>
            <Typography variant="body2" fontWeight={600}>
              {autor.nome}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {autor.função}
              {autor.lattes && (
                <Link
                  href={autor.lattes}
                  target="_blank"
                  rel="noopener"
                  sx={{ ml: 1, verticalAlign: 'middle' }}
                >
                  <LaunchIcon sx={{ fontSize: 16 }} />
                </Link>
              )}
            </Typography>
          </Box>
        </Stack>
      ))}
    </Stack>
  )
}

export default Authors
