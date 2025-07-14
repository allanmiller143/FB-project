import React, { useState } from 'react'
import {Box,Typography,TextField,InputAdornment,Pagination,MenuItem,Select,FormControl,InputLabel,} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import {publicationsDataEN} from '../../locales/Data/Publications/PublicationsDataEn'
import Projects from './Components/ProjectsList'
import DestaqueCard from './Components/DestaqueCard'
import PageContainer from '../../Utils/Components/Containers/PageContainer'
import { useTranslation } from 'react-i18next';

const Projetos = () => {
  const [busca, setBusca] = useState('')
  const [pagina, setPagina] = useState(1)
  const [ordenacao, setOrdenacao] = useState('mais-recentes')
  const projetosPorPagina = 8
  const projetoEmDestaque = [...publicationsDataEN].sort((a, b) => new Date(b.data) - new Date(a.data))[0]
  const { t } = useTranslation('publications');


  // Filtro por busca
  const projetosFiltrados = publicationsDataEN.filter((p) =>
    p.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    p.area.toLowerCase().includes(busca.toLowerCase()) ||
    (p.text && p.text.toLowerCase().includes(busca.toLowerCase()))
  )

  // Ordenação por data
  const projetosOrdenados = [...projetosFiltrados].sort((a, b) => {
    const dataA = new Date(a.data)
    const dataB = new Date(b.data)
    return ordenacao === 'mais-recentes' ? dataB - dataA : dataA - dataB
  })

  // Paginação
  const totalPaginas = Math.ceil(projetosOrdenados.length / projetosPorPagina)
  const projetosVisiveis = projetosOrdenados.slice(
    (pagina - 1) * projetosPorPagina,
    pagina * projetosPorPagina
  )

  const handleChangePage = (event, value) => {
    setPagina(value)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <PageContainer title="Projetos" description="Esta página é responsável por exibir todos os projetos dos alunos dos professor Fernando Burarque ">
      <Box sx={{ px: { xs: 2, md: 4 }, pt: {xs:4, md:12}, maxWidth: 'lg', mx: 'auto' }}>
        <Box sx = {{display:'flex', justifyContent:'space-between'}}>
          <Box>
            <Typography
                  sx={{
                  fontWeight: 500,
                  fontSize: { xs: '2rem', md: '3.4rem' },
                  color: 'primary.main',
                  }}
              >
              {t('publications_hero.title')}
            </Typography>

            {/* Descrição */}
            <Typography
                  variant="body1"
                  sx={{
                  fontSize: { xs: '0.8rem', md: '1.15rem' },
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  fontFamily: `'IBM Plex Sans', sans-serif`,
                  maxWidth: 600,
                  mb: {xs: 2, md: 4},
                  }}
            >
             {t('publications_hero.subtitle')}            
            </Typography>

            {/* Barra de busca e ordenação */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                alignItems: { sm: 'center' },
                justifyContent: 'start',
                mb: 5
              }}
            >
              <TextField
                placeholder={t('publications_hero.input_text')}
                size="small"
                value={busca}
                onChange={(e) => {
                  setBusca(e.target.value)
                  setPagina(1)
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="primary" />
                    </InputAdornment>
                  )
                }}
                sx={{ width: { xs: '100%', sm: 400 } }}
              />

              <FormControl size="small" sx={{ width: { xs: '100%', sm: 200 } }}>
                <InputLabel>{t('publications_hero.filter')}</InputLabel>
                <Select
                  value={ordenacao}
                  label="Ordenar por"
                  onChange={(e) => setOrdenacao(e.target.value)}
                >
                  <MenuItem value="mais-recentes">{t('publications_hero.filter_order1')}</MenuItem>
                  <MenuItem value="mais-antigos">{t('publications_hero.filter_order2')}</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <DestaqueCard projeto={projetoEmDestaque} />
        </Box>
        {/* Lista de projetos */}
        {projetosFiltrados.length > 0 ? (
          <>
            <Projects projetosData={projetosVisiveis} />
            {totalPaginas > 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Pagination
                  count={totalPaginas}
                  page={pagina}
                  onChange={handleChangePage}
                  color="primary"
                />
              </Box>
            )}
          </>
        ) : (
          <Typography variant="body2" sx={{ mt: 4, color: 'text.secondary' }}>
            Nenhum projeto encontrado com esse termo.
          </Typography>
        )}
      </Box>
    </PageContainer>
  )
}

export default Projetos
