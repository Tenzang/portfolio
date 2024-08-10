# Portolio Site

This is a portfolio website built using Bun and Nuxt.js.

## Setup

- Ensure Docker Engine is installed.
- Run `bun build:dev`

## Development Server

Run `bun start`
A a containerized development server will be started on `localhost:3000`

## Production

Production build & deployment is handled in Github Actions (see `.github/workflows/deploy.yml`).

The Production build can be previewed locally by running:

```bash
bun build
bun preview
```

- TODO: containerize local prod preview
