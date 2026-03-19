import { defineConfig } from "vitepress";

const repository = process.env.GITHUB_REPOSITORY;
const [owner = "li-xiangyuaichirou", repo = "myself"] = repository
  ? repository.split("/")
  : ["li-xiangyuaichirou", "myself"];

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
  title: "Xiang 的主页",
  description: "前端开发、项目作品与学习笔记",
  cleanUrls: true,
  lastUpdated: true,
  base,
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["meta", { name: "theme-color", content: "#0d7c66" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Xiang 的主页" }],
    ["meta", { property: "og:description", content: "前端开发、项目作品与学习笔记" }]
  ],
  themeConfig: {
    logo: "/favicon.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "关于我", link: "/about" },
      { text: "项目", link: "/projects" },
      { text: "笔记", link: "/notes/" },
      { text: "联系", link: "/contact" }
    ],
    sidebar: {
      "/notes/": [
        {
          text: "学习笔记",
          items: [
            { text: "总览", link: "/notes/" },
            { text: "VitePress 主页搭建记录", link: "/notes/vitepress-homepage" }
          ]
        }
      ]
    },
    search: {
      provider: "local"
    },
    outline: {
      level: [2, 3],
      label: "目录"
    },
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    lastUpdated: {
      text: "最近更新",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short"
      }
    },
    socialLinks: [
      { icon: "github", link: `https://github.com/${owner}` }
    ],
    footer: {
      message: "Powered by VitePress and GitHub Pages",
      copyright: `Copyright © ${currentYear} ${owner}`
    }
  }
});
