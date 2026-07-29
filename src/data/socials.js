export const socials = [
  {
    key: "github",
    label: "GitHub",
    url: import.meta.env.VITE_GITHUB_URL,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    url: import.meta.env.VITE_LINKEDIN_URL,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    url: import.meta.env.VITE_WHATSAPP_URL,
  },
  {
    key: "facebook",
    label: "Facebook",
    url: import.meta.env.VITE_FACEBOOK_URL,
  },

].filter((social) => Boolean(social.url));