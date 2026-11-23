// Services Configuration
// Edit these values to update your service offerings

export interface Service {
  icon: any
  name: string
  description: string
  capabilities: string[]
  cta: string
  note?: string
}

// Note: Import icons from lucide-react in the component and assign them here
// For now, the component handles icon imports directly
