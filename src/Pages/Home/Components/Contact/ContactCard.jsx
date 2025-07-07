import { Box, CardContent, Typography, Card, Button } from "@mui/material";
import React, { useState } from "react";
import TextInput from "../../../../Utils/Components/Inputs/TextInput";
import Img from '../../../../assets/Contact.svg';
import { motion } from 'framer-motion'
import { toast } from 'sonner';

const MotionBox = motion(Box)

const ContactCard = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (!message.trim()) {
      toast.error("Por favor, digite uma mensagem.");
      return;
    }
    toast.success("Mensagem enviada com sucesso!");
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      sx={{ flex: 1 }}
    >
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          mb: 5,
          px: { xs: 2, md: 1 },
        }}
      >
        <Card
          sx={{
            background: 'linear-gradient(135deg, #062144, #0D3B66,rgb(75, 109, 141))',
            color: '#ffffff',
            borderRadius: 5,
            px: { xs: 4, md: 10 },
            py: { xs: 4, md: 2 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
          {/* Texto + Input */}
          <CardContent
            sx={{
              flex: 1,
              p: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
          variant="h5"
          sx={{
            mb: 2,
            fontSize: { xs: '1.2rem', md: '2rem' },
            fontWeight: 100,
            lineHeight: 1.1,
          }}
            >
              Quer entrar em contato com nosso time? Deixe uma mensagem agora mesmo!
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3, fontSize: { xs: '0.8rem', md: '1rem' } }}>
              Se você tiver alguma dúvida, sinta-se à vontade para entrar em contato!
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'start' }}>
              <TextInput
                label="Sua mensagem"
                value={message}
                setValue={setMessage}
                placeholder="Digite sua mensagem aqui..."
              />
              <Button
                variant="outlined"
                sx={{
                  alignSelf: 'flex-start',
                  textTransform: 'none',
                  borderRadius: 1,
                  color: '#ffffff',
                  padding: '7px 12px',
                  borderColor: '#ffffff',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: '#ffffff',
                  },
                }}
                onClick={handleSendMessage}
              >
                Enviar
              </Button>
            </Box>
          </CardContent>

          {/* Imagem */}
          <Box
            component="img"
            src={Img}
            alt="Contato"
            sx={{
              maxWidth: 300,
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: 4,
            }}
          />
        </Card>
      </Box>
    </MotionBox>
  );
};

export default ContactCard;
