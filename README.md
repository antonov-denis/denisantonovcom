# Denis Antonov Portfolio

An Astro portfolio scaffold built from the rough `index.html` concept. The implementation is split into small Astro components, shared typed content in `src/data/site.ts`, and global theme tokens in `src/styles/global.css`.

## Project Structure

```text
src/
  components/        Page sections and navigation
  data/site.ts       Editable site copy and repeated content
  layouts/Layout.astro
  pages/index.astro  Homepage composition
  styles/global.css  Theme, layout, motion, responsive rules
```

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

Update contact links, resume, and project copy in `src/data/site.ts` and `src/components/ContactSection.astro`.

## Production Docker

The production image builds the Astro site and serves the static output with Caddy.

```sh
docker compose up -d --build
```

DNS should point both records at the server running the container:

- `A` / `AAAA` for `denisantonov.com`
- `CNAME` or `A` / `AAAA` for `www.denisantonov.com`

Caddy automatically provisions HTTPS certificates. `www.denisantonov.com` redirects to the apex domain.
