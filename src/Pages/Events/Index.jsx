// src/components/EventCalendar.jsx
import React, { useState } from 'react'
import {
  Box, Typography, Grid, Paper, List, ListItem, ListItemText, Divider, Badge
} from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import { PickersDay } from '@mui/x-date-pickers/PickersDay'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'

// Lista de eventos
const mockEvents = [
  {
    id: 1,
    title: 'Apresentação de projeto do grupo',
    date: '2025-07-12',
    time: '14:00',
    location: 'Auditório Central',
    description: 'Apresentação do sistema híbrido para detecção de Parkinson.'
  },
  {
    id: 2,
    title: 'Reunião com orientador',
    date: '2025-07-13',
    time: '09:00',
    location: 'Sala 204',
    description: 'Alinhamento do capítulo experimental do mestrado.'
  },
  {
    id: 3,
    title: 'Workshop de Ontologias Biomédicas',
    date: '2025-07-13',
    time: '15:30',
    location: 'Google Meet',
    description: 'Participação no workshop de modelagem semântica e mapeamento com SNOMED.'
  },
  {
    id: 4,
    title: 'Hackathon de IA para Saúde',
    date: '2025-07-15',
    time: '08:00',
    location: 'UPE - Bloco G',
    description: 'Competição em equipe com foco em soluções para doenças infecciosas.'
  },
]

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs())

  const filteredEvents = mockEvents.filter(
    (event) => dayjs(event.date).isSame(selectedDate, 'day')
  )

  const eventsThisMonth = mockEvents.filter(
    (event) => dayjs(event.date).isSame(selectedDate, 'month')
  )

  const renderDay = (day, _value, pickersDayProps) => {
    const hasEvent = mockEvents.some(event =>
      dayjs(event.date).isSame(day, 'day')
    )

    return (
      <Badge
        key={day.toString()}
        overlap="circular"
        color="primary"
        variant={hasEvent ? 'dot' : 'standard'}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <PickersDay {...pickersDayProps} />
      </Badge>
    )
  }

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h5" fontWeight={600} color="primary.main" sx={{ mb: 3 }}>
        Calendário de Eventos
      </Typography>

      <Grid container spacing={4}>
        {/* CALENDÁRIO */}
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ borderRadius: 2, p: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                renderDay={renderDay}
              />
            </LocalizationProvider>
          </Paper>
        </Grid>

        {/* EVENTOS DO DIA */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ borderRadius: 2, p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Eventos para o dia {selectedDate.format('DD/MM/YYYY')}
            </Typography>
            <List>
              {filteredEvents.length === 0 && (
                <Typography variant="body2" color="text.secondary">
                  Nenhum evento encontrado para esta data.
                </Typography>
              )}
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ListItem alignItems="flex-start" sx={{ mb: 1 }}>
                    <ListItemText
                      primary={event.title}
                      secondary={
                        <>
                          <Typography variant="body2" color="text.secondary">
                            🕒 {event.time}  |  📍 {event.location}
                          </Typography>
                          <Typography variant="body2" sx={{ mt: 0.5 }}>
                            {event.description}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  <Divider />
                </motion.div>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* EVENTOS DO MÊS */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ borderRadius: 2, p: 3, mt: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Eventos do mês de {selectedDate.format('MMMM [de] YYYY')}
            </Typography>
            <List>
              {eventsThisMonth.map((event) => (
                <ListItem key={event.id}>
                  <ListItemText
                    primary={`${dayjs(event.date).format('DD/MM')} - ${event.title}`}
                    secondary={
                      <>
                        <Typography variant="body2" color="text.secondary">
                          🕒 {event.time}  |  📍 {event.location}
                        </Typography>
                        <Typography variant="body2">
                          {event.description}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default EventCalendar
