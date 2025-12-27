# Deployment Guide - NineKeys Landing Page

**Version**: 1.0.0
**Last Updated**: 2025-12-26
**Status**: Production Ready

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All milestones 1-8 completed
- [ ] QA testing passed
- [ ] Production build successful (`npm run build`)
- [ ] Formspree endpoint configured (or ready to configure)
- [ ] Hostinger account active
- [ ] Domain ninekeys.com.br purchased/configured
- [ ] (Optional) Domain 9keys.com.br purchased for redirect

---

## 🚀 Deployment Steps

### Step 1: Configure Formspree (If Not Done)

1. Go to https://formspree.io
2. Sign up for free account (50 submissions/month)
3. Create new form
4. Copy endpoint URL (e.g., `https://formspree.io/f/abc123xyz`)
5. Update `implementation/src/config/content.ts` line 207:
   ```typescript
   export const FORM_ENDPOINT = "https://formspree.io/f/YOUR_ACTUAL_ID";
   ```
6. Rebuild: `npm run build`

### Step 2: Prepare Files for Upload

All files to upload are in `implementation/public/` directory:

```
public/
├── index.html                    # Main HTML file
├── assets/
│   ├── design-base.css           # Design tokens
│   ├── base.css                  # Global styles
│   ├── sections.css              # Section styles
│   └── js/
│       ├── config/
│       │   └── content.js        # Content configuration
│       └── scripts/
│           └── main.js           # Main JavaScript
├── logo-simple.png               # Favicon (100KB)
├── logo-title-row.png            # Header logo (73KB)
├── logo-title-col.png            # Alternative logo (137KB)
└── cases/
    ├── case-1-before.jpg         # Placeholder (0KB - replace with real)
    ├── case-1-after.jpg          # Placeholder (0KB - replace with real)
    ├── case-2-before.jpg         # Placeholder (0KB - replace with real)
    ├── case-2-after.jpg          # Placeholder (0KB - replace with real)
    ├── case-3-before.jpg         # Placeholder (0KB - replace with real)
    └── case-3-after.jpg          # Placeholder (0KB - replace with real)
```

**Total size**: ~424KB (with real case images, expect 2-4MB)

### Step 3: Upload to Hostinger

**Option A: Using Hostinger File Manager** (Recommended for beginners)

1. Log in to Hostinger control panel
2. Go to **Files** → **File Manager**
3. Navigate to `public_html` directory (or your domain's root)
4. Delete any default files (index.html, etc.)
5. Upload all files from `implementation/public/`:
   - Upload `index.html`
   - Upload `logo-simple.png`, `logo-title-row.png`, `logo-title-col.png`
   - Create `assets/` folder and upload all CSS files
   - Create `assets/js/` folder structure and upload JS files
   - Create `cases/` folder and upload case images
6. Verify file structure matches original

**Option B: Using FTP/SFTP** (Recommended for advanced users)

1. Get FTP credentials from Hostinger panel
2. Use FileZilla or similar FTP client
3. Connect to your hosting
4. Navigate to `public_html`
5. Upload entire `public/` folder contents
6. Verify upload completed successfully

**Option C: Using Git Deployment** (Advanced)

1. Set up Git deployment in Hostinger panel
2. Push to Hostinger's Git repository
3. Configure build and deploy hooks

### Step 4: Configure SSL Certificate

1. In Hostinger panel, go to **SSL**
2. Enable **Free SSL** (Let's Encrypt)
3. Wait 10-15 minutes for certificate activation
4. Verify HTTPS works: https://ninekeys.com.br

### Step 5: Configure DNS for Primary Domain

If domain is registered elsewhere (not Hostinger):

1. Get Hostinger nameservers from panel
2. Go to your domain registrar (Registro.br, etc.)
3. Update nameservers to point to Hostinger
4. Wait 24-48h for DNS propagation

If domain is registered with Hostinger:

1. DNS should auto-configure
2. Verify in **Domains** section

### Step 6: Configure 301 Redirect for Secondary Domain (Optional)

If you have 9keys.com.br:

**Option A: Using .htaccess** (if Apache server)

1. Create `.htaccess` file in `public_html`
2. Add redirect rule:
   ```apache
   RewriteEngine On
   RewriteCond %{HTTP_HOST} ^9keys\.com\.br$ [OR]
   RewriteCond %{HTTP_HOST} ^www\.9keys\.com\.br$
   RewriteRule ^(.*)$ https://ninekeys.com.br/$1 [R=301,L]
   ```

**Option B: Using Hostinger Redirect Tool**

1. In Hostinger panel, go to **Domains**
2. Select 9keys.com.br
3. Click **Manage** → **Redirects**
4. Set up 301 redirect to https://ninekeys.com.br
5. Save and test

---

## 🧪 Post-Deployment Validation

After deployment, test the following:

### Production URL Tests

1. **Primary Domain**: https://ninekeys.com.br
   - [ ] Loads correctly
   - [ ] SSL certificate valid (green padlock)
   - [ ] No mixed content warnings

2. **Secondary Domain** (if configured): https://9keys.com.br
   - [ ] Redirects to https://ninekeys.com.br
   - [ ] Uses 301 redirect (check with browser dev tools)

3. **WWW Subdomain**: https://www.ninekeys.com.br
   - [ ] Redirects to https://ninekeys.com.br (if configured)

### Functionality Tests

1. **WhatsApp CTAs**:
   - [ ] Hero primary CTA opens WhatsApp
   - [ ] Hero secondary CTA opens WhatsApp
   - [ ] Contact section WhatsApp button works
   - [ ] Floating WhatsApp button works
   - [ ] All use correct number: +55 11 92147-2102
   - [ ] Message pre-filled correctly

2. **Contact Form**:
   - [ ] Form displays correctly
   - [ ] All 4 fields present and required
   - [ ] Email validation works
   - [ ] Submit button sends to Formspree
   - [ ] Success message appears on submit
   - [ ] Email received at contato@ninekeys.com.br

3. **Interactive Elements**:
   - [ ] Method modal opens and closes (desktop)
   - [ ] Method accordion expands/collapses (mobile)
   - [ ] Carousel navigates with arrows
   - [ ] Carousel navigates with dots
   - [ ] Carousel navigates with keyboard

4. **Images & Media**:
   - [ ] All logos load
   - [ ] Case images load (or placeholders visible)
   - [ ] YouTube videos load in iframes
   - [ ] Lazy loading works (check Network tab)

5. **SEO**:
   - [ ] Page title correct in browser tab
   - [ ] Meta description present (view source)
   - [ ] Canonical URL points to https://ninekeys.com.br
   - [ ] JSON-LD structured data present
   - [ ] Favicon appears in browser tab

6. **Performance**:
   - [ ] Page loads in < 3 seconds
   - [ ] No console errors
   - [ ] Lighthouse scores:
     - Performance > 90
     - Accessibility > 95
     - Best Practices > 90
     - SEO > 95

7. **Responsiveness**:
   - [ ] Test on desktop (1920px, 1440px, 1024px)
   - [ ] Test on tablet (768px)
   - [ ] Test on mobile (375px, 414px)

---

## 🔧 Troubleshooting

### Issue: Site shows "Index of /" directory listing

**Solution**: Ensure `index.html` is in the correct directory (usually `public_html`)

### Issue: CSS/JS not loading (404 errors)

**Solution**:
- Check file paths in `index.html` match uploaded structure
- Ensure `/assets/` folder uploaded correctly
- Check file permissions (should be 644 for files, 755 for folders)

### Issue: Images not loading

**Solution**:
- Check image file names match exactly (case-sensitive)
- Ensure images uploaded to `public_html/` root or `/cases/` folder
- Check file permissions

### Issue: Form not submitting

**Solution**:
- Verify Formspree endpoint configured in `content.ts`
- Check browser console for errors
- Test Formspree endpoint directly
- Ensure CORS headers allow form submission

### Issue: WhatsApp links not working

**Solution**:
- Verify WhatsApp number format: 5511921472102 (no spaces, no +)
- Check `buildWhatsappUrl()` function encoding message correctly
- Test link directly: `https://wa.me/5511921472102?text=Test`

### Issue: SSL certificate error

**Solution**:
- Wait 15 minutes after enabling SSL
- Clear browser cache
- Verify SSL is enabled in Hostinger panel
- Force HTTPS in `.htaccess` if needed

### Issue: 301 redirect not working

**Solution**:
- Check `.htaccess` syntax
- Verify mod_rewrite enabled on server
- Clear browser cache
- Test with different browser or incognito mode

---

## 📊 Analytics Setup (Optional)

To add Google Analytics:

1. Create Google Analytics account
2. Get tracking ID (G-XXXXXXXXXX)
3. Add to `<head>` section of `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```
4. Re-upload `index.html`

---

## 🔄 Future Updates

To update the site:

1. Make changes locally in `implementation/` directory
2. Test locally: `npx serve public`
3. Run build: `npm run build`
4. Upload changed files via FTP or File Manager
5. Clear browser cache and test

---

## 📋 Deployment Checklist

- [ ] Formspree configured and tested
- [ ] Production build created (`npm run build`)
- [ ] All files uploaded to Hostinger
- [ ] SSL certificate enabled and working
- [ ] Primary domain DNS configured
- [ ] Secondary domain 301 redirect configured (optional)
- [ ] All WhatsApp CTAs tested
- [ ] Contact form tested and working
- [ ] All interactive elements tested
- [ ] Lighthouse audit run (scores > 90)
- [ ] Mobile responsiveness tested
- [ ] Real case images uploaded (replace placeholders)
- [ ] Google Analytics added (optional)
- [ ] Sitemap submitted to Google Search Console (optional)

---

## 🎯 Go-Live Confirmation

Site is live and ready when:

✅ https://ninekeys.com.br loads correctly
✅ SSL certificate valid
✅ All WhatsApp CTAs work
✅ Contact form sends emails
✅ All sections display correctly
✅ Mobile responsive
✅ Lighthouse scores > 90

**Congratulations! 🎉 The NineKeys landing page is live!**

---

**End of Deployment Guide**
