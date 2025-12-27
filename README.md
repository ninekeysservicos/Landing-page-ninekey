# NineKeys Landing Page

Landing page institucional da NineKeys.

## Stack

- HTML5
- CSS3 (vanilla CSS com design tokens)
- TypeScript 5.x

## Structure

```
implementation/
├── public/           # Static assets (após build)
├── src/
│   ├── styles/       # CSS source files
│   └── scripts/      # TypeScript source files (futuro)
└── package.json
```

## Development

### Install dependencies

```bash
npm install
```

### Build

```bash
npm run build
```

This will:
1. Compile TypeScript to JavaScript (when scripts exist)
2. Copy CSS files to `public/assets/`

### Type checking

```bash
npm run type-check
```

## CSS Design System

Design tokens are defined in `src/styles/design-base.css` and include:

- **Colors**: Primary, secondary, semantic, text, surfaces
- **Typography**: Font families, sizes, weights
- **Spacing**: 10-level spacing scale
- **Shadows**: 5-level elevation system
- **Radius**: 5 border radius sizes
- **Breakpoints**: Mobile, tablet, desktop, wide

All tokens use CSS variables and can be accessed via `var(--token-name)`.

## Local Development

### View the site

After building, open the site in your browser:

```bash
# Option 1: Open directly (macOS)
open public/index.html

# Option 2: Open directly (Linux)
xdg-open public/index.html

# Option 3: Use a local server (recommended)
npx serve public
# Then open http://localhost:3000
```

### Content Management

All text content is managed in `src/config/content.ts`:

```typescript
// Hero section content
export const CONTENT = {
  hero: {
    h1: "NineKeys",
    h2: "Onde imóveis viram resultado.",
    // ...
  }
};
```

To update content:
1. Edit `src/config/content.ts`
2. Run `npm run build`
3. Refresh browser

### WhatsApp Integration

WhatsApp CTAs are configured in `src/config/content.ts`:

```typescript
export const LINKS = {
  whatsappNumber: "5511921472102",
  whatsappMessage: "Olá! Gostaria de avaliar meu imóvel com a NineKeys."
};
```

The `buildWhatsappUrl()` function automatically encodes the message and generates the correct `wa.me` URL.

### Método Section (9 Pontos-Chave)

The 9 method points are configured in `src/config/content.ts`:

```typescript
export const METHOD_POINTS: MethodPoint[] = [
  {
    id: "ponto-1",
    title: "Análise Estratégica do Imóvel",
    summary: "Short summary for card",
    description: "Full description for modal/accordion"
  },
  // ... 8 more points
];
```

**Responsive Behavior**:
- **Desktop (>1024px)**: 3x3 grid of cards with "Ver mais" buttons that open modal
- **Tablet (640-1024px)**: 2-column grid with modal
- **Mobile (<640px)**: Accordion/collapsible list

**Interactions**:
- Click "Ver mais" → Opens modal with full description
- Click accordion header → Expands/collapses item
- Press ESC → Closes modal
- Click overlay → Closes modal

### Cases Section (Carousel)

The cases carousel is configured in `src/config/content.ts`:

```typescript
export const CASES: Case[] = [
  {
    id: "case-1",
    title: "Case title",
    beforeText: "Description before",
    afterText: "Description after",
    results: ["Result 1", "Result 2", ...],
    videoEmbedUrl: "YouTube embed URL",
    beforeImage: "/cases/case-1-before.jpg",
    afterImage: "/cases/case-1-after.jpg"
  },
  // ... more cases
];
```

**Features**:
- **Desktop**: Arrow navigation with prev/next buttons
- **Mobile**: Touch-friendly swipe carousel
- **Navigation**: Dots indicator for current position
- **Keyboard**: Arrow keys to navigate
- **Lazy Loading**: Videos and images load on demand

**Asset Requirements**:
- Videos: YouTube embed URLs (16:9 aspect ratio)
- Images: 800x600px minimum, optimized for web
- Place images in `public/cases/` directory

### Manifesto Section (Sobre)

The manifesto/about section is configured in `src/config/content.ts`:

```typescript
export const MANIFESTO_CONTENT = {
  title: "Section title",
  paragraphs: [
    "Paragraph 1 with\nline breaks",
    "Paragraph 2",
    // ... more paragraphs
  ]
};
```

**Features**:
- **Typography**: Reading-optimized with 1.7 line-height and 70ch max-width
- **Layout**: Centered on desktop, left-aligned on mobile
- **Contrast**: Enhanced with surface-strong background
- **Line breaks**: Preserved with \n in content strings

### Contact Section

The contact section is configured in `src/config/content.ts`:

```typescript
export const CONTACT_CONTENT = {
  title: "Section title",
  text: "Section description",
  ctaWhatsapp: "WhatsApp button text",
  formLabels: {
    name: "Nome",
    email: "E-mail",
    phone: "Telefone",
    city: "Cidade do imóvel"
  },
  formMessages: {
    submit: "Enviar",
    success: "Success message",
    error: "Error message"
  }
};
```

**Features**:
- **Layout**: 2-column desktop (copy + form), stacked mobile
- **WhatsApp CTA**: Direct link with pre-filled message
- **Form submission**: External provider (Formspree recommended)
- **Feedback**: Success/error messages with visual states
- **Validation**: HTML5 required fields and email validation

**Form Configuration**:

1. Sign up for form provider (e.g., Formspree: https://formspree.io)
2. Create new form and get endpoint URL
3. Update `FORM_ENDPOINT` in `src/config/content.ts`:
   ```typescript
   export const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
4. Rebuild: `npm run build`
5. Test form submission

**Recommended Providers**:
- **Formspree** (free tier: 50 submissions/month)
- **Formspark** (free tier: 250 submissions/month)
- **Basin** (free tier: 100 submissions/month)

### Footer

The footer is configured in `src/config/content.ts`:

```typescript
export const FOOTER_CONTENT = {
  tagline: "NineKeys — Onde imóveis viram resultado.",
  email: "contato@ninekeys.com.br",
  phone: "+55 (11) 92147-2102",
  privacy: "Política de Privacidade",
  copyright: "© NineKeys — Todos os direitos reservados"
};
```

**Features**:
- **Layout**: Centered footer with stacked information
- **Content**: Tagline, contact info, privacy link, copyright
- **Typography**: Hierarchical sizing (tagline larger, copyright smaller)
- **Responsive**: Smaller text on mobile

### Floating WhatsApp Button

A fixed-position WhatsApp button is always visible in the bottom-left corner.

**Features**:
- **Position**: Fixed to bottom-left corner (z-index: 1000)
- **Link**: Opens WhatsApp with pre-filled message
- **Hover**: Darkens and lifts up on hover
- **Responsive**: Smaller on mobile devices
- **Accessibility**: Proper aria-label for screen readers

**Configuration**: Uses same `buildWhatsappUrl()` function as other WhatsApp CTAs.

### SEO Implementation

The site is optimized for search engines with:

**Meta Tags**:
- Title: "NineKeys — Onde imóveis viram resultado"
- Description: Descriptive meta description under 160 characters
- Keywords: Relevant property management terms
- Canonical URL: https://ninekeys.com.br

**Open Graph & Social Sharing**:
- OG title, description, image, and URL
- Twitter Card tags for better sharing
- Absolute URLs for images

**Structured Data (JSON-LD)**:
- Organization schema with contact info
- Service schema describing the business
- Validates with Google Rich Results Test

**Heading Hierarchy**:
- Single H1 in hero section
- H2 for each major section
- H3/H4 for subsections
- No skipped levels

**Performance**:
- Lazy loading on below-fold images and iframes
- Optimized assets (logos < 50KB, images < 300KB)
- Minimal JavaScript bundle

### Accessibility Features

The site meets WCAG 2.1 Level AA standards:

**Keyboard Navigation**:
- All interactive elements accessible via Tab
- Visible focus indicator (2px gold outline)
- Arrow keys navigate carousel
- ESC key closes modal

**ARIA Attributes**:
- Descriptive labels on icon-only buttons
- `aria-expanded` on accordion headers
- `aria-controls` linking accordion headers to content
- `aria-hidden` on decorative icons
- `aria-label` on navigation elements

**Screen Reader Support**:
- Semantic HTML structure
- Descriptive alt text on all images
- Form labels associated with inputs
- Proper heading hierarchy

**Visual**:
- High contrast text (WCAG AA compliant)
- Focus visible for keyboard users
- No reliance on color alone for information

**Testing**:
To test accessibility:
```bash
# Keyboard navigation
# Press Tab to navigate through interactive elements
# Press Shift+Tab to navigate backwards
# Press ESC to close modal

# Lighthouse audit
npx serve public
# Open http://localhost:3000 in Chrome
# DevTools > Lighthouse > Run audit
```

## Deployment

The NineKeys landing page is ready for production deployment.

### Quick Deploy

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload to Hostinger**:
   - Upload entire contents of `public/` directory
   - Configure SSL certificate
   - Point DNS to hosting

### Detailed Guides

For complete deployment instructions, see:

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Complete deployment guide
  - Formspree configuration
  - Hostinger upload steps
  - SSL setup
  - DNS configuration
  - 301 redirects
  - Troubleshooting
  - Post-deployment validation

- **[PRE-FLIGHT-CHECKLIST.md](./PRE-FLIGHT-CHECKLIST.md)** - Pre-deployment checklist
  - Required accounts and access
  - Configuration verification
  - Upload checklist
  - Testing checklist

### Production URLs

- **Primary**: https://ninekeys.com.br
- **Secondary** (301 redirect): https://9keys.com.br

### Post-Deployment

After deploying:

1. Test all WhatsApp CTAs
2. Test contact form submission
3. Verify all sections display correctly
4. Run Lighthouse audit (target scores > 90)
5. Test on mobile and desktop
6. Submit sitemap to Google Search Console (optional)

### Future Updates

To update the live site:

1. Make changes in this repository
2. Test locally with `npx serve public`
3. Build with `npm run build`
4. Upload changed files to Hostinger
5. Clear browser cache and test
