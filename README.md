# PRJCTR Workshop starter

A React + Vite project for building interactive visuals in the browser.

## First-time setup (beginner friendly)

This section walks through everything from **opening the GitHub template** to running the project on your machine.

### Before you start

You need:

- **Node.js (LTS)** from [nodejs.org](https://nodejs.org/)  
  (Node includes **npm**, which this project uses)
- **Git** from [git-scm.com](https://git-scm.com/) (recommended)
- A **GitHub account**

After installing Node, open a terminal and run:

```bash
node -v
npm -v
```

If both commands print version numbers, you are ready.

---

### Step 1: Create your own repo from the template

1. Open the template repo: [github.com/itstimefortea/prjctr-workshop](https://github.com/itstimefortea/prjctr-workshop)
2. Click **Use this template**.
3. Click **Create a new repository**.
4. Choose:
   - your account/organization
   - a repo name (example: `my-prjctr-workshop`)
   - visibility (public or private)
5. Click **Create repository**.

You now have your own copy on GitHub.

---

### Step 2: Download your repo to your computer (clone)

1. In **your new repo** on GitHub, click the green **Code** button.
2. Make sure **HTTPS** is selected.
3. Copy the URL.
4. Open Terminal and run:

```bash
git clone YOUR_COPIED_URL_HERE
```

Example:

```bash
git clone https://github.com/YOUR_USERNAME/my-prjctr-workshop.git
```

5. Move into the project folder:

```bash
cd my-prjctr-workshop
```

Tip: run `ls` (Mac/Linux) and make sure you can see `package.json` in this folder.

---

### Step 3: Install project dependencies

Still in the project folder, run:

```bash
npm install
```

This may take a minute the first time.

---

### Step 4: Start the local development server

Run:

```bash
npm run dev
```

You should see a local URL like:

```text
http://localhost:5173/
```

Open that URL in your browser.

- Leave the terminal running while you work.
- Stop the server any time with **Ctrl+C**.

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

**Troubleshooting**

- **`npm` not found** — Install Node.js LTS and restart the terminal.
- **`git` not found** — Install Git from [git-scm.com](https://git-scm.com/) and restart the terminal.
- **Errors after pulling changes** — From the project folder: delete `node_modules`, run `npm install` again.
- **Port in use** — Something else may be using port `5173`; stop that process or [change Vite’s port](https://vite.dev/config/server-options.html).
- **Commands do nothing** — Run `npm install` / `npm run dev` from the directory that contains `package.json`.

**Project layout and stack (Tailwind, Base UI, Three.js, etc.)** — see **[AGENTS.md](./AGENTS.md)**.

**Docs:** [Vite](https://vite.dev/) · [React](https://react.dev/) · [Tailwind CSS](https://tailwindcss.com/) · [Base UI](https://base-ui.com/) · [React Three Fiber](https://r3f.docs.pmnd.rs/)
