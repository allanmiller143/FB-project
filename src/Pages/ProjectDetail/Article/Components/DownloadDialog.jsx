// src/components/DownloadDialog.jsx
import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from '@mui/material'

const DownloadDialog = ({ open, onClose, externalLink }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Download externo</DialogTitle>
      <DialogContent>
        <Typography variant="body2" color="text.secondary">
          Este artigo está disponível em um periódico com acesso restrito. Para acessar o conteúdo completo, você será redirecionado para o site da revista.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="text" color="inherit">
          Cancelar
        </Button>
        <Button
          href={externalLink}
          target="_blank"
          rel="noopener"
          variant="outlined"
          color="primary"
          sx={{padding:'2px 10px'}}
        >
          Acessar artigo
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DownloadDialog
