import React from 'react'
import {Box,Typography,Button,Container} from '@mui/material'
import TextInput from '../../../Utils/Components/Inputs/TextInput'
import {toast} from 'sonner' 

const ContactForm = () => {
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [message, setMessage] = React.useState('')

  const handleSend = () =>{
    if (!name.trim()) {
      toast.error("Por favor, digite seu nome.");
      return;
    }    
    if (!email.trim()) {
      toast.error("Por favor, digite seu email.");
      return;
    }
    if (!message.trim()) {
      toast.error("Por favor, digite uma mensagem.");
      return;
    }
    toast.success("Mensagem enviada com sucesso! (mas ainda não funciona hehe!) ->  se vc viu essa mensagem o desenvolvedor fica muito feliz, ta testando o site mesmo!!");
  }

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
          }}
        >
          {/* Formulário */}
          <Box
            sx={{
              flex: 1,
              background: 'linear-gradient(135deg, #062144, #0D3B66,rgb(75, 109, 141))',
              borderRadius: 2,
              p: 4,
              boxShadow: 3,
            }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom color='text.light'>
              Formulário de Contato
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }} color='text.secondaryLight'>
                Preencha os campos abaixo para entrar em contato conosco. Responderemos o mais breve possível.
            </Typography>
            <TextInput
              placeholder="Nome"
              value={name}
              setValue={setName}
            />
            <TextInput
              placeholder="Email"
              value={email}
              setValue={setEmail}
              sx={{ mt: 2 }}
            />
            <TextInput
              placeholder="Mensagem"
              multiline
              rows={4}
              value={message}
              setValue={setMessage}
              sx={{ mt: 2 }}
            />
            <Button
              variant="outlined"
              sx={{ textTransform: 'none', mt: 3, color: 'text.light', borderColor: 'text.light' }}
              onClick={handleSend}
            >
              Enviar
            </Button>
          </Box>

          {/* Mapa */}
          <Box
            sx={{
              flex: 1,
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Box>
                <Typography variant="h6" fontWeight={600} gutterBottom color='primary.main' sx={{ mb: 1 }}>
                    Nossa localização
                </Typography>
                <Typography variant="body2" color='text.secondary' sx={{ mb: 3 }}>
                    Rua Benfica, 455 - Madalena, Recife - PE
                </Typography>
            </Box>
            <iframe
              title="Mapa"
              src="https://maps.google.com/maps?q=Rua+Benfica+455,+Recife,+PE&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default ContactForm
