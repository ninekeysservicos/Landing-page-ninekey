# Pre-Flight Checklist - NineKeys Deployment

**Date**: 2025-12-26
**Deployment Package**: ninekeys-deployment-20251226.tar.gz

---

## ✅ Required Accounts & Access

- [ ] **Hostinger Account**: Active hosting plan
- [ ] **FTP Credentials**: Available from Hostinger panel
- [ ] **Domain Access**: ninekeys.com.br configured
- [ ] **Secondary Domain** (optional): 9keys.com.br configured
- [ ] **Formspree Account**: Free tier (50 submissions/month)
- [ ] **Email Access**: contato@ninekeys.com.br to receive form submissions

---

## ✅ Pre-Deployment Configuration

- [ ] **Formspree Endpoint**: Configured in `src/config/content.ts`
  - Current: `https://formspree.io/f/YOUR_FORM_ID`
  - If not configured, update and rebuild before uploading
- [ ] **WhatsApp Number**: Verified as 5511921472102
- [ ] **Contact Email**: Verified as contato@ninekeys.com.br

---

## ✅ Build Verification

- [ ] Run `npm run build` - No errors
- [ ] Check `public/index.html` exists
- [ ] Check `public/assets/` folder exists with all CSS files
- [ ] Check `public/assets/js/` folder exists with compiled JS
- [ ] Check all logo files exist (logo-simple.png, logo-title-row.png)
- [ ] Total `public/` folder size < 5MB

---

## ✅ Local Testing

- [ ] Run `npx serve public`
- [ ] Open http://localhost:3000
- [ ] All sections display correctly
- [ ] No console errors
- [ ] Images load correctly
- [ ] JavaScript functions work
- [ ] Lighthouse audit passed (scores > 90)

---

## ✅ Upload Process

1. **Login to Hostinger**:
   - URL: https://www.hostinger.com
   - Use your credentials

2. **Access File Manager**:
   - Go to Files → File Manager
   - Navigate to `public_html` (or domain root)

3. **Clean Existing Files** (if any):
   - Delete default index.html
   - Remove any placeholder files

4. **Upload Files**:
   - Upload `index.html` to root
   - Upload `logo-*.png` files to root
   - Create `assets/` folder and upload all CSS files
   - Create `assets/js/` folder structure and upload JS files
   - Create `cases/` folder and upload case images

5. **Verify Upload**:
   - Check file structure matches original
   - Verify all files uploaded successfully
   - Check file permissions (644 for files, 755 for folders)

---

## ✅ Post-Upload Configuration

- [ ] **Enable SSL Certificate**:
  - Go to SSL section in Hostinger
  - Enable Free SSL (Let's Encrypt)
  - Wait 10-15 minutes for activation
  - Verify HTTPS works

- [ ] **Configure DNS** (if domain external):
  - Point nameservers to Hostinger
  - Wait 24-48h for propagation
  - Verify domain resolves to hosting

- [ ] **Setup 301 Redirect** (optional):
  - For 9keys.com.br → ninekeys.com.br
  - Use Hostinger redirect tool or .htaccess

---

## ✅ Post-Deployment Testing

- [ ] Visit https://ninekeys.com.br
- [ ] SSL certificate valid (green padlock)
- [ ] All sections display correctly
- [ ] All WhatsApp CTAs work
- [ ] Contact form submits successfully
- [ ] Form emails received at contato@ninekeys.com.br
- [ ] Test on desktop (1920px, 1440px)
- [ ] Test on tablet (768px)
- [ ] Test on mobile (375px)
- [ ] Run Lighthouse audit (scores > 90)
- [ ] No console errors

---

## ✅ Secondary Domain (Optional)

- [ ] Visit https://9keys.com.br
- [ ] Redirects to https://ninekeys.com.br
- [ ] Uses 301 redirect (check dev tools Network tab)
- [ ] SSL works on both domains

---

## 🚨 Rollback Plan (If Issues)

If deployment has critical issues:

1. Restore previous version (if any)
2. Or show maintenance page
3. Fix issues locally
4. Rebuild and redeploy

**Backup Location**: Keep deployment package for rollback

---

## 📞 Support Contacts

- **Hostinger Support**: Available 24/7 via chat
- **Formspree Support**: support@formspree.io
- **Developer**: [Your contact info]

---

## ✅ Final Confirmation

Deployment is successful when:

✅ https://ninekeys.com.br loads without errors
✅ SSL certificate is valid and active
✅ All 4 WhatsApp CTAs work correctly
✅ Contact form submits and sends email
✅ All sections display properly
✅ Mobile and desktop responsive
✅ Lighthouse scores all > 90
✅ No console errors in production

**GO-LIVE APPROVED** ✅

---

**End of Pre-Flight Checklist**
