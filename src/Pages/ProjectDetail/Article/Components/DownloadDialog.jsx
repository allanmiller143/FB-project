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
import { useTranslation } from 'react-i18next';

const DownloadDialog = ({ open, onClose, externalLink }) => {
  const { t } = useTranslation('publication_detail');
  
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{t('publication_dialog.title')} </DialogTitle>
      <DialogContent>
        <Typography variant="body2" color="text.secondary">
          {t('publication_dialog.subtitle')}   
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="text" color="inherit">
          {t('publication_dialog.cancel_button')} 
        </Button>
        <Button
          href={externalLink}
          target="_blank"
          rel="noopener"
          variant="outlined"
          color="primary"
          sx={{padding:'2px 10px'}}
        >
          {t('publication_dialog.access_button')} 
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DownloadDialog
