import { Button } from '@base-ui/react/button'
import { lazy, Suspense, useState } from 'react'
import type { ShapeControls } from './ThreeScene'
import './App.css'
const ThreeScene = lazy(() =>
  import('./ThreeScene').then((mod) => ({ default: mod.ThreeScene })),
)

const DEFAULT_CONTROLS: ShapeControls = {
  rotationSpeed: 1.1,
  scale: 1,
  stretch: 0,
  bounceHeight: 0.35,
  bounceSpeed: 1.2,
}

function App() {
  const [shapeControls, setShapeControls] =
    useState<ShapeControls>(DEFAULT_CONTROLS)
  const [showBrief, setShowBrief] = useState(false)

  function updateControl<K extends keyof ShapeControls>(
    key: K,
    value: ShapeControls[K],
  ) {
    setShapeControls((prev) => ({ ...prev, [key]: value }))
  }

  function resetControls() {
    setShapeControls(DEFAULT_CONTROLS)
  }

  return (
    <div className="mx-auto flex min-h-svh w-full max-w-6xl flex-col gap-4 p-4 md:gap-6 md:p-6">
      <header className="flex flex-wrap items-center justify-between gap-3 border-2 border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-[var(--shadow-hard)]">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
            Basic starter
          </p>
          <h1 className="m-0 text-sm font-bold uppercase tracking-[0.08em] text-[var(--text-h)] md:text-base">
            Shape + controls sandbox
          </h1>
        </div>
        <div className="relative flex flex-wrap items-center gap-2">
          <Button
            type="button"
            className="cursor-pointer border-2 border-[var(--border)] bg-transparent px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-h)] transition-transform hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px]"
            onClick={() => setShowBrief((open) => !open)}
            aria-expanded={showBrief}
            aria-controls="student-brief"
          >
            Project brief
          </Button>
          <Button
            type="button"
            className="cursor-pointer border-2 border-[var(--border)] bg-[var(--accent)] px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent-contrast)] transition-transform hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px]"
            onClick={resetControls}
          >
            Reset sliders
          </Button>

          {showBrief ? (
            <div
              id="student-brief"
              role="dialog"
              aria-label="Project brief"
              className="absolute right-0 top-full z-10 mt-2 w-[min(30rem,92vw)] border-2 border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow-hard)]"
            >
              <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--text-h)]">
                Project brief
              </p>
              <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                <li>Swap the cube for your own geometry, models, or particle systems.</li>
                <li>Map sliders to your own visual rules and animation logic.</li>
                <li>Make visuals react to inputs like keyboard, mic, camera, or time.</li>
                <li>Design a mood and style: color, motion, composition, and rhythm.</li>
                <li>Treat this as a base, not a final piece: personalize it heavily.</li>
              </ul>
              <Button
                type="button"
                className="cursor-pointer border-2 border-[var(--border)] bg-transparent px-2 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-h)]"
                onClick={() => setShowBrief(false)}
              >
                Close
              </Button>
            </div>
          ) : null}
        </div>
      </header>

      <section
        className="flex-1 border-2 border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow-hard)] md:p-4"
        aria-labelledby="canvas-heading"
      >
        <h2
          id="canvas-heading"
          className="mb-2 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--text-h)]"
        >
          Canvas
        </h2>
        <Suspense
          fallback={
            <div className="three-scene-wrap" aria-hidden />
          }
        >
          <ThreeScene controls={shapeControls} />
        </Suspense>
      </section>

      <section className="grid gap-3 border-2 border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-hard)] md:grid-cols-2 lg:grid-cols-5">
        <label className="slider-control">
          <span className="slider-label">Rotation speed</span>
          <input
            className="slider-range"
            type="range"
            min={0}
            max={3}
            step={0.05}
            value={shapeControls.rotationSpeed}
            onChange={(event) =>
              updateControl('rotationSpeed', Number(event.target.value))
            }
          />
          <span className="slider-value">{shapeControls.rotationSpeed.toFixed(2)}x</span>
        </label>

        <label className="slider-control">
          <span className="slider-label">Scale</span>
          <input
            className="slider-range"
            type="range"
            min={0.5}
            max={2.2}
            step={0.05}
            value={shapeControls.scale}
            onChange={(event) => updateControl('scale', Number(event.target.value))}
          />
          <span className="slider-value">{shapeControls.scale.toFixed(2)}</span>
        </label>

        <label className="slider-control">
          <span className="slider-label">Stretch</span>
          <input
            className="slider-range"
            type="range"
            min={-0.8}
            max={0.8}
            step={0.01}
            value={shapeControls.stretch}
            onChange={(event) =>
              updateControl('stretch', Number(event.target.value))
            }
          />
          <span className="slider-value">{shapeControls.stretch.toFixed(2)}</span>
        </label>

        <label className="slider-control">
          <span className="slider-label">Bounce height</span>
          <input
            className="slider-range"
            type="range"
            min={0}
            max={1.2}
            step={0.01}
            value={shapeControls.bounceHeight}
            onChange={(event) =>
              updateControl('bounceHeight', Number(event.target.value))
            }
          />
          <span className="slider-value">
            {shapeControls.bounceHeight.toFixed(2)}
          </span>
        </label>

        <label className="slider-control">
          <span className="slider-label">Bounce speed</span>
          <input
            className="slider-range"
            type="range"
            min={0.2}
            max={4}
            step={0.05}
            value={shapeControls.bounceSpeed}
            onChange={(event) =>
              updateControl('bounceSpeed', Number(event.target.value))
            }
          />
          <span className="slider-value">{shapeControls.bounceSpeed.toFixed(2)}x</span>
        </label>
      </section>
    </div>
  )
}

export default App
