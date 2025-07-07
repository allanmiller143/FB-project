import AI1 from '../../../../assets/News/IA1.jpg';
import AI2 from '../../../../assets/News/IA2.jpg';
import AI3 from '../../../../assets/News/IA3.jpg';
import AI4 from '../../../../assets/News/IA4.jpg';
import AI5 from '../../../../assets/News/IA5.jpg';

export const projetosData = [
  {
    id: 'p1',
    titulo: 'Desenvolvimento de Ontologias Biomédicas para Integração de Dados Clínicos',
    descricao: 'Projeto voltado à construção e aplicação de ontologias na área da saúde, com foco em interoperabilidade semântica e inferência lógica.',
    area: 'Inteligência Artificial',
    text: 'Este projeto visa desenvolver ontologias biomédicas que permitam a integração de dados clínicos de diferentes fontes, facilitando a análise e interpretação de informações complexas na área da saúde. Através do uso de técnicas de Inteligência Artificial, buscamos melhorar a interoperabilidade semântica entre sistemas e promover a inferência lógica para suporte à decisão clínica. O trabalho envolve mapeamento de bases de dados hospitalares, modelagem conceitual em OWL, e aplicação de raciocinadores para validar a consistência lógica das informações integradas.',
    image : AI1
  },
  {
    id: 'p2',
    titulo: 'Monitoramento de Microplásticos em Ambientes Costeiros do Nordeste Brasileiro',
    descricao: 'Mapeamento de hotspots de microplásticos e avaliação de impactos sobre a meiofauna bentônica.',
    area: 'Ciência Ambiental',
    text: 'O objetivo deste projeto é realizar o monitoramento sistemático da presença de microplásticos em praias e estuários do litoral nordestino, com ênfase nos estados de Pernambuco e Paraíba. A pesquisa envolve a coleta de sedimentos superficiais, caracterização morfológica e espectroscópica dos polímeros, e análise da resposta da meiofauna bentônica, em especial nematoides, à contaminação por plásticos. A abordagem adotada permite identificar hotspots de acúmulo e inferir os potenciais impactos ecológicos da poluição plástica em ecossistemas costeiros vulneráveis.',
  },
  {
    id: 'p3',
    titulo: 'Sistema Híbrido para Prognóstico de Tuberculose Usando Dados do SINAN',
    descricao: 'Análise preditiva com modelos de aprendizado de máquina integrados a regras ontológicas.',
    area: 'Saúde Pública',
    text: 'Este projeto propõe o desenvolvimento de um sistema híbrido de predição do desfecho clínico de casos de tuberculose no Brasil, a partir da base de dados nacional do SINAN. A arquitetura do sistema combina algoritmos de aprendizado de máquina (como árvores de decisão, XGBoost e KNN) com regras semânticas derivadas de ontologias biomédicas. Após o pré-processamento e balanceamento dos dados, os modelos são treinados e avaliados com múltiplas execuções e testes estatísticos. A proposta visa oferecer suporte ao planejamento de políticas públicas e intervenções mais precisas no tratamento da doença.',
  },
  {
    id: 'p4',
    titulo: 'Plataforma Visual de Apoio à Decisão Clínica com Base em Grafos e Ontologias',
    descricao: 'Visualização interativa de dados integrados para médicos e pesquisadores.',
    area: 'Engenharia Biomédica',
    text: 'Este projeto tem como finalidade desenvolver uma plataforma interativa para visualização e exploração de dados clínicos estruturados em grafos RDF, utilizando ontologias como base para a organização semântica. A ferramenta permitirá que médicos e pesquisadores naveguem por relações entre diagnósticos, sintomas, tratamentos e histórico do paciente de forma visual e intuitiva. O sistema também incorpora funcionalidades de inferência lógica e filtros baseados em SPARQL, promovendo uma nova experiência de análise clínica orientada ao conhecimento.',
    image : AI2
  },
  {
    id: 'p5',
    titulo: 'Modelagem de Riscos em Infraestruturas Aeroportuárias Utilizando Redes Complexas',
    descricao: 'Aplicação de teoria de grafos para prever falhas operacionais e mitigar riscos.',
    area: 'Engenharia de Transportes',
    text: 'Este estudo busca aplicar conceitos de redes complexas à análise de risco em operações aeroportuárias, modelando fluxos de aeronaves, interações entre sistemas e eventos críticos em estruturas gráficas. A proposta é identificar padrões que antecedem falhas ou incidentes, permitindo o desenvolvimento de métricas de vulnerabilidade estrutural e sugestões de mitigação. O projeto combina dados operacionais reais com simulações de cenários de stress, contribuindo para a segurança, eficiência e resiliência do setor aeroportuário brasileiro.',
  }
]
