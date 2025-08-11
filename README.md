# Siligong Gamedev Website

Website for the Siligong Gamedev community, part of the Siligong Valley Community in Wollongong. Built with Astro, React, and Tailwind CSS.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Deployment

This site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Setup GitHub Pages

1. Go to your repository's **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will automatically run on the next push to `main`

### Manual Deployment

You can also trigger a deployment manually:
1. Go to the **Actions** tab in your repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → "Run workflow"

### Deployment URL

Once deployed, your site will be available at:
- `https://[your-username].github.io/[repository-name]/`

To use a custom domain:
1. Add a `CNAME` file in the `public/` directory with your domain
2. Configure your domain's DNS to point to GitHub Pages

## 👀 Want to learn more?

- [Astro Documentation](https://docs.astro.build)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
