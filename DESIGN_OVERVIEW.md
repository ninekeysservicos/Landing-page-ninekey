# Design System — NineKeys Landing Page

**Versão**: 1.0.0  
**Última atualização**: 2025-12-26  
**Status**: Em evolução

---

## 🎨 Paleta de Cores

### Cores Primárias

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-primary` | #C8A24A | CTAs principais, links e destaques da marca |
| `--color-primary-hover` | #D4B663 | Hover de botões e links principais |
| `--color-primary-active` | #A8842F | Active/pressed |
| `--color-primary-light` | #F0E3C4 | Backgrounds sutis e badges |

### Cores Secundárias

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-secondary` | #111218 | Background alternativo e seções de contraste |
| `--color-secondary-hover` | #1A1C24 | Hover de superfícies escuras |

### Cores Semânticas

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-success` | #3C8C64 | Mensagens de sucesso e confirmações |
| `--color-warning` | #B7892B | Avisos e alertas não-críticos |
| `--color-error` | #C65656 | Erros e estados inválidos |
| `--color-info` | #4B7FB0 | Informações e dicas |

### Escalas de Cinza

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-text-main` | #F6F1E6 | Texto principal, títulos |
| `--color-text-secondary` | #C9C1B2 | Texto secundário e descrições |
| `--color-text-disabled` | #7C7568 | Texto desabilitado |
| `--color-border` | #23242B | Bordas padrão |
| `--color-background` | #0A0A0C | Background principal |
| `--color-surface` | #121217 | Cards e superfícies elevadas |
| `--color-surface-strong` | #161821 | Superfícies de leitura (manifesto e formulário) |

---

## 🔤 Tipografia

### Fontes

```css
--font-primary: "Manrope", "Helvetica Neue", Helvetica, sans-serif;
--font-secondary: "Cormorant Garamond", "Times New Roman", serif;
--font-mono: "IBM Plex Mono", Menlo, monospace;
```

### Escala Tipográfica

| Token | Tamanho | Line Height | Uso |
|-------|---------|-------------|-----|
| `--text-xs` | 12px / 0.75rem | 1.4 | Labels pequenos, chips |
| `--text-sm` | 14px / 0.875rem | 1.5 | Texto auxiliar |
| `--text-base` | 16px / 1rem | 1.6 | Corpo padrão |
| `--text-lg` | 18px / 1.125rem | 1.6 | Destaque suave |
| `--text-xl` | 20px / 1.25rem | 1.5 | Subtítulos |
| `--text-2xl` | 24px / 1.5rem | 1.35 | Títulos de seção |
| `--text-3xl` | 30px / 1.875rem | 1.2 | Títulos principais |
| `--text-4xl` | 42px / 2.625rem | 1.1 | Hero title |

### Pesos (Weights)

| Token | Valor | Uso |
|-------|-------|-----|
| `--font-regular` | 400 | Texto corpo |
| `--font-medium` | 500 | Ênfase suave, labels |
| `--font-semibold` | 600 | Subtítulos e destaques |
| `--font-bold` | 700 | Títulos e CTAs |

### Aplicação por seção (tamanhos e pesos)

| Seção | Elemento | Token | Peso | Observações |
|-------|----------|-------|------|------------|
| Hero | H1 | `--text-4xl` | `--font-bold` | Fonte secundária para título, tracking leve (-0.01em) |
| Hero | Subheadline | `--text-lg` | `--font-regular` | Máx. 2 linhas |
| Método | Título de seção (H2) | `--text-2xl` | `--font-semibold` | Fonte secundária |
| Método | Título do card | `--text-lg` | `--font-semibold` | Grid 3x3 |
| Método | Texto curto | `--text-sm` | `--font-regular` | 2 linhas no desktop |
| Cases | Título de seção (H2) | `--text-2xl` | `--font-semibold` | |
| Cases | Resultado (bullets) | `--text-sm` | `--font-regular` | |
| Manifesto | Título (H2) | `--text-2xl` | `--font-semibold` | |
| Manifesto | Corpo | `--text-base` | `--font-regular` | Line-height 1.7 |
| Contato | Título (H2) | `--text-2xl` | `--font-semibold` | |
| Contato | Labels | `--text-sm` | `--font-medium` | |
| Footer | Texto | `--text-sm` | `--font-regular` | |

---

## 📐 Espaçamento e Grid

### Escala de Espaçamento

| Token | Valor | Uso Comum |
|-------|-------|-----------|
| `--space-1` | 4px / 0.25rem | Espaçamento mínimo |
| `--space-2` | 8px / 0.5rem | Padding interno pequeno |
| `--space-3` | 12px / 0.75rem | Gap entre elementos |
| `--space-4` | 16px / 1rem | Padding padrão |
| `--space-5` | 20px / 1.25rem | Espaços intermediários |
| `--space-6` | 24px / 1.5rem | Margem entre blocos |
| `--space-8` | 32px / 2rem | Padding de cards |
| `--space-10` | 40px / 2.5rem | Seções médias |
| `--space-12` | 48px / 3rem | Seções grandes |
| `--space-16` | 64px / 4rem | Separação macro |

### Grid System

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

.grid {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: repeat(12, 1fr);
}
```

**Breakpoints**:
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`
- Wide: `> 1280px`

---

## ✨ Sombras e Elevações

| Token | Valor CSS | Uso |
|-------|-----------|-----|
| `--shadow-xs` | 0 1px 2px rgba(0, 0, 0, 0.35) | Inputs em foco |
| `--shadow-sm` | 0 4px 12px rgba(0, 0, 0, 0.35) | Cards em repouso |
| `--shadow-md` | 0 10px 24px rgba(0, 0, 0, 0.4) | Cards em hover |
| `--shadow-lg` | 0 16px 32px rgba(0, 0, 0, 0.45) | Modais |
| `--shadow-xl` | 0 24px 48px rgba(0, 0, 0, 0.55) | Destaques principais |

---

## 🧩 Componentes Base

### Botão (Button)

**Variantes**:

| Variante | Uso | Estilo |
|----------|-----|--------|
| Primary | CTA principal | Fundo gold, texto escuro |
| Secondary | CTA secundário | Transparente, borda gold, texto gold |
| Ghost | Ações terciárias | Transparente, texto gold, hover com fundo sutil |

**Tamanhos**:

| Tamanho | Height | Padding | Font Size |
|---------|--------|---------|-----------|
| Small | 36px | var(--space-3) var(--space-4) | var(--text-sm) |
| Medium | 44px | var(--space-4) var(--space-6) | var(--text-base) |
| Large | 52px | var(--space-5) var(--space-8) | var(--text-lg) |

**Estados**:

```css
.btn-primary {
  background: var(--color-primary);
  color: #0B0D10;
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  transition: all 150ms ease;
}

.btn-primary:hover {
  background: var(--color-primary-hover);
  box-shadow: var(--shadow-sm);
}

.btn-primary:active {
  background: var(--color-primary-active);
  transform: translateY(1px);
}

.btn-primary:disabled {
  background: var(--color-border);
  color: var(--color-text-disabled);
  cursor: not-allowed;
}
```

### Input (Text Field)

**Variantes**:

| Variante | Uso |
|----------|-----|
| Default | Formulário padrão |
| Error | Campo inválido |
| Disabled | Campo desabilitado |

**Estados**:

```css
.input {
  height: 44px;
  padding: 0 var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  background: #0E0E13;
  color: var(--color-text-main);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(200, 162, 74, 0.2);
}

.input.error {
  border-color: var(--color-error);
}

.input:disabled {
  background: var(--color-background);
  color: var(--color-text-disabled);
}
```

### Card

```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
}

.card:hover {
  box-shadow: var(--shadow-md);
}
```

**Quando usar**:
- Cards do método (9 pontos)
- Cases de sucesso
- Blocos de manifesto

### Accordion (Mobile)

**Quando usar**:
- Lista dos 9 pontos no mobile

**Estados**:
- Fechado: ícone de +
- Aberto: ícone de - e conteúdo visível

### Carousel (Cases)

**Quando usar**:
- Exibir 3 cases na home, com navegação lateral e bullets

---

## 📱 Responsive Design

### Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

### Diretrizes por Dispositivo

**Mobile (< 640px)**:
- Hero em coluna única
- CTAs empilhados
- Método em accordion
- Cases em carrossel com swipe

**Tablet (640px - 1024px)**:
- Grid 2 colunas para método
- Cases com imagens lado a lado

**Desktop (> 1024px)**:
- Método em grid 3×3
- Hero com texto e imagem conceitual
- Espaçamentos maiores entre seções

---

## 🎭 Estados e Interações

### Estados Universais
- **Default**: aparência em repouso
- **Hover**: tom mais claro/escuro e leve elevação
- **Active**: cor mais escura e translateY(1px)
- **Focus**: outline visível com cor primária
- **Disabled**: cinza e cursor not-allowed

### Transições

```css
transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 🖼️ Ícones e Ilustrações

### Ícones

**Estilo**: outline (linha fina), traço consistente
**Tamanhos**:
- Small: 16px
- Medium: 20px
- Large: 24px

**Cores**:
- Ícones seguem `--color-text-main` ou `--color-primary`

### Ilustrações

**Estilo**: line art minimalista com acentos em dourado
**Uso**:
- Ilustração conceitual do método (chave + 9 pontos)
- Detalhes visuais nas seções de método e manifesto

---

## 📄 Layouts de Página

### Landing Page (One-Page)

```
Hero → Método (9 pontos) → Cases → Manifesto → Contato → Footer
```

**Diretrizes**:
- H1 único na hero
- H2 para cada seção
- Alternar fundos entre `--color-background` e `--color-secondary` para ritmo visual
- Usar `--color-surface-strong` como base para manifesto e formulário (melhor contraste de leitura)
- Aumentar line-height para 1.7 em blocos longos

---

## ♿ Acessibilidade

### Contraste de Cores
- Texto normal: mínimo 4.5:1
- Texto grande: mínimo 3:1

### Foco Visível

```css
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Tamanhos Mínimos de Toque
- Botões e links: 44x44px
- Inputs: altura mínima de 44px

### Texto Alternativo
- `alt` obrigatório para todas as imagens
- Ícones decorativos com `aria-hidden="true"`

---

## 🎨 Tokens de Design (CSS Variables)

```css
:root {
  /* ========== CORES ========== */
  --color-primary: #C8A24A;
  --color-primary-hover: #D4B663;
  --color-primary-active: #A8842F;
  --color-primary-light: #F0E3C4;

  --color-secondary: #111218;
  --color-secondary-hover: #1A1C24;

  --color-success: #3C8C64;
  --color-warning: #B7892B;
  --color-error: #C65656;
  --color-info: #4B7FB0;

  --color-text-main: #F6F1E6;
  --color-text-secondary: #C9C1B2;
  --color-text-disabled: #7C7568;

  --color-background: #0A0A0C;
  --color-surface: #121217;
  --color-surface-strong: #161821;
  --color-border: #23242B;

  /* ========== TIPOGRAFIA ========== */
  --font-primary: "Manrope", "Helvetica Neue", Helvetica, sans-serif;
  --font-secondary: "Cormorant Garamond", "Times New Roman", serif;
  --font-mono: "IBM Plex Mono", Menlo, monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.625rem;

  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* ========== ESPACAMENTO ========== */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* ========== SOMBRAS ========== */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.35);
  --shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.35);
  --shadow-md: 0 10px 24px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 16px 32px rgba(0, 0, 0, 0.45);
  --shadow-xl: 0 24px 48px rgba(0, 0, 0, 0.55);

  /* ========== BORDER RADIUS ========== */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* ========== BREAKPOINTS ========== */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}
```
