# jarrydzankovic

Minimal editorial one-page site. Next.js, TypeScript, Tailwind, deployable on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Portrait

Place your portrait at **`public/portrait.png`**. For dark mode, an inverted version is used. To generate or regenerate it:

```bash
npm run invert-portrait
```

This writes **`public/portrait-inverted.png`** using the [sharp](https://github.com/lovell/sharp) library (no ImageMagick required).

## Build & deploy

```bash
npm run build
npm start
```

Deploy to Vercel: connect the repo; the default build command and output work as-is.
