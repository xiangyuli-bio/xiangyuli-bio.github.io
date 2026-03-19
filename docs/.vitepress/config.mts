import { defineConfig } from "vitepress";

const repository = process.env.GITHUB_REPOSITORY;
const [owner = "xiangyuli-bio", repo = "xiangyuli-bio.github.io"] = repository
  ? repository.split("/")
  : ["xiangyuli-bio", "xiangyuli-bio.github.io"];

const base = process.env.SITE_BASE
  ? process.env.SITE_BASE
  : repository
    ? repo.endsWith(".github.io")
      ? "/"
      : `/${repo}/`
    : "/";

const currentYear = new Date().getFullYear();

export default defineConfig({
  lang: "zh-CN",
  title: "Xiangyuli",
  description: "Research homepage covering drug-target interaction prediction, computational pathology, and interpretable AI.",
  cleanUrls: true,
  lastUpdated: true,
  base,
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["meta", { name: "theme-color", content: "#17364f" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Xiangyuli" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Research homepage covering drug-target interaction prediction, computational pathology, and interpretable AI."
      }
    ]
  ],
  themeConfig: {
    logo: "/favicon.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      { text: "Projects", link: "/projects" },
      { text: "Publications", link: "/publications" },
      { text: "Notes", link: "/notes/" },
      {
        text: "Scholar",
        link: "https://scholar.google.com/citations?user=cDmPBF4AAAAJ&hl=en"
      },
      { text: "GitHub", link: `https://github.com/${owner}` }
    ],
    sidebar: {
      "/notes/": [
        {
          text: "Notes",
          items: [
            { text: "Overview", link: "/notes/" },
            { text: "VitePress Homepage Setup", link: "/notes/vitepress-homepage" }
          ]
        }
      ]
    },
    search: {
      provider: "local"
    },
    outline: {
      level: [2, 3],
      label: "On This Page"
    },
    docFooter: {
      prev: "Previous",
      next: "Next"
    },
    lastUpdated: {
      text: "Last updated",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short"
      }
    },
    socialLinks: [{ icon: "github", link: `https://github.com/${owner}` }],
    footer: {
      message: "Built with VitePress and deployed on GitHub Pages",
      copyright: `Copyright © ${currentYear} ${owner}`
    }
  }
});
