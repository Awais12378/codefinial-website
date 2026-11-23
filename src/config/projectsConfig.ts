// Projects Configuration
// Edit these values to update your project portfolio
// Replace placeholder entries with your actual projects

export interface Project {
  id: number
  title: string
  category: 'Software' | 'Web' | 'Automation' | 'Security'
  description: string
  technologies: string[]
  image: string
  demoLink?: string
  githubLink?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Custom Business Management Dashboard',
    category: 'Software',
    description: 'A comprehensive dashboard for managing business operations, inventory, and customer relationships.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    image: '/placeholder-project-1.jpg',
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 2,
    title: 'AI-Powered Lead Management Automation',
    category: 'Automation',
    description: 'Intelligent workflow automation for lead scoring, routing, and follow-up using AI and n8n.',
    technologies: ['n8n', 'OpenAI', 'Webhooks', 'CRM Integration'],
    image: '/placeholder-project-2.jpg',
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 3,
    title: 'Modern Business Website',
    category: 'Web',
    description: 'A responsive, high-performance business website with modern design and SEO optimization.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/placeholder-project-3.jpg',
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 4,
    title: 'Inventory Management System',
    category: 'Software',
    description: 'Custom software solution for tracking inventory, orders, and supplier relationships.',
    technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    image: '/placeholder-project-4.jpg',
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 5,
    title: 'Automated Client Reporting Workflow',
    category: 'Automation',
    description: 'End-to-end automation for generating and delivering client reports via email.',
    technologies: ['n8n', 'Python', 'Email API', 'Data Visualization'],
    image: '/placeholder-project-5.jpg',
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 6,
    title: 'Web Application Security Assessment',
    category: 'Security',
    description: 'Comprehensive security assessment identifying vulnerabilities and providing remediation recommendations.',
    technologies: ['OWASP', 'Burp Suite', 'Security Testing'],
    image: '/placeholder-project-6.jpg',
    demoLink: '#',
    githubLink: '#'
  }
]

export default projects
