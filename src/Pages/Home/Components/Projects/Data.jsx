import AI1 from '../../../../assets/News/IA1.jpg';
import AI2 from '../../../../assets/News/IA2.jpg';
import AI3 from '../../../../assets/News/IA3.jpg';
import AI4 from '../../../../assets/News/IA4.jpg';
import AI5 from '../../../../assets/News/IA5.jpg';

import PDF1 from '../../../../assets/ProjectsPDF/projeto1.pdf'

import Autor1 from '../../../../assets/Members/Am.png'
import Autor2 from '../../../../assets/Members/Marcio.png'

export const projetosData = [
  {
    id: 'p1',
    titulo: 'Desenvolvimento de Ontologias Biomédicas para Integração de Dados Clínicos',
    descricao: 'Projeto voltado à construção e aplicação de ontologias na área da saúde, com foco em interoperabilidade semântica e inferência lógica.',
    text: 'Este projeto visa desenvolver ontologias biomédicas que permitam a integração de dados clínicos de diferentes fontes...',
    area: 'Inteligência Artificial',
    data: '2024-08-10',
    autores_info: [
      { nome: 'Allan Miller Silva Lima', lattes: 'https://lates do usuario', img: Autor1, função: 'Mestrando' },
      { nome: 'Márcio não sei de que', lattes: 'https://lates do usuario', img: Autor2, função: 'Doutorando' }
    ],
    dataInicio: '2024-02-01',
    dataFim: null,
    status: 'Em andamento',
    instituicao: 'UPE',
    autores: ['Allan M. Silva Lima', 'Marcio N.Sei de que'],
    orientador: 'Prof. Dr. Fernando Buarque',
    financiamento: 'CNPq - Edital Universal 2023',
    palavrasChave: ['ontologias', 'integração de dados', 'semântica médica', 'Outrra palavra alçeatiro', 'doença de parkindosnmd', 'iasdfisdf g sdyufg'],
    publicacoes: [
      {
        titulo: 'A Biomedical Ontology-Based System for Data Integration in Healthcare',
        revista: 'Journal of Biomedical Semantics',
        doi: 'https://doi.org/10.xxxx/jbs.2024.12345'
      }
    ],
    abstract: ` This article discusses how graphs have been used in applications that go beyond traditional uses, by analyzing three studies in different contexts. Two of them, in the healthcare domain, show how RDF graphs and ontologies help organize and standardize clinical information. The third, focused on cybersecurity, employs provenance graphs to detect anomalies based on relationships between system events. By comparing these approaches, we reflect on how graphs have been adapted to serve different purposes, highlighting their flexibility as a structure for data representation and analysis in complex domains.`,
    image: AI1,
    pdf: PDF1,
    contribuicoes: [
      'Ontologia integrada com dados clínicos reais',
      'Aplicação de técnicas de inferência lógica',
      'Mapeamento com padrões como SNOMED e ICD-10',
      'Ferramenta para padronização semântica e interoperabilidade'
    ]
  },
  {
    id: 'p2',
    titulo: 'Monitoramento de Microplásticos em Ambientes Costeiros do Nordeste Brasileiro',
    descricao: 'Mapeamento de hotspots de microplásticos e avaliação de impactos sobre a meiofauna bentônica.',
    text: 'O objetivo deste projeto é realizar o monitoramento sistemático da presença de microplásticos em praias e estuários do litoral nordestino...',
    area: 'Ciência Ambiental',
    data: '2024-07-21',
    autores_info: [
      { nome: 'Allan Miller Silva Lima', lattes: 'https://lates do usuario', img: Autor1, função: 'Mestrando' },
      { nome: 'Márcio não sei de que', lattes: 'https://lates do usuario', img: Autor2, função: 'Doutorando' }
    ],
    dataInicio: '2024-02-01',
    dataFim: null,
    status: 'Em andamento',
    instituicao: 'UPE',
    autores: ['Allan M. Silva Lima', 'Marcio N.Sei de que'],
    orientador: 'Prof. Dr. Fernando Buarque',
    financiamento: 'CNPq - Edital Universal 2023',
    palavrasChave: ['microplásticos', 'meiofauna', 'nematoides', 'ambientes costeiros'],
    publicacoes: [
      {
        titulo: 'Spatial Distribution and Ecological Effects of Microplastics in Northeast Brazilian Coastal Environments',
        revista: 'Marine Pollution Bulletin',
        doi: 'https://doi.org/10.xxxx/mpb.2024.23456'
      }
    ],
    abstract: `Este projeto tem como objetivo estudar a distribuição espacial e temporal de microplásticos em ambientes costeiros...`,
    image: AI3,
    pdf: PDF1,
    contribuicoes: [
      'Mapeamento de hotspots de microplásticos no litoral nordestino',
      'Análise ecológica da meiofauna bentônica afetada',
      'Identificação de polímeros via espectroscopia',
      'Proposta de indicadores ambientais para gestão costeira'
    ]
  },
  {
    id: 'p3',
    titulo: 'Sistema Híbrido para Prognóstico de Tuberculose Usando Dados do SINAN',
    descricao: 'Análise preditiva com modelos de aprendizado de máquina integrados a regras ontológicas.',
    text: 'Este projeto propõe o desenvolvimento de um sistema híbrido de predição do desfecho clínico de casos de tuberculose no Brasil...',
    area: 'Saúde Pública',
    data: '2024-09-03',
    autores_info: [
      { nome: 'Allan Miller Silva Lima', lattes: 'https://lates do usuario', img: Autor1, função: 'Mestrando' },
      { nome: 'Márcio não sei de que', lattes: 'https://lates do usuario', img: Autor2, função: 'Doutorando' }
    ],
    dataInicio: '2024-02-01',
    dataFim: null,
    status: 'Em andamento',
    instituicao: 'UPE',
    autores: ['Allan M. Silva Lima', 'Marcio N.Sei de que'],
    orientador: 'Prof. Dr. Fernando Buarque',
    financiamento: 'CNPq - Edital Universal 2023',
    palavrasChave: ['tuberculose', 'sistema híbrido', 'ontologias', 'SINAN'],
    publicacoes: [
      {
        titulo: 'Hybrid Predictive Modeling for Tuberculosis Outcomes Using Clinical and Semantic Features',
        revista: 'Artificial Intelligence in Medicine',
        doi: 'https://doi.org/10.xxxx/aim.2024.56789'
      }
    ],
    abstract: `O projeto desenvolve uma arquitetura baseada em aprendizado de máquina combinada com raciocínio ontológico para prever o desfecho clínico...`,
    image: AI4,
    pdf: PDF1,
    contribuicoes: [
      'Combinação de machine learning com regras ontológicas',
      'Utilização de base de dados oficial (SINAN)',
      'Análise de desfechos clínicos de forma preditiva',
      'Avaliação por testes estatísticos como Wilcoxon e Nemenyi'
    ]
  },
  {
    id: 'p4',
    titulo: 'Plataforma Visual de Apoio à Decisão Clínica com Base em Grafos e Ontologias',
    descricao: 'Visualização interativa de dados integrados para médicos e pesquisadores.',
    text: 'Este projeto tem como finalidade desenvolver uma plataforma interativa para visualização e exploração de dados clínicos estruturados em grafos RDF...',
    area: 'Engenharia Biomédica',
    data: '2024-06-14',
    autores_info: [
      { nome: 'Allan Miller Silva Lima', lattes: 'https://lates do usuario', img: Autor1, função: 'Mestrando' },
      { nome: 'Márcio não sei de que', lattes: 'https://lates do usuario', img: Autor2, função: 'Doutorando' }
    ],
    dataInicio: '2024-02-01',
    dataFim: null,
    status: 'Em andamento',
    instituicao: 'UPE',
    autores: ['Allan M. Silva Lima', 'Marcio N.Sei de que'],
    orientador: 'Prof. Dr. Fernando Buarque',
    financiamento: 'CNPq - Edital Universal 2023',
    palavrasChave: ['ontologias', 'visualização de dados', 'grafos RDF', 'decisão clínica'],
    publicacoes: [
      {
        titulo: 'A Clinical Decision Support Platform Based on Semantic Graphs and Ontologies',
        revista: 'Journal of Medical Systems',
        doi: 'https://doi.org/10.xxxx/jms.2024.98765'
      }
    ],
    abstract: `O sistema proposto permite a visualização navegável de pacientes e diagnósticos estruturados em grafos, com filtros semânticos baseados em ontologias biomédicas...`,
    image: AI2,
    pdf: PDF1,
    contribuicoes: [
      'Visualização interativa de grafos clínicos RDF',
      'Interface amigável para médicos e pesquisadores',
      'Filtros semânticos baseados em ontologias',
      'Melhoria na tomada de decisão clínica'
    ]
  },
{
  id: 'p5',
  titulo: 'Modelagem de Riscos em Infraestruturas Aeroportuárias Utilizando Redes Complexas',
  descricao: 'Aplicação de teoria de grafos para prever falhas operacionais e mitigar riscos.',
  text: 'Este estudo busca aplicar conceitos de redes complexas à análise de risco em operações aeroportuárias...',
  area: 'Engenharia de Transportes',
  data: '2024-05-22',
  autores_info: [
    { nome: 'Allan Miller Silva Lima', lattes: 'https://lates do usuario', img: Autor1, função: 'Mestrando' },
    { nome: 'Márcio não sei de que', lattes: 'https://lates do usuario', img: Autor2, função: 'Doutorando' }
  ],
  dataInicio: '2024-02-01',
  dataFim: null,
  status: 'Em andamento',
  instituicao: 'UPE',
  autores: ['Allan M. Silva Lima', 'Marcio N.Sei de que'],
  orientador: 'Prof. Dr. Fernando Buarque',
  financiamento: 'CNPq - Edital Universal 2023',
  palavrasChave: ['redes complexas', 'operações aeroportuárias', 'análise de risco', 'infraestrutura crítica'],
  publicacoes: [
    {
      titulo: 'Complex Network Modeling for Operational Risk in Airport Infrastructure',
      revista: 'Journal of Transportation Engineering',
      doi: 'https://doi.org/10.xxxx/jte.2024.54321'
    }
  ],
  abstract: `O projeto propõe um modelo baseado em redes complexas para análise de risco operacional em aeroportos regionais e internacionais. Utilizando topologia de conexões críticas e propagação de falhas, busca-se antecipar gargalos e prevenir incidentes.`,
  image: AI5,
  pdf: PDF1,
  contribuicoes: [
    'Modelagem de redes complexas aplicadas à aviação',
    'Predição de falhas com base em topologias operacionais',
    'Mapeamento de vulnerabilidades em infraestrutura crítica',
    'Ferramenta de apoio à tomada de decisão em segurança operacional'
  ]
},
{
  id: 'p6',
  titulo: 'Análise de Padrões Espaciais de Doenças Tropicais com Técnicas de Geointeligência',
  descricao: 'Integração de dados epidemiológicos e geográficos para vigilância em saúde.',
  text: 'Este projeto explora o uso de ferramentas de geointeligência para compreender a distribuição espacial de doenças tropicais no Brasil...',
  area: 'Geoprocessamento em Saúde',
  data: '2024-05-23',
  autores_info: [
    { nome: 'Allan Miller Silva Lima', lattes: 'https://lates do usuario', img: Autor1, função: 'Mestrando' },
    { nome: 'Márcio não sei de que', lattes: 'https://lates do usuario', img: Autor2, função: 'Doutorando' }
  ],
  dataInicio: '2024-02-01',
  dataFim: null,
  status: 'Em andamento',
  instituicao: 'UPE',
  autores: ['Allan M. Silva Lima', 'Marcio N.Sei de que'],
  orientador: 'Prof. Dr. Fernando Buarque',
  financiamento: 'CNPq - Edital Universal 2023',
  palavrasChave: ['geointeligência', 'doenças tropicais', 'vigilância epidemiológica', 'mapas de calor'],
  publicacoes: [
    {
      titulo: 'Geospatial Modeling of Tropical Diseases in Brazil Using Heatmap Analysis',
      revista: 'International Journal of Health Geographics',
      doi: 'https://doi.org/10.xxxx/ijhg.2024.11223'
    }
  ],
  abstract: `O projeto integra dados do SINAN com sistemas de informação geográfica (SIG) para analisar padrões de ocorrência de doenças como dengue, leishmaniose e chikungunya. Os resultados visam orientar ações estratégicas em saúde pública.`,
  image: AI3,
  pdf: PDF1,
  contribuicoes: [
    'Integração de dados geográficos e epidemiológicos',
    'Geração de mapas dinâmicos de calor',
    'Análise espacial de clusters de risco',
    'Ferramenta de apoio para vigilância em saúde'
  ]
},
{
  id: 'p7',
  titulo: 'Plataforma Visual de Apoio à Decisão Clínica com Base em Grafos e Ontologias',
  descricao: 'Visualização interativa de dados integrados para médicos e pesquisadores.',
  text: 'Este projeto tem como finalidade desenvolver uma plataforma interativa para visualização e exploração de dados clínicos estruturados em grafos RDF...',
  area: 'Engenharia Biomédica',
  data: '2024-07-02',
  autores_info: [
    { nome: 'Allan Miller Silva Lima', lattes: 'https://lates do usuario', img: Autor1, função: 'Mestrando' },
    { nome: 'Márcio não sei de que', lattes: 'https://lates do usuario', img: Autor2, função: 'Doutorando' }
  ],
  dataInicio: '2024-02-01',
  dataFim: null,
  status: 'Em andamento',
  instituicao: 'UPE',
  autores: ['Allan M. Silva Lima', 'Marcio N.Sei de que'],
  orientador: 'Prof. Dr. Fernando Buarque',
  financiamento: 'CNPq - Edital Universal 2023',
  palavrasChave: ['ontologias', 'RDF', 'interface clínica', 'representação visual'],
  publicacoes: [
    {
      titulo: 'Interactive Semantic Graph Visualization for Clinical Decision Making',
      revista: 'Computer Methods and Programs in Biomedicine',
      doi: 'https://doi.org/10.xxxx/cmpb.2024.99876'
    }
  ],
  abstract: `A plataforma visa oferecer uma interface gráfica para exploração de registros clínicos modelados em grafos semânticos. Os usuários poderão navegar entre entidades como pacientes, diagnósticos e tratamentos de forma intuitiva.`,
  image: AI2,
  pdf: PDF1,
  contribuicoes: [
    'Criação de interface gráfica baseada em grafos RDF',
    'Facilidade de uso para profissionais não técnicos',
    'Exploração visual de prontuários eletrônicos',
    'Utilização de padrões ontológicos médicos'
  ]
},
{
  id: 'p8',
  titulo: 'Desenvolvimento de Ontologias Biomédicas para Integração de Dados Clínicos',
  descricao: 'Projeto voltado à construção e aplicação de ontologias na área da saúde, com foco em interoperabilidade semântica e inferência lógica.',
  text: 'Este projeto visa desenvolver ontologias biomédicas que permitam a integração de dados clínicos de diferentes fontes...',
  area: 'Inteligência Artificial',
  data: '2024-06-30',
  autores_info: [
    { nome: 'Allan Miller Silva Lima', lattes: 'https://lates do usuario', img: Autor1, função: 'Mestrando' },
    { nome: 'Márcio não sei de que', lattes: 'https://lates do usuario', img: Autor2, função: 'Doutorando' }
  ],
  dataInicio: '2024-02-01',
  dataFim: null,
  status: 'Em andamento',
  instituicao: 'UPE',
  autores: ['Allan M. Silva Lima', 'Marcio N.Sei de que'],
  orientador: 'Prof. Dr. Fernando Buarque',
  financiamento: 'CNPq - Edital Universal 2023',
  palavrasChave: ['ontologias', 'dados clínicos', 'interoperabilidade semântica', 'inferência lógica'],
  publicacoes: [
    {
      titulo: 'Biomedical Ontologies for Standardized Data Integration in Healthcare Systems',
      revista: 'BMC Medical Informatics and Decision Making',
      doi: 'https://doi.org/10.xxxx/bmc.2024.45678'
    }
  ],
  abstract: `A pesquisa concentra-se no desenvolvimento de ontologias biomédicas customizadas para sistemas clínicos brasileiros, visando integração semântica e inferência automatizada entre dados heterogêneos.`,
  image: AI1,
  pdf: PDF1,
  contribuicoes: [
    'Desenvolvimento de ontologias específicas para o contexto brasileiro',
    'Padronização semântica de registros clínicos',
    'Integração de dados estruturados e não estruturados',
    'Aplicação de raciocínio lógico para suporte à decisão médica'
  ]
},
{
  id: 'p9',
  titulo: 'Integração de Dados Genômicos e Clínicos por Ontologias e Aprendizado de Máquina',
  descricao: 'Fusão semântica de informações clínicas com variantes genéticas para medicina personalizada.',
  text: 'Este projeto busca integrar dados genômicos e clínicos em uma estrutura comum baseada em ontologias biomédicas...',
  area: 'Genômica Computacional',
  data: '2024-06-25',
  autores_info: [
    { nome: 'Allan Miller Silva Lima', lattes: 'https://lates do usuario', img: Autor1, função: 'Mestrando' },
    { nome: 'Márcio não sei de que', lattes: 'https://lates do usuario', img: Autor2, função: 'Doutorando' }
  ],
  dataInicio: '2024-02-01',
  dataFim: null,
  status: 'Em andamento',
  instituicao: 'UPE',
  autores: ['Allan M. Silva Lima', 'Marcio N.Sei de que'],
  orientador: 'Prof. Dr. Fernando Buarque',
  financiamento: 'CNPq - Edital Universal 2023',
  palavrasChave: ['genômica', 'ontologias biomédicas', 'machine learning', 'medicina personalizada'],
  publicacoes: [
    {
      titulo: 'Semantic Integration of Genomic and Clinical Data for Personalized Medicine',
      revista: 'Briefings in Bioinformatics',
      doi: 'https://doi.org/10.xxxx/bib.2024.34567'
    }
  ],
  abstract: `A proposta combina técnicas de aprendizado de máquina com estruturação ontológica para correlacionar dados genéticos com perfis clínicos, permitindo previsões mais precisas em terapias personalizadas.`,
  image: AI4,
  pdf: PDF1,
  contribuicoes: [
    'Fusão semântica de dados clínicos e genéticos',
    'Uso de aprendizado de máquina para correlação entre variantes e sintomas',
    'Modelagem ontológica da estrutura genômica',
    'Contribuição à medicina personalizada e preditiva'
  ]
}

]
