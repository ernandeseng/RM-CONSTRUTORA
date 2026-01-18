import { Home, HardHat, Building, Wrench, GanttChart, Users, Star, ClipboardCheck, DraftingCompass, Hammer, Rocket } from 'lucide-react';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Serviços' },
  { href: '#projects', label: 'Projetos' },
  { href: '#differentials', label: 'Diferenciais' },
  { href: '#contact', label: 'Contato' },
];

export const contactInfo = {
    phones: ['(11) 97437-1642'],
    email: 'remconstrutorarm@gmail.com',
}

export const services = [
  {
    icon: Home,
    title: 'Construção Residencial',
    description: 'Construímos residências de alto padrão, personalizadas para atender às suas necessidades e sonhos.',
  },
  {
    icon: Building,
    title: 'Obras Comerciais',
    description: 'Executamos projetos comerciais com agilidade e eficiência, de lojas a grandes complexos corporativos.',
  },
  {
    icon: Wrench,
    title: 'Reformas em Geral',
    description: 'Modernizamos e revitalizamos espaços, com foco na qualidade dos acabamentos e cumprimento de prazos.',
  },
  {
    icon: GanttChart,
    title: 'Gerenciamento de Obras',
    description: 'Coordenamos todos os aspectos do seu projeto, garantindo controle de custos, qualidade e segurança.',
  },
  {
    icon: DraftingCompass,
    title: 'Projetos Estruturais',
    description: 'Desenvolvemos soluções estruturais seguras e inovadoras para os mais variados tipos de edificações.',
  },
  {
    icon: HardHat,
    title: 'Consultoria Técnica',
    description: 'Oferecemos expertise técnica para viabilizar e otimizar seu projeto desde a fase inicial.',
  }
];

export const projectCategories = ['Residencial', 'Comercial', 'Reformas'];

export const projects = [
  { id: 1, title: 'Residência Moderna', category: 'Residencial', imageId: 'project-1', description: 'Casa unifamiliar com design contemporâneo, focada em integração de ambientes e sustentabilidade.' },
  { id: 2, title: 'Edifício Corporativo', category: 'Comercial', imageId: 'project-2', description: 'Prédio comercial de 10 andares com fachada de vidro e estrutura metálica, localizado no centro da cidade.' },
  { id: 3, title: 'Renovação de Apartamento', category: 'Reformas', imageId: 'project-3', description: 'Reforma completa de apartamento, incluindo modernização de cozinha, banheiros e área social.' },
  { id: 4, title: 'Fundação Industrial', category: 'Comercial', imageId: 'project-4', description: 'Execução de fundações profundas e superestrutura para um novo galpão industrial.' },
  { id: 5, title: 'Condomínio de Luxo', category: 'Residencial', imageId: 'project-5', description: 'Construção de condomínio horizontal com 20 casas de alto padrão e área de lazer completa.' },
  { id: 6, title: 'Casa de Campo', category: 'Residencial', imageId: 'project-6', description: 'Projeto e construção de casa de campo com estilo rústico-moderno e ampla área verde.' },
];

export const differentials = [
    { icon: Star, value: 15, title: 'Anos de Experiência', description: 'Mais de uma década de atuação sólida no mercado da construção civil.'},
    { icon: ClipboardCheck, value: 200, title: 'Projetos Entregues', description: 'Centenas de projetos concluídos com sucesso e clientes satisfeitos.'},
    { icon: Users, value: 98, title: 'Satisfação Garantida', description: 'Índice de satisfação de clientes que reflete nosso compromisso.'},
    { icon: HardHat, value: 100, title: 'Segurança em Primeiro Lugar', description: 'Compromisso total com as normas de segurança em todos os canteiros.'},
];

export const testimonials = [
  { name: 'João Silva', feedback: 'A R&M superou todas as minhas expectativas. O profissionalismo e a qualidade da entrega foram impecáveis.', imageId: 'testimonial-1' },
  { name: 'Maria Oliveira', feedback: 'Equipe muito atenciosa e competente. Cuidaram de cada detalhe da minha reforma com muito cuidado. Recomendo!', imageId: 'testimonial-2' },
  { name: 'Carlos Pereira', feedback: 'Contratamos a R&M para nossa loja e o resultado foi fantástico. Cumpriram o prazo rigorosamente.', imageId: 'testimonial-3' },
];

export const workProcess = [
    { step: 1, icon: DraftingCompass, title: 'Consulta & Planejamento', description: 'Ouvimos suas ideias e necessidades para elaborar um plano detalhado e um orçamento transparente.' },
    { step: 2, icon: Hammer, title: 'Projeto & Aprovações', description: 'Desenvolvemos os projetos executivos e cuidamos de todas as aprovações legais necessárias.' },
    { step: 3, icon: GanttChart, title: 'Execução & Gerenciamento', description: 'Iniciamos a obra com gerenciamento rigoroso de cronograma, custos e qualidade.' },
    { step: 4, icon: Rocket, title: 'Entrega & Pós-Obra', description: 'Entregamos as chaves do seu sonho e oferecemos suporte total no período de pós-obra.' },
]
