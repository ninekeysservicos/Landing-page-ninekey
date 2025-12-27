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
export function buildWhatsappUrl(message = LINKS.whatsappMessage) {
    const encoded = encodeURIComponent(message);
    return `${LINKS.whatsappBaseUrl}${LINKS.whatsappNumber}?text=${encoded}`;
}
// Método Section Content
export const METHOD_CONTENT = {
    title: "Um método completo, estruturado em 9 pontos-chave",
    intro: "A NineKeys opera imóveis por meio de um método próprio, conectando estratégia, execução e experiência do hóspede. Os pontos-chave podem ser contratados de forma integrada ou modular, conforme a necessidade do imóvel."
};
export const METHOD_POINTS = [
    {
        id: "ponto-1",
        title: "Análise Estratégica do Imóvel",
        summary: "Avaliação completa do potencial do imóvel para locação de curta duração.",
        description: "Avaliação estratégica baseada em dados de localização, tamanho e custos operacionais, utilizando o histórico e a inteligência do portfólio NineKeys para determinar competitividade e potencial.",
        image: "/assets/ponto-1.png"
    },
    {
        id: "ponto-2",
        title: "Projeto de Adequação (3D)",
        summary: "Projeto visual em 3D mostrando o potencial completo do espaço.",
        description: "Desenvolvimento de projeto de adequação em 3D, focado no menor investimento necessário para tornar o imóvel mais atrativo e rentável, priorizando eficiência operacional e geração de valor para os futuros hóspedes.",
        image: "/assets/ponto-2.png"
    },
    {
        id: "ponto-3",
        title: "Reforma, Mobiliário e Layout",
        summary: "Transformação física do espaço com mobília e acabamentos premium.",
        description: "Execução das adequações físicas e definição de mobiliário e layout, com foco em eficiência operacional, conforto do hóspede e otimização de espaço, sempre orientadas à rentabilidade e durabilidade da operação.",
        image: "/assets/ponto-3.png"
    },
    {
        id: "ponto-4",
        title: "Enxoval e Padronização",
        summary: "Enxoval completo e padronizado para experiência consistente.",
        description: "Aquisição e definição do enxoval completo, com especificação dos itens, quantidades corretas e padrão mínimo de qualidade, visando oferecer uma experiência consistente ao hóspede. As decisões consideram impacto direto em limpeza, manutenção e eficiência operacional.",
        image: "/assets/ponto-4.png"
    },
    {
        id: "ponto-5",
        title: "Conteúdo e Anúncio",
        summary: "Fotos profissionais e anúncios otimizados para conversão.",
        description: "Criação e otimização do conteúdo do anúncio, com foco em apresentação clara e eficiente nas plataformas. Destaque estratégico para diferenciais do imóvel, áreas comuns e localização, utilizando fotografia adequada para maximizar conversão e performance.",
        image: "/assets/ponto-5.png"
    },
    {
        id: "ponto-6",
        title: "Gestão das Plataformas",
        summary: "Gestão ativa em Airbnb, Booking e outras plataformas.",
        description: "Gestão ativa das plataformas de locação, incluindo controle de reservas e calendário, com foco na performance diária do imóvel. Utilização de inteligência de preço, análise de sazonalidade e estratégias promocionais para maximizar ocupação e reduzir vacância.",
        image: "/assets/ponto-6.png"
    },
    {
        id: "ponto-7",
        title: "Atendimento ao Hóspede",
        summary: "Atendimento profissional do check-in ao check-out.",
        description: "Comunicação fluida, simples e efetiva antes, durante e após a estadia, com gestão atenta de situações cotidianas e exceções. Atenção e prontidão garantem boas avaliações, maior rentabilidade e redução da vacância ao longo do tempo.",
        image: "/assets/ponto-7.png"
    },
    {
        id: "ponto-8",
        title: "Limpeza e Manutenção",
        summary: "Limpeza profunda e manutenção preventiva constante.",
        description: "Execução de limpeza e manutenção com padrão operacional contínuo, respeitando intervalo médio de até 3 horas entre check-out e check-in. Diferente do que muitos imaginam, a manutenção recorrente e o cuidado diário mantêm o imóvel sempre conservado e com aspecto de novo — ao contrário da locação de longa duração, onde o desgaste se acumula. Etapa crucial para boas avaliações e longevidade do patrimônio.",
        image: "/assets/ponto-8.png"
    },
    {
        id: "ponto-9",
        title: "Gestão Contínua e Evolução",
        summary: "Monitoramento contínuo e melhoria baseada em dados.",
        description: "Acompanhamento permanente da operação, com melhorias contínuas baseadas em dados, aprendizados do portfólio e tendências globais, garantindo que os imóveis evoluam junto com a NineKeys.",
        image: "/assets/ponto-9.png"
    }
];
// Cases Section Content
export const CASES_CONTENT = {
    title: "Casos reais. Resultados concretos.",
    subtitle: "Proprietários que confiaram na NineKeys e transformaram seus imóveis em ativos rentáveis, bem cuidados e valorizados.",
    cta: "Ver mais cases"
};
export const CASES = [
    {
        id: "case-1",
        title: "Residência Contemporânea Premium",
        location: "São Paulo - SP",
        description: "Arquitetura limpa e contemporânea com materiais nobres. Concreto aparente, vidro e madeira natural criam uma atmosfera sofisticada. Iluminação estratégica realça cada detalhe ao anoitecer.",
        results: [
            "Ocupação média de 92% nos últimos 12 meses",
            "Avaliação 4.9/5.0 com destaque para design",
            "Hóspedes corporativos e executivos recorrentes",
            "Valorização de 18% no primeiro ano"
        ],
        videoUrl: "/assets/case1.mp4"
    },
    {
        id: "case-2",
        title: "Apartamento Urban Vista",
        location: "São Paulo - SP",
        description: "Varanda moderna com vista privilegiada e iluminação urbana ao fundo. Ambiente acolhedor com toques de elegância discreta. Perfeito para quem busca sofisticação e tranquilidade.",
        results: [
            "Taxa de ocupação estável em 88%",
            "Experiência noturna valorizada pelos hóspedes",
            "Gestão profissional sem intercorrências",
            "Renovação contínua de mobiliário e enxoval"
        ],
        videoUrl: "/assets/case2.mp4"
    },
    {
        id: "case-3",
        title: "Edifício Boutique Moderno",
        location: "São Paulo - SP",
        description: "Arquitetura contemporânea de 4 andares com fachada em concreto e vidro. Iluminação quente e acolhedora valoriza o projeto. Localização estratégica com atmosfera exclusiva.",
        results: [
            "Ocupação média de 85% em área nobre",
            "Portfólio diversificado de hóspedes",
            "Manutenção preventiva e imóvel sempre impecável",
            "Evolução contínua de performance"
        ],
        videoUrl: "/assets/case3.mp4"
    },
    {
        id: "case-4",
        title: "Beach House Infinity",
        location: "Litoral - SP",
        description: "Casa de luxo à beira-mar com piscina infinita e vista panorâmica para o oceano. Arquitetura contemporânea em harmonia com a natureza. Luz natural e design sofisticado criam experiência inesquecível.",
        results: [
            "Ocupação sazonal otimizada em 94%",
            "Precificação premium justificada pela experiência",
            "Hóspedes celebram eventos especiais e retornam",
            "Posicionamento de destaque nas plataformas"
        ],
        videoUrl: "/assets/case4.mp4"
    },
    {
        id: "case-5",
        title: "Refúgio Minimalista Praia",
        location: "Litoral - SP",
        description: "Design minimalista com paleta neutra e elegância discreta. Integração perfeita entre interior e paisagem costeira. Atmosfera serena que convida ao descanso e contemplação.",
        results: [
            "Ocupação de 87% focada em alta temporada",
            "Público que valoriza design e tranquilidade",
            "Operação remota eficiente e sem falhas",
            "Rentabilidade acima da média da região"
        ],
        videoUrl: "/assets/case5.mp4"
    },
    {
        id: "case-6",
        title: "Villa Tropical Contemporânea",
        location: "Litoral - SP",
        description: "Fusão perfeita entre luxo contemporâneo e natureza tropical. Piscina de borda infinita com vista para o mar. Palmeiras emolduram a arquitetura elegante em dia ensolarado.",
        results: [
            "Taxa de ocupação premium de 91%",
            "Estratégia de precificação dinâmica otimizada",
            "Experiência cinco estrelas reconhecida por hóspedes",
            "Imóvel referência em gestão profissional"
        ],
        videoUrl: "/assets/case6.mp4"
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
