# Elite Team Academy - Landing Page

A premium, production-ready landing page for **Elite Team Academy**, a youth basketball training program led by Coach Yarden.

## Features

- **Modern Tech Stack**: React + Vite, TailwindCSS, Framer Motion
- **Smooth Animations**: Parallax effects, scroll-triggered animations, and micro-interactions
- **Mobile-First Design**: Fully responsive across all devices
- **CRM Integration**: Flexible, provider-agnostic lead capture system
- **Optimized Performance**: Fast loading and smooth scrolling
- **Accessible**: WCAG-compliant with proper ARIA labels and keyboard navigation

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **ESLint** - Code quality and consistency

## Project Structure

```
elite-team-academy/
├── public/
│   └── assets/           # Images and media files
│       ├── coach.jpg
│       ├── training1.jpg
│       ├── training2.jpg
│       ├── kids.jpg
│       ├── bg-video.mp4
│       ├── favicon.svg
│       └── og-image.jpg
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Gallery.jsx
│   │   ├── CTA.jsx
│   │   ├── RegistrationForm.jsx
│   │   └── Footer.jsx
│   ├── integrations/     # CRM integration layer
│   │   ├── LeadService.js
│   │   └── adapters/
│   │       ├── webhook.js
│   │       ├── hubspot.js
│   │       ├── pipedrive.js
│   │       ├── monday.js
│   │       ├── airtable.js
│   │       └── emailFallback.js
│   ├── lib/              # Utilities
│   │   └── motion.js     # Framer Motion variants
│   ├── styles/
│   │   └── index.css     # Global styles
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── .env.example          # Environment variables template
├── index.html            # HTML entry with SEO meta tags
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd elite-team-academy
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file from the example:
```bash
cp .env.example .env
```

4. Configure your CRM integration (see below)

5. Add placeholder images to `public/assets/`:
   - `coach.jpg` - Photo of Coach Yarden
   - `training1.jpg`, `training2.jpg` - Training session photos
   - `kids.jpg` - Group photo of kids
   - `bg-video.mp4` - (Optional) Background video
   - `favicon.svg` - Site favicon
   - `og-image.jpg` - Social media share image

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## CRM Integration

The landing page includes a flexible, provider-agnostic lead capture system. Configure it by setting environment variables in your `.env` file.

### Supported CRM Providers

1. **Generic Webhook** (default)
2. **HubSpot**
3. **Pipedrive**
4. **Monday.com**
5. **Airtable**
6. **Email Fallback** (FormSubmit or console log in dev)

### Configuration

#### 1. Generic Webhook (Recommended)

Perfect for custom integrations, Zapier, Make (Integromat), or n8n:

```env
VITE_CRM_PROVIDER=webhook
VITE_CRM_WEBHOOK_URL=https://your-webhook-url.com/endpoint
VITE_CRM_API_KEY=your-optional-bearer-token
```

The webhook will receive a POST request with JSON:
```json
{
  "parentName": "John Smith",
  "childAge": 10,
  "phone": "+1 555-123-4567",
  "email": "john@example.com",
  "message": "Looking forward to the trial!",
  "source": "Landing Page Registration Form",
  "timestamp": "2025-01-15T10:30:00.000Z"
}
```

#### 2. HubSpot

```env
VITE_CRM_PROVIDER=hubspot
VITE_HUBSPOT_PORTAL_ID=your-portal-id
VITE_HUBSPOT_FORM_ID=your-form-id
```

Find your Portal ID and Form ID in HubSpot → Forms → [Your Form] → Embed.

#### 3. Pipedrive

```env
VITE_CRM_PROVIDER=pipedrive
VITE_PIPEDRIVE_API_TOKEN=your-api-token
```

Get your API token from Pipedrive → Settings → Personal Preferences → API.

#### 4. Monday.com

```env
VITE_CRM_PROVIDER=monday
VITE_MONDAY_API_TOKEN=your-api-token
VITE_MONDAY_BOARD_ID=your-board-id
```

Create an API token in Monday → Profile → Developers → API.

#### 5. Airtable

```env
VITE_CRM_PROVIDER=airtable
VITE_AIRTABLE_API_KEY=your-api-key
VITE_AIRTABLE_BASE_ID=your-base-id
VITE_AIRTABLE_TABLE=Leads
```

Get your API key from Airtable → Account → API.

#### 6. Email Fallback

```env
VITE_CRM_PROVIDER=email
VITE_FORMSUBMIT_ACTION=https://formsubmit.co/your@email.com
```

Uses [FormSubmit](https://formsubmit.co/) for simple email delivery. In development mode without configuration, leads are logged to the console.

### Testing Lead Capture

1. **Development Mode**: If no CRM is configured, leads will be logged to the browser console
2. **Webhook Testing**: Use [webhook.site](https://webhook.site/) to generate a test webhook URL
3. **Production**: Always test your CRM integration before going live

## Customization

### Brand Colors

Edit `tailwind.config.js`:

```js
colors: {
  navy: {
    900: '#0A0E23',  // Main dark navy
  },
  gold: {
    500: '#F2C94C',  // Primary gold
  }
}
```

### Content

All content is in the component files:
- Hero text: `src/components/Hero.jsx`
- About section: `src/components/About.jsx`
- Programs: `src/components/Programs.jsx`
- Testimonials: `src/components/Testimonials.jsx`

### Animations

Motion variants are defined in `src/lib/motion.js`. Customize timing, easing, and effects there.

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

Add environment variables in Vercel dashboard → Settings → Environment Variables.

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

Add environment variables in Netlify dashboard → Site settings → Environment variables.

### Other Platforms

Build the project and deploy the `dist` folder:

```bash
npm run build
```

## SEO

The page includes:
- Semantic HTML5 structure
- Meta tags for title, description, and Open Graph
- Proper heading hierarchy
- Alt text for images
- Structured data placeholders

Update meta tags in `index.html` for your specific needs.

## Performance

- Lazy loading for images
- Optimized animations with Framer Motion
- Code splitting with Vite
- Minimal bundle size

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- ARIA labels for screen readers
- High contrast text
- Focus indicators

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

© 2025 Elite Team Academy. All Rights Reserved.

## Support

For issues or questions, please contact the development team or open an issue in the repository.

---

Built with ❤️ for Elite Team Academy
