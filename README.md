# Baba Hashim Bangali — Premium Spiritual Services Landing Page

A production-ready, high-converting, single-page website for **Baba Hashim Bangali**, specializing in spiritual guidance, love marriage support, and family relationship counseling. Built with Next.js (App Router), TypeScript, and Tailwind CSS. Ready to push to GitHub and deploy instantly on Vercel with zero backend or database requirements.

---

## 🌟 Key Features

1. **Top Contact Bar & Continuous Marquee**:
   - Direct Call Now (`03270855972`) and WhatsApp quick-access link.
   - Smooth, non-overflowing horizontal marquee ticker displaying key services with pause-on-hover.

2. **Sticky Navigation Header**:
   - Modern brand logo, smooth internal anchor links (`#home`, `#about`, `#services`, `#why-us`, `#faq`, `#contact`), WhatsApp Consultation CTA, and accessible mobile drawer menu.

3. **Full-Width Hero Slider**:
   - High-contrast visual design powered by the exact Unsplash background with layered dark luxury overlays.
   - Three automated and manually navigable slides (Love Marriage Guidance, Black Magic & Bandish Guidance, Online Amil Baba).
   - Semantic `<h1>` heading on Slide 1 for optimal SEO.

4. **Preserved High-Quality Visual Sections**:
   - Uses all four project images (`1001.webp`, `1003.webp`, `1004.webp`, `1006.webp`) from `public/imgs/` with natural proportions preserved (`object-contain`) in framed luxury containers without unwanted cropping.

5. **Nine Service Cards with Prefilled WhatsApp CTAs**:
   - 1. Amil Baba Online
   - 2. Amil Baba for Love Marriage
   - 3. Manpasand Shadi & Pasand Ki Shadi
   - 4. Amliyat for Love Marriage
   - 5. Istikhara for Love Marriage
   - 6. Black Magic & Kala Jadu Guidance
   - 7. Bandish Ka Tor & Spiritual Guidance
   - 8. Husband Wife Dispute & Divorce Problem
   - 9. Love Marriage Problem Solution & Relationship Support
   - Each card features a RED Lucide icon and opens WhatsApp with a service-specific, URL-encoded message.

6. **SEO & Natural Content Article (400+ Words)**:
   - Natural contextual keyword integration without stuffing.
   - Respectful, ethical emphasis on voluntary consent, mutual dignity, and personal choice.

7. **What Visitors Appreciate (Testimonials Slider)**:
   - Responsive slider containing 6 cards with subtle quote icons and clean cards.
   - Shows 3 cards on desktop, 2 on tablet, 1 on mobile with touch swipe, auto-slide pause, and pagination dots.
   - Transparently labeled placeholder notice in compliance with ethical guidelines.

8. **Compact Two-Column Section: Why Choose Us & FAQs**:
   - Clean, top-aligned desktop 2-column layout (stacks smoothly on mobile).
   - Left column: "Why Choose Us" with 4 benefits in a compact 2x2 grid and WhatsApp CTA.
   - Right column: "Frequently Asked Questions" with all 8 questions in a space-efficient accordion.

9. **Transparent Disclaimer & Footer**:
   - General informational disclaimer regarding spiritual guidance and personal autonomy.
   - Dynamic current year copyright notice and clean anchor links.

10. **Fixed Floating Contact Buttons**:
    - Fixed WhatsApp and Call Now floating buttons at the bottom right with responsive mobile consideration.

11. **SEO & Core Web Vitals**:
    - Pre-rendered static HTML.
    - Dynamic `/sitemap.xml` and `/robots.txt`.
    - OpenGraph and Twitter card metadata.
    - Structured Data (`schema.org/ProfessionalService`) with verified contact details.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (Static Optimization)

---

## 🚀 Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm run start
   ```

---

## 🌐 Environment Variables (Optional)

Create a `.env.local` file if you wish to override the default canonical domain:

```env
NEXT_PUBLIC_SITE_URL=https://your-custom-domain.com
```

If not provided, it defaults safely to `https://babahashimbangali.com`.

---

## 📤 Step-by-Step GitHub Upload Instructions

If Git is installed on your machine, run these commands in the project root directory (`e:\clients\Hashim_Bangali`):

```bash
# 1. Initialize a new Git repository
git init

# 2. Stage all project files
git add .

# 3. Create your initial commit
git commit -m "feat: complete Baba Hashim Bangali landing page"

# 4. Rename default branch to main
git branch -M main

# 5. Add your GitHub remote repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 6. Push to GitHub
git push -u origin main
```

*(Note: If Git is not yet installed on your system, install it from [git-scm.com](https://git-scm.com/) or use the GitHub Desktop application to publish the folder directly).*

---

## ▲ Step-by-Step Vercel Deployment Instructions

Once your code is pushed to GitHub:

1. Go to [vercel.com](https://vercel.com) and log in or sign up with your GitHub account.
2. Click **"Add New..."** and select **"Project"**.
3. Under **"Import Git Repository"**, select the repository you just pushed.
4. Keep the default settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. (Optional) Under **Environment Variables**, add:
   - Key: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://your-domain.vercel.app`
6. Click **"Deploy"**.
7. Vercel will build and deploy your site in under 60 seconds with free SSL and edge CDN caching.

---

## 📞 Business Contact Information

- **Business Name**: Baba Hashim Bangali
- **Phone Number**: `03270855972`
- **Call URL**: `tel:+923270855972`
- **WhatsApp URL**: `https://wa.me/923270855972`
