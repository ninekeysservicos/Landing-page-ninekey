/**
 * NineKeys Landing Page - Content Configuration
 *
 * Centralized content management for all text displayed on the site.
 * Copy sourced from product-details/UX_COPY.md
 */

// Hero Section Content
export const CONTENT = {
  hero: {
    h1: "NineKeys",
    h2: "Onde imóveis viram resultado.",
    subheadline: "Gestão profissional de imóveis, da estratégia à operação diária.",
    ctaPrimary: "Avaliar meu imóvel",
    ctaSecondary: "Falar com a NineKeys"
  }
};

// External Links and Integrations
export const LINKS = {
  whatsappNumber: "5511921472102", // Format: country code + area code + number (no spaces)
  whatsappMessage: "Olá, gostaria de avaliar o meu imóvel",
  whatsappBaseUrl: "https://wa.me/"
};

/**
 * Build a WhatsApp URL with pre-filled message
 * @param message - Message to pre-fill (will be URL-encoded)
 * @returns Complete WhatsApp URL
 */
export function buildWhatsappUrl(message: string = LINKS.whatsappMessage): string {
  const encoded = encodeURIComponent(message);
  return `${LINKS.whatsappBaseUrl}${LINKS.whatsappNumber}?text=${encoded}`;
}

// Método Section Content
export const METHOD_CONTENT = {
  title: "Um método completo, estruturado em 9 pontos-chave",
  intro: "A NineKeys opera imóveis por meio de um método próprio, conectando estratégia, execução e experiência do hóspede. Os pontos-chave podem ser contratados de forma integrada ou modular, conforme a necessidade do imóvel."
};

export interface MethodPoint {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
}

export const METHOD_POINTS: MethodPoint[] = [
  {
    id: "ponto-1",
    title: "Análise Estratégica do Imóvel",
    summary: "Avaliação completa do potencial do imóvel para locação de curta duração.",
    description: "Realizamos uma análise detalhada do imóvel, considerando localização, público-alvo, concorrência e potencial de rentabilidade. Definimos a estratégia ideal de posicionamento e precificação para maximizar resultados.",
    image: "/assets/ponto-1.png"
  },
  {
    id: "ponto-2",
    title: "Projeto de Adequação (3D)",
    summary: "Projeto visual em 3D mostrando o potencial completo do espaço.",
    description: "Desenvolvemos um projeto de adequação em 3D que permite visualizar o imóvel totalmente transformado antes de iniciar qualquer obra. Planejamos cada detalhe para criar um espaço que encanta hóspedes e maximiza ocupação.",
    image: "/assets/ponto-2.png"
  },
  {
    id: "ponto-3",
    title: "Reforma, Mobiliário e Layout",
    summary: "Transformação física do espaço com mobília e acabamentos premium.",
    description: "Executamos a reforma completa com gestão de fornecedores, cronograma e qualidade. Fornecemos mobiliário, decoração e layout pensados para funcionalidade e experiência do hóspede.",
    image: "/assets/ponto-3.png"
  },
  {
    id: "ponto-4",
    title: "Enxoval e Padronização",
    summary: "Enxoval completo e padronizado para experiência consistente.",
    description: "Fornecemos enxoval completo (roupas de cama, banho, utensílios de cozinha) com padrão definido e reposição garantida. Cada item é escolhido para transmitir qualidade e cuidado.",
    image: "/assets/ponto-4.png"
  },
  {
    id: "ponto-5",
    title: "Conteúdo e Anúncio",
    summary: "Fotos profissionais e anúncios otimizados para conversão.",
    description: "Produzimos fotos e vídeos profissionais que destacam o imóvel. Criamos anúncios com copy persuasivo e otimizado para SEO nas principais plataformas de locação.",
    image: "/assets/ponto-5.png"
  },
  {
    id: "ponto-6",
    title: "Gestão das Plataformas",
    summary: "Gestão ativa em Airbnb, Booking e outras plataformas.",
    description: "Gerenciamos calendários, precificação dinâmica, comunicação com hóspedes e otimização de anúncios. Monitoramos avaliações e ajustamos estratégias para manter alta taxa de ocupação.",
    image: "/assets/ponto-6.png"
  },
  {
    id: "ponto-7",
    title: "Atendimento ao Hóspede",
    summary: "Atendimento profissional do check-in ao check-out.",
    description: "Oferecemos atendimento completo: comunicação pré-chegada, check-in e check-out, suporte durante a estadia e resolução de problemas. Garantimos experiência premium em todos os pontos de contato.",
    image: "/assets/ponto-7.png"
  },
  {
    id: "ponto-8",
    title: "Limpeza e Manutenção",
    summary: "Limpeza profunda e manutenção preventiva constante.",
    description: "Realizamos limpeza profissional entre estadias com checklist rigoroso. Fazemos manutenção preventiva e corretiva, garantindo que o imóvel esteja sempre impecável e funcionando perfeitamente.",
    image: "/assets/ponto-8.png"
  },
  {
    id: "ponto-9",
    title: "Gestão Contínua e Evolução",
    summary: "Monitoramento contínuo e melhoria baseada em dados.",
    description: "Acompanhamos métricas de ocupação, receita e satisfação. Implementamos melhorias contínuas baseadas em feedback e dados, garantindo que o imóvel evolua e mantenha alta performance.",
    image: "/assets/ponto-9.png"
  }
];

// Cases Section Content
export const CASES_CONTENT = {
  title: "Casos reais. Resultados concretos.",
  subtitle: "Proprietários que confiaram na NineKeys e transformaram seus imóveis em ativos rentáveis, bem cuidados e valorizados.",
  cta: "Ver mais cases"
};

export interface Case {
  id: string;
  title: string;
  beforeText: string;
  afterText: string;
  results: string[];
  videoEmbedUrl: string;
  beforeImage: string;
  afterImage: string;
}

export const CASES: Case[] = [
  {
    id: "case-1",
    title: "Apartamento Jardins - SP",
    beforeText: "Imóvel ocioso, sem retorno e com manutenção irregular",
    afterText: "Taxa de ocupação 85%, receita previsível e imóvel sempre impecável",
    results: [
      "Imóvel sempre bem cuidado e padronizado",
      "Experiência consistente para o hóspede",
      "Operação profissional e sem dor de cabeça",
      "Evolução contínua da performance"
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    beforeImage: "/cases/case-1-before.jpg",
    afterImage: "/cases/case-1-after.jpg"
  },
  {
    id: "case-2",
    title: "Cobertura Vila Madalena - SP",
    beforeText: "Reformado mas sem identidade, anúncios desorganizados",
    afterText: "Marca forte, fotos profissionais, avaliações 5 estrelas",
    results: [
      "Imóvel sempre bem cuidado e padronizado",
      "Experiência consistente para o hóspede",
      "Operação profissional e sem dor de cabeça",
      "Evolução contínua da performance"
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    beforeImage: "/cases/case-2-before.jpg",
    afterImage: "/cases/case-2-after.jpg"
  },
  {
    id: "case-3",
    title: "Studio Pinheiros - SP",
    beforeText: "Baixa ocupação, reclamações frequentes, gestão desorganizada",
    afterText: "Ocupação máxima, hóspedes satisfeitos, gestão profissional",
    results: [
      "Imóvel sempre bem cuidado e padronizado",
      "Experiência consistente para o hóspede",
      "Operação profissional e sem dor de cabeça",
      "Evolução contínua da performance"
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    beforeImage: "/cases/case-3-before.jpg",
    afterImage: "/cases/case-3-after.jpg"
  }
];

// Manifesto Section Content
export const MANIFESTO_CONTENT = {
  title: "Muito mais do que gestão de imóveis",
  paragraphs: [
    "Na NineKeys, acreditamos que cada chave abre mais do que uma porta.\nEla abre possibilidades.\nPossibilidades de retorno para quem investe.\nPossibilidades de descanso para quem se hospeda.\nPossibilidades de confiança para quem não quer se preocupar.",
    "Sabemos que um imóvel vazio é um patrimônio que não cumpre todo o seu potencial. Por isso, criamos uma forma simples e premium de transformar cada apartamento em uma experiência inesquecível para hóspedes — e em uma fonte de receita previsível e consistente para proprietários.",
    "Atuamos com método, processo e visão de longo prazo.",
    "Cuidamos de tudo: da limpeza à manutenção, da gestão da ocupação às avaliações nas plataformas. Assim, você não precisa estar presente para ter a certeza de que seu imóvel está rendendo, sendo bem cuidado e evoluindo ao longo do tempo.",
    "A NineKeys opera imóveis de forma profissional, estruturada em 9 pontos-chave que conectam estratégia, execução e experiência.",
    "NineKeys é mais do que gestão de imóveis.\nÉ a chave para transformar patrimônio em experiência,\nsegurança em tranquilidade,\ne imóveis em resultados."
  ]
};

// Contact Section Content
export const CONTACT_CONTENT = {
  title: "Pronto para transformar seu imóvel em resultado?",
  text: "Conte-nos sobre o seu imóvel. Avaliamos e indicamos o melhor caminho.",
  ctaWhatsapp: "Falar com a NineKeys",
  formLabels: {
    name: "Nome",
    email: "E-mail",
    phone: "Telefone",
    city: "Cidade do imóvel"
  },
  formMessages: {
    submit: "Enviar",
    success: "Obrigado. Recebemos suas informações.",
    error: "Não foi possível enviar. Tente novamente ou fale conosco no WhatsApp."
  }
};

// Form Submission Endpoint
// IMPORTANT: Replace with your actual form provider endpoint
// Example providers: Formspree (https://formspree.io), Formspark, Basin
// Formspree example: https://formspree.io/f/YOUR_FORM_ID
export const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

// Footer Content
export const FOOTER_CONTENT = {
  tagline: "NineKeys — Onde imóveis viram resultado.",
  email: "contato@ninekeys.com.br",
  phone: "+55 (11) 92147-2102",
  privacy: "Política de Privacidade",
  copyright: "© NineKeys — Todos os direitos reservados"
};
