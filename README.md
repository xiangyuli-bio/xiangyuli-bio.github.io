# VitePress Personal Homepage

这是一个已经配置好 GitHub Pages 自动部署的 VitePress 个人主页项目。

## 本地开发

```bash
npm install
npm run dev
```

## 构建预览

```bash
npm run build
npm run preview
```

## 发布到 GitHub Pages

1. 在 GitHub 上创建一个仓库。
2. 把本地仓库关联到远程：

```bash
git remote add origin <你的仓库地址>
git branch -M main
git push -u origin main
```

3. 打开仓库 `Settings -> Pages`。
4. 在 `Build and deployment` 里选择 `GitHub Actions`。
5. 之后每次推送到 `main`，都会自动构建并发布。

## base 路径说明

`docs/.vitepress/config.mts` 已经做了自动处理：

- 如果仓库名是 `<username>.github.io`，站点会使用 `/`
- 如果仓库名是普通项目仓库，例如 `myself`，站点会使用 `/<repo>/`

如果你后面绑定了自己的自定义域名，可以在 GitHub Actions 里给构建命令增加环境变量：

```yml
env:
  SITE_BASE: /
```

## 需要你后续替换的内容

- `docs/index.md` 里的首页文案
- `docs/about.md` 里的个人介绍
- `docs/projects.md` 里的真实项目经历
- `docs/contact.md` 里的联系方式和 GitHub 链接
