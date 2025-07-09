// src/pages/Projetos/ProjetoDetalhado.jsx
import React, { useState } from 'react'
import { Box, Typography, Divider, IconButton, Collapse, Stack } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

const Abstract = ({ projeto }) => {
  const [expanded, setExpanded] = useState(true)

  return (
    <Box sx={{ maxWidth: 'lg', mx: 'auto', py: 3 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h5" fontWeight={600} color='primary.main'>
          Abstract
        </Typography>
        <IconButton onClick={() => setExpanded((prev) => !prev)} size="small">
          <ArrowDownwardIcon
            sx={{
              transition: 'transform 0.3s',
              transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)',
            }}
          />
        </IconButton>
      </Stack>
      <Collapse in={expanded}>
        <Typography
          variant="body1"
          sx={{ whiteSpace: 'pre-line', textAlign: 'justify' }}
        >
          {projeto.abstract}
        </Typography>
      </Collapse>

      <Divider sx={{ my: 4 }} />
    </Box>
  )
}

export default Abstract
