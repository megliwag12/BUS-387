# Todo Demo PWA + Electron

## Quick start

```bash
git clone https://github.com/YOUR_USERNAME/todo-demo.git
cd todo-demo
npm install
npm run start      # opens Vite dev server + Electron shell
```

The `start` script concurrently runs the Vite dev server (hot reload) and launches Electron pointing at `http://localhost:5173`.

### Building for web (PWA)

```bash
npm run build
npm run preview
```

The static bundle goes to `dist/`. Deploy this folder to any static host.

### Packaging the desktop app

For a quick local test after building the web assets:

```bash
npm run build
npm run electron    # reads the static files from dist/
```

For distributing a signed `.dmg`, integrate [`electron-builder`] or [`@electron/packager`].

## Folder layout

```
todo-demo
├─ electron.js
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ public/
│  ├─ index.html
│  ├─ manifest.json
│  └─ icons…
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   └─ components/
       ├─ TodoInput.jsx
       └─ TodoItem.jsx
```

---

Feel free to tweak the theme, add persistence (e.g. localStorage or SQLite via IPC), or integrate a cloud backend.
