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
const description =
  "Academic homepage of Xiangyu Li, focusing on drug-target interaction prediction, computational pathology, and multimodal biomedical AI.";

export default defineConfig({
  lang: "zh-CN",
  title: "Xiangyu Li",
  description,
  cleanUrls: true,
  base,
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["meta", { name: "theme-color", content: "#2f78da" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Xiangyu Li" }],
    ["meta", { property: "og:description", content: description }]
  ],
  themeConfig: {
    logo: "/favicon.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/#about-me" },
      { text: "Education", link: "/#education" },
      { text: "Publications", link: "/#selected-publications" },
      { text: "Links", link: "/#links" },
      {
        text: "Scholar",
        link: "https://scholar.google.com/citations?user=cDmPBF4AAAAJ&hl=en"
      },
      { text: "GitHub", link: `https://github.com/${owner}` }
    ],
    outline: false,
    docFooter: false,
    socialLinks: [{ icon: "github", link: `https://github.com/${owner}` }],
    footer: {
      message: "Built with VitePress for a single-page academic homepage",
      copyright: `Copyright © ${currentYear} ${owner}`
    }
  }
});
