# PRJCTR Workshop starter

A React + Vite project for building interactive visuals in the browser.

## Get it running

You only need **Node.js** (it includes **npm**, which installs dependencies and runs the app). Download the **LTS** version from [nodejs.org](https://nodejs.org/).

Open a **terminal** and check that Node and npm are available:

```bash
node -v
npm -v
```

If those commands fail, install Node.js LTS and try again.

---

**1. Put the project on your machine**

Use **Git** to clone the repository into whatever folder you use for projects (for example `Documents` or `Code`):

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

Use the **HTTPS** URL from your repo’s green **Code** button on GitHub. After `cd`, you should be inside the folder that contains `package.json`.

If you are starting from the **GitHub template**, create your own repository first: open the template (for example [github.com/itstimefortea/prjctr-workshop](https://github.com/itstimefortea/prjctr-workshop)), click **Use this template** → **Create a new repository**, then clone **your** new repo with the commands above.

---

**2. Install dependencies**

Still in the project folder:

```bash
npm install
```

---

**3. Run the app**

```bash
npm run dev
```

Open **http://localhost:5173/** in your browser. The page updates when you save code changes. To stop the server, press **Ctrl+C** in the terminal.

---

## Advanced

**No Git — download as ZIP**  
On GitHub: **Code** → **Download ZIP**. Unzip it, then in a terminal run `cd` into that folder (on Windows you can type `cd ` and drag the folder into the terminal). Continue with `npm install` and `npm run dev`.

**Other npm scripts** (same folder as `package.json`)

| Command | Purpose |
|--------|---------|
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

**Install Git** (if `git clone` is not found): [git-scm.com](https://git-scm.com/)

**Troubleshooting**

- **`npm` not found** — Install Node.js LTS and restart the terminal.
- **Errors after pulling changes** — From the project folder: delete `node_modules`, run `npm install` again.
- **Port in use** — Something else may be using port `5173`; stop that process or [change Vite’s port](https://vite.dev/config/server-options.html).
- **Commands do nothing** — Run `npm install` / `npm run dev` from the directory that contains `package.json`.

**Project layout and stack (Tailwind, Base UI, Three.js, etc.)** — see **[AGENTS.md](./AGENTS.md)**.

**Docs:** [Vite](https://vite.dev/) · [React](https://react.dev/) · [Tailwind CSS](https://tailwindcss.com/) · [Base UI](https://base-ui.com/) · [React Three Fiber](https://r3f.docs.pmnd.rs/)
