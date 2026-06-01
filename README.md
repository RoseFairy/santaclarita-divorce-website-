# The F.M. Zavala Law Firm

**Santa Clarita Divorce Attorney | Family Law Representation in Santa Clarita and Los Angeles County**

A modern, professional website for The F.M. Zavala Law Firm, led by Francisco M. Zavala, Esq. — an experienced divorce and family law attorney serving clients in Santa Clarita Valley and throughout Los Angeles County.

## About

Francisco M. Zavala, Esq. has over 30 years of experience practicing family law. He is a former Los Angeles County Temporary Judge, giving him unique insight into how courts evaluate cases. The firm provides strategic, compassionate representation in:

- Divorce & Legal Separation
- Child Custody & Visitation (including 730 Evaluations and Move-Away cases)
- Spousal & Child Support
- High-Asset Property Division & Forensic Accounting
- Domestic Violence Restraining Orders
- Post-Judgment Modifications
- Mediation & Collaborative Divorce
- Estate Planning (Wills & Trusts)

## Key Features

- Clean, professional design optimized for trust and clarity
- Strong local SEO focus on **Santa Clarita** (primary) and **Los Angeles County** (secondary)
- Comprehensive Practice Areas page with detailed service descriptions
- Educational blog covering complex family law topics (LaMusga move-away cases, parental alienation, financial infidelity, etc.)
- Secure contact form with server-side validation
- Fully responsive and accessible
- Structured data (JSON-LD) for Attorney + LocalBusiness

## Tech Stack

- **Next.js 16** (App Router + Turbopack)
- **React 18**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (subtle animations)
- **Zod** + Server Actions (form validation)
- **shadcn/ui** components

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation & Development

`ash
# Clone the repository
git clone <repository-url>
cd santaclarita-divorce-website

# Install dependencies
npm install

# Start the development server
npm run dev
`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

`ash
npm run build
npm start
`

## Project Structure

`
app/
├── (marketing)/
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── practice-areas/
│   └── page.tsx          # Homepage
├── layout.tsx            # Root layout + JSON-LD schema
components/
├── navbar.tsx
├── footer.tsx
└── ...
public/
└── images/
`

## Important Notes

- This is a **marketing website** for a law firm. All content is for informational purposes.
- The site includes proper legal disclaimers as required by the State Bar of California.
- NAP (Name, Address, Phone) consistency is maintained across the site.

**Office Address:**
28494 Westinghouse Place, Suite 205  
Santa Clarita, CA 91355  
(661) 753-3534

## License

This project is proprietary to The F.M. Zavala Law Firm. All rights reserved.

---

*Built with care for the families of Santa Clarita and Los Angeles County.*
