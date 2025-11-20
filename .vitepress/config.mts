import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AutoHospedagem Megathend",
  description: "Bem-vindo à Megathread de Autohospedagem",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Páginas",
        items: [
          { text: "Exemplos de markdown", link: "/exemplos-markdown" },
          { text: "Como Contribuir", link: "/como-contribuir" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://www.reddit.com/r/autohospedagem/" },
    ],
  },
});
