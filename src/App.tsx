import { Button } from '@base-ui/react/button'
import { lazy, Suspense, useMemo, useState } from 'react'
import './App.css'

const ThreeScene = lazy(() =>
  import('./ThreeScene').then((mod) => ({ default: mod.ThreeScene })),
)

const STACK = [
  { name: 'Vite', href: 'https://vite.dev/' },
  { name: 'React', href: 'https://react.dev/' },
  { name: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
  { name: 'Three.js', href: 'https://threejs.org/' },
  { name: 'React Three Fiber', href: 'https://r3f.docs.pmnd.rs/' },
  { name: 'Base UI', href: 'https://base-ui.com/' },
] as const

function App() {
  const [drive, setDrive] = useState(35)
  const speed = useMemo(() => 0.25 + (drive / 100) * 2.25, [drive])

  return (
    <div className="workshop">
      <header className="workshop-header">
        <p className="workshop-eyebrow">Workshop template</p>
        <h1 className="workshop-title">Live interactive visuals</h1>
        <p className="workshop-lede">
          Use this project as a starting point: fast refresh, UI primitives, and
          a WebGL scene you can connect to React state. Edit{' '}
          <code>src/App.tsx</code> and <code>src/ThreeScene.tsx</code> first.
        </p>
        <ul className="workshop-stack" aria-label="Included tools">
          {STACK.map(({ name, href }) => (
            <li key={name}>
              <a href={href} target="_blank" rel="noreferrer">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <section className="workshop-panel" aria-labelledby="preview-heading">
        <div className="workshop-panel-copy">
          <h2 id="preview-heading">Preview</h2>
          <p>
            The slider updates React state; the scene reads it as rotation speed.
            Orbit with drag—this is a minimal R3F + drei setup in{' '}
            <code>ThreeScene.tsx</code>.
          </p>
          <div className="workshop-controls">
            <label className="workshop-label" htmlFor="drive">
              Motion
            </label>
            <input
              id="drive"
              className="workshop-range"
              type="range"
              min={0}
              max={100}
              value={drive}
              onChange={(e) => setDrive(Number(e.target.value))}
            />
            <span className="workshop-value" aria-live="polite">
              {drive}%
            </span>
          </div>
          <Button
            type="button"
            className="counter"
            onClick={() => setDrive((d) => (d + 17) % 101)}
          >
            Nudge motion
          </Button>
        </div>
        <Suspense
          fallback={
            <div
              className="three-scene-wrap three-scene-wrap--hero"
              aria-hidden
            />
          }
        >
          <ThreeScene speed={speed} />
        </Suspense>
      </section>

      <section className="workshop-hints" aria-labelledby="hints-heading">
        <h2 id="hints-heading">Where to go next</h2>
        <ul>
          <li>
            Add geometry, lights, or post-processing in{' '}
            <code>ThreeScene.tsx</code>.
          </li>
          <li>
            Style the shell with Tailwind classes or{' '}
            <code>src/index.css</code> variables.
          </li>
          <li>
            Build accessible controls with{' '}
            <a href="https://base-ui.com/react/" target="_blank" rel="noreferrer">
              Base UI
            </a>{' '}
            (dialogs, sliders, menus—unstyled, bring your own CSS).
          </li>
        </ul>
      </section>
    </div>
  )
}

export default App
