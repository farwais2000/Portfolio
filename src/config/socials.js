const env = import.meta.env;

export const socials = [
  { 
    key: "github", 
    label: "GitHub", 
    url: env.VITE_SOCIAL_GITHUB 
  },
  { 
    key: "linkedin", 
    label: "LinkedIn", 
    url: env.VITE_SOCIAL_LINKEDIN 
  },
  { 
    key: "facebook", 
    label: "Facebook", 
    url: env.VITE_SOCIAL_FACEBOOK 
  },
  { 
    key: "email", 
    label: "Email", 
    url: env.VITE_CONTACT_EMAIL ? `mailto:${env.VITE_CONTACT_EMAIL}` : undefined 
  },
  { 
    key: "phone", 
    label: "Phone", 
    url: env.VITE_CONTACT_PHONE ? `tel:${env.VITE_CONTACT_PHONE}` : undefined 
  },
].filter((social) => Boolean(social.url));