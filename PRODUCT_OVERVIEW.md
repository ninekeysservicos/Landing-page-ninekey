# NineKeys — Landing Page Institucional

**Versão**: 1.0.0  
**Última atualização**: 2025-12-26  
**Status**: Em desenvolvimento

---

## 📋 Visão Geral

A landing page institucional da NineKeys é um site one-page estático, em HTML, CSS e TypeScript vanilla, voltado para credibilidade, prova de método e conversão leve via WhatsApp e formulário. O produto apresenta o método proprietário da empresa, evidencia casos reais e guia proprietários de imóveis ao contato com a NineKeys.

O site terá estrutura mobile-first, com uma narrativa clara: posicionamento (hero), método (9 pontos-chave), prova social (cases), manifesto institucional e contato. O objetivo é aumentar a taxa de contato qualificado sem promessas exageradas, com tom premium, profissional e operacional.

A solução é pensada para alto desempenho e baixo custo de hospedagem (plano básico da Hostinger), com SEO técnico de base (H1 único, H2 por seção, meta tags e alt text). Não há backend próprio; integrações externas são limitadas ao WhatsApp e ao serviço de envio do formulário por e-mail.

---

## 🎯 Proposta de Valor

### Para proprietários de imóveis
- **Credibilidade imediata**: apresentação objetiva do método NineKeys em 9 pontos-chave, transmitindo profissionalismo e profundidade operacional.
- **Prova social clara**: cases com vídeo, antes/depois e resultados qualitativos reforçam confiança sem expor números sensíveis.
- **Conversão simples**: contato rápido via WhatsApp e formulário direto para o e-mail oficial.

### Para a NineKeys (negócio)
- **Aquisição orgânica**: base sólida de SEO para posicionamento orgânico sem dependência de mídia paga.
- **Baixo custo operacional**: site estático, fácil de hospedar e manter, com foco em performance.
- **Manutenção facilitada**: conteúdo organizado e documentado para atualizações futuras por qualquer profissional.

---

## 👥 Público-Alvo

### Proprietário de imóvel para locação de curta duração
- **Perfil**: adulto de classe média/alta, investidor ou proprietário de apartamento em capitais e regiões turísticas.
- **Dores**: dificuldade de operar e manter o imóvel com padrão alto; falta de tempo; baixa previsibilidade de receita.
- **Motivações**: delegar operação com segurança, maximizar rentabilidade e preservar o patrimônio.
- **Comportamentos**: pesquisa referências antes de contratar; valoriza profissionalismo e prova social.

### Investidor em imóveis (perfil secundário)
- **Perfil**: investidor que busca retorno recorrente e previsível.
- **Dores**: ineficiência na operação, custos altos e vacância.
- **Motivações**: solução completa e estruturada com método validado.
- **Comportamentos**: compara fornecedores e busca diferenciais operacionais.

---

## 💼 Modelo de Negócio

Produto entregue como projeto fechado de desenvolvimento de site institucional, com milestones e valor total definido em contrato. Não há cobrança recorrente do produto em si; manutenção futura é opcional.

### Planos de Contratação (milestones do projeto)

#### Milestone 1 — Início do projeto
- **Preço**: R$ 250 + US$ 10 (Midjourney)
- **Escopo**:
  - Início do desenvolvimento
  - Geração de imagens conceituais
  - Estrutura base do site

#### Milestone 2 — Produção do site
- **Preço**: R$ 350
- **Escopo**:
  - Desenvolvimento completo das seções
  - Responsividade
  - Integrações de WhatsApp e formulário

#### Milestone 3 — SEO avançado + feedback
- **Preço**: R$ 250
- **Escopo**:
  - Implementação de SEO avançado
  - Entrega para revisão
  - Coleta de feedback

#### Milestone 4 — Ajustes finais e entrega
- **Preço**: R$ 150
- **Escopo**:
  - Aplicação das alterações finais
  - Cadastro da hospedagem
  - Vinculação do domínio
  - Publicação do site

### Plano de Manutenção (opcional)
- **R$ 200** — validade 3 meses
- **R$ 300** — validade 6 meses
- **Inclui**: correção de bugs, atualização de imagens e vídeos, pequenas alterações de layout e texto, suporte pontual e 1 página adicional para mais cases.

### Processamento de Pagamentos
- **Forma**: definido entre cliente e fornecedor (ex.: PIX ou transferência).
- **Ciclo**: pagamento por milestone.

---

## 🏗️ Arquitetura de Alto Nível

### Componentes Principais
- **Landing Page One-Page**: estrutura principal com as seções do briefing.
- **Camada de Conteúdo**: textos, imagens e vídeos configuráveis no código fonte.
- **Integrações Externas**: links do WhatsApp e serviço de envio do formulário.
- **Infraestrutura de Hospedagem**: deploy estático em Hostinger; domínio principal com canonical e redirecionamento 301 do domínio secundário.

### Fluxos Críticos
1. **Contato via WhatsApp**: usuário clica em CTA → abre WhatsApp com mensagem pré-preenchida → inicia contato.
2. **Envio do formulário**: usuário preenche dados → serviço externo envia e-mail para `contato@ninekeys.com.br` → equipe recebe lead.
3. **Consumo de conteúdo**: usuário percorre hero → método → cases → manifesto → contato, com navegação fluida e responsiva.

---

## ⚙️ Funcionalidades Core

### Hero com CTAs
**Descrição**: apresenta posicionamento e direciona para contato imediato.

**Fluxo de uso**:
1. Usuário acessa o site.
2. Visualiza headline e subheadline.
3. Clica em um dos CTAs de WhatsApp.

**Regras de negócio**:
- CTA “Avaliar meu imóvel” deve abrir WhatsApp com mensagem pré-preenchida.
- CTA “Falar com a NineKeys” abre WhatsApp sem mensagem ou com texto padrão.

**Entrada**: clique do usuário.  
**Saída**: abertura do WhatsApp com link `wa.me`.

### Método NineKeys (9 pontos-chave)
**Descrição**: apresenta os 9 pontos do método com foco em clareza e profundidade operacional.

**Fluxo de uso**:
1. Usuário lê o resumo do método.
2. No desktop, navega no grid 3×3.
3. No mobile, abre e fecha itens em accordion.

**Regras de negócio**:
- Desktop: grid com título curto; botão “ver mais” exibe texto completo.
- Mobile: accordion por item com texto completo.

**Entrada**: interação com cartões/accordion.  
**Saída**: conteúdo expandido do ponto selecionado.

### Cases de Sucesso
**Descrição**: prova social com vídeos e antes/depois.

**Fluxo de uso**:
1. Usuário navega pelo carrossel com até 3 cases.
2. Visualiza vídeo embutido e imagens antes/depois.
3. Lê resultados qualitativos.

**Regras de negócio**:
- Vídeos devem carregar com lazy load.
- Resultados apresentados sem números sensíveis.

**Entrada**: navegação no carrossel.  
**Saída**: visualização dos cases.

### Manifesto Institucional
**Descrição**: reforça valores e posicionamento da marca.

**Fluxo de uso**:
1. Usuário lê o texto completo.
2. Consolida entendimento da proposta da NineKeys.

**Regras de negócio**:
- Texto fiel ao briefing.

**Entrada**: leitura.  
**Saída**: compreensão do posicionamento da marca.

### Contato (WhatsApp + Formulário)
**Descrição**: conversão final por WhatsApp e formulário.

**Fluxo de uso**:
1. Usuário clica no CTA de WhatsApp ou preenche o formulário.
2. Envio do formulário para o e-mail oficial.

**Regras de negócio**:
- Campos obrigatórios: Nome, E-mail, Telefone, Cidade do imóvel.
- Destino: `contato@ninekeys.com.br`.

**Entrada**: dados do usuário.  
**Saída**: envio para o e-mail da empresa.

### SEO Básico e Performance
**Descrição**: estrutura preparada para indexação e performance.

**Fluxo de uso**:
1. HTML com H1 único e H2 por seção.
2. Meta title, description e alt text em imagens.
3. Imagens otimizadas e vídeos com lazy load.

**Regras de negócio**:
- Canonical no domínio principal `ninekeys.com.br`.
- Domínio `9keys.com.br` com redirecionamento 301.

**Entrada**: renderização do site.  
**Saída**: performance estável e indexação adequada.

---

## 🔗 Integrações Externas

### WhatsApp
- **Provedor**: WhatsApp
- **Finalidade**: contato direto via CTA e botão flutuante.
- **Tipo**: link direto
- **Autenticação**: não aplicável
- **Dados consumidos**: número `+55 (11) 92147-2102`
- **Dados enviados**: mensagem pré-preenchida
- **Rate limits**: não aplicável
- **Fallbacks**: exibir número no footer para contato manual

### Serviço de envio de formulário (a definir)
- **Provedor**: serviço externo de envio de e-mail (ex.: Formspree ou similar)
- **Finalidade**: enviar dados do formulário para `contato@ninekeys.com.br`
- **Tipo**: API/endpoint HTTP
- **Autenticação**: token ou endpoint protegido pelo provedor
- **Dados enviados**: nome, e-mail, telefone, cidade do imóvel
- **Rate limits**: conforme provedor
- **Fallbacks**: instruir contato via WhatsApp se falhar

### Hospedagem e domínio
- **Provedor**: Hostinger (plano básico)
- **Finalidade**: deploy do site estático
- **Tipo**: hospedagem de arquivos estáticos
- **Regras**: canonical no domínio principal; redirecionamento 301 do domínio secundário

---

## 📊 Métricas de Sucesso

### Métricas de Negócio
- **Taxa de clique nos CTAs de WhatsApp**: meta ≥ 3% das visitas
- **Envios do formulário**: meta ≥ 1% das visitas

### Métricas de Produto
- **Scroll depth (75%)**: meta ≥ 60% das sessões
- **Taxa de rejeição**: meta ≤ 50%

### Métricas Técnicas
- **Core Web Vitals (LCP)**: meta ≤ 2.5s
- **Uptime**: meta ≥ 99.9%

---

## 🚀 Roadmap e Fases

### Fase 1: MVP
**Objetivo**: entregar site one-page com conteúdo completo e CTAs ativos.

**Features incluídas**:
- Estrutura completa de seções
- WhatsApp com mensagem pré-preenchida
- Formulário funcional
- SEO básico

**Critérios de sucesso**:
- Conteúdo 100% alinhado ao briefing
- Responsividade em desktop e mobile

### Fase 2: Refinamento
**Objetivo**: aprimorar desempenho, SEO e ajustes visuais.

**Features incluídas**:
- Otimização de imagens
- Ajustes de layout e hierarquia
- SEO avançado e validações

**Critérios de sucesso**:
- Core Web Vitals dentro da meta
- Aprovação do cliente nas revisões

### Fase 3: Go-live
**Objetivo**: publicar em domínio oficial e finalizar entrega.

**Features incluídas**:
- Deploy na Hostinger
- Configuração de domínio e redirecionamentos
- Revisão final

**Critérios de sucesso**:
- Site publicado e funcional no domínio principal
- Redirecionamento 301 ativo no domínio secundário

---

## 🔐 Segurança e Compliance

### Compliance
- **LGPD**: coleta apenas dados de contato mínimos; finalidade explícita no formulário.

### Autenticação
- **Método**: não aplicável (site público sem login).
- **MFA**: não aplicável.

### Proteção de Dados
- **Dados sensíveis identificados**: nome, e-mail, telefone, cidade do imóvel.
- **Criptografia**: HTTPS obrigatório no domínio.
- **Retenção**: dados armazenados apenas no e-mail do cliente, conforme política interna.

---

## 📱 Plataformas e Tecnologias

### Plataformas Suportadas
- **Web**: responsivo para desktop e mobile.

### Stack Tecnológico (resumo)
- **Frontend**: HTML, CSS, TypeScript vanilla
- **Backend**: não aplicável
- **Banco de dados**: não aplicável
- **Infraestrutura**: Hostinger (hospedagem estática)
- **Integrações**: WhatsApp, serviço de envio de formulário

---

## 💡 Diferenciais Competitivos

### Concorrentes
- **Gestores de imóveis tradicionais**
  - ❌ Comunicação genérica e pouco transparente
  - ❌ Ausência de método documentado e estruturado

### Nossos Diferenciais
1. **Método em 9 pontos-chave**: prova de profundidade operacional e controle de ponta a ponta.
2. **Tom premium e institucional**: posicionamento maduro, sem “startup vibe”.
3. **Prova social objetiva**: cases com antes/depois e depoimentos reais.
4. **Alta performance técnica**: site leve, rápido e preparado para SEO.

---

## 🎨 Identidade de Marca

### Cores Principais
- **Primária**: a definir (diretriz: tons escuros + dourado)
- **Secundária**: a definir
- **Neutras**: a definir

### Tipografia
- **Títulos**: a definir
- **Corpo**: a definir

### Tom de Voz
- **Estilo**: premium, profissional, operacional
- **Idioma principal**: pt-BR
- **Diretrizes**: evitar promessas exageradas e manter linguagem institucional.

---

## 📝 Glossário de Termos

- **NineKeys**: marca de gestão profissional de imóveis com método próprio.
- **Método NineKeys**: framework operacional estruturado em 9 pontos-chave.
- **CTA**: chamada para ação, botão com objetivo de conversão.
- **Accordion**: componente que expande/recolhe conteúdo no mobile.
- **Canonical**: tag HTML que indica o domínio principal para SEO.
- **Core Web Vitals**: métricas de desempenho usadas pelo Google.
- **Lazy load**: carregamento tardio de mídia para melhorar performance.
