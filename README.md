# Nexora Labs Website

A premium, modern, single-page technology agency website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion
- **Premium Design**: Dark technology theme with blue and cyan accents
- **Smooth Animations**: Subtle entrance animations and hover effects using Framer Motion
- **Functional Booking Form**: Complete consultation request form with validation
- **Email Notifications**: Backend API for sending email notifications via Resend
- **Project Portfolio**: Filterable project showcase with category filtering
- **SEO Optimized**: Proper meta tags, semantic HTML, and Open Graph metadata
- **Secure**: Server-side validation, honeypot spam protection, and secure email handling

## Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend
- **Express.js** - Web server
- **Resend** - Email service API
- **CORS** - Cross-origin resource sharing

## Project Structure

```
nexora-labs-website/
├── public/
│   └── favicon.svg
├── server/
│   ├── package.json
│   └── server.js
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── BookCall.tsx
│   │   ├── Button.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Process.tsx
│   │   ├── Projects.tsx
│   │   ├── Section.tsx
│   │   ├── Services.tsx
│   │   ├── TechnologyStack.tsx
│   │   └── WhyChooseUs.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nexora-labs-website
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install server dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Configure environment variables**

   Copy `.env.example` to `.env` in the root directory:
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your configuration:
   ```env
   PORT=3001
   RESEND_API_KEY=your_resend_api_key_here
   ADMIN_NOTIFICATION_EMAIL=your_email@example.com
   EMAIL_FROM=noreply@yourdomain.com
   ```

5. **Set up Resend for email notifications**

   - Sign up at [https://resend.com](https://resend.com)
   - Create an API key from the dashboard
   - Add your `RESEND_API_KEY` to the `.env` file
   - Verify your sending domain in Resend
   - Add your verified domain as `EMAIL_FROM` in `.env`
   - Add your business email as `ADMIN_NOTIFICATION_EMAIL`

### Running the Development Server

You need to run both the frontend and backend servers.

**Terminal 1 - Frontend:**
```bash
npm run dev
```
The frontend will run on `http://localhost:3000`

**Terminal 2 - Backend:**
```bash
cd server
npm run dev
```
The backend will run on `http://localhost:3001`

### Building for Production

1. **Build the frontend**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with the production build.

2. **Start the production server**
   ```bash
   cd server
   npm start
   ```

## Configuration

### Updating Contact Information

Edit `src/config/siteConfig.ts` to update all contact details in one place:

```typescript
export const siteConfig = {
  contact: {
    email: 'your@email.com',
    linkedin: 'https://linkedin.com/company/yourcompany',
    github: 'https://github.com/yourcompany',
  },
  // ... other config
}
```

This automatically updates:
- Contact section
- Footer links
- Other components that use contact info

Also update `index.html` for SEO:
- Canonical URL
- Meta tags

### Updating Projects

Edit `src/config/projectsConfig.ts` to update the project portfolio. The projects array contains editable placeholder entries. Replace with your actual projects:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'Software',
    description: 'Project description...',
    technologies: ['React', 'TypeScript'],
    image: '/your-project-image.jpg',
    demoLink: 'https://your-demo.com',
    githubLink: 'https://github.com/your-repo'
  },
  // Add more projects...
]
```

### Updating Services

Edit `src/components/Services.tsx` to update service descriptions and capabilities.

### Updating Technology Stack

Edit `src/components/TechnologyStack.tsx` to update the technologies displayed.

## Deployment

### Deploying to Vercel (Recommended for Frontend)

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add environment variables in Vercel dashboard
5. Deploy

### Deploying Backend to Render/Railway/Heroku

1. Push your code to GitHub
2. Import the project in your chosen platform
3. Configure build settings:
   - Build Command: `cd server && npm install`
   - Start Command: `cd server && npm start`
4. Add environment variables
5. Deploy

### Updating API Endpoint in Production

After deploying the backend, update the API endpoint in `vite.config.ts`:

```typescript
server: {
  proxy: {
    '/api': {
      target: 'https://your-backend-url.com',
      changeOrigin: true
    }
  }
}
```

For production builds, you may want to use environment variables for the API URL. Create a `.env.production` file:

```env
VITE_API_URL=https://your-backend-url.com
```

Then update the fetch calls in `BookCall.tsx` to use this variable.

## Email Configuration

### Using Resend

1. Sign up at [https://resend.com](https://resend.com)
2. Create an API key
3. Verify your sending domain
4. Add credentials to `.env`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ADMIN_NOTIFICATION_EMAIL=your@email.com
   EMAIL_FROM=noreply@yourdomain.com
   ```

### Alternative: SMTP

If you prefer SMTP instead of Resend, modify `server/server.js` to use nodemailer instead of Resend.

## Security Notes

- All form validation happens on both client and server side
- Honeypot field included for spam protection
- API keys are never exposed to the frontend
- Sensitive data is stored in environment variables
- Penetration testing service is clearly marked as authorized testing only

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      background: {
        main: '#080D18',
        secondary: '#0D1525',
        card: '#111D30',
      },
      accent: {
        primary: '#3B82F6',
        secondary: '#06B6D4',
      },
      text: {
        main: '#F8FAFC',
        secondary: '#94A3B8',
      },
    },
  },
}
```

### Fonts

The project uses Inter font via Google Fonts. To change the font:

1. Update the Google Fonts link in `index.html`
2. Update the font family in `tailwind.config.js`

## Performance Optimization

- Images should be optimized and lazy-loaded
- Framer Motion animations are lightweight
- Code splitting is handled by Vite
- CSS is purged by Tailwind CSS in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Nexora Labs. All rights reserved.

## Support

For support or questions, please contact:
- Email: contact@nexoralabs.com
- LinkedIn: https://linkedin.com/company/nexoralabs
- GitHub: https://github.com/nexoralabs
