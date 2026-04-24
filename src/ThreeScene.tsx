import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import type { Mesh } from 'three'

export type ShapeControls = {
  rotationSpeed: number
  scale: number
  stretch: number
  bounceHeight: number
  bounceSpeed: number
}

type StarterShapeProps = {
  controls: ShapeControls
}

function StarterShape({ controls }: StarterShapeProps) {
  const ref = useRef<Mesh>(null)

  useFrame((state, delta) => {
    const mesh = ref.current
    if (!mesh) return
    const s = delta * controls.rotationSpeed
    const t = state.clock.elapsedTime * controls.bounceSpeed
    mesh.rotation.x += s * 0.5
    mesh.rotation.y += s * 0.35
    mesh.position.y = Math.sin(t) * controls.bounceHeight
  })

  const scaleX = Math.max(0.2, controls.scale + controls.stretch)
  const scaleY = Math.max(0.2, controls.scale - controls.stretch)
  const scaleZ = controls.scale

  return (
    <mesh ref={ref} scale={[scaleX, scaleY, scaleZ]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#7dd3fc" roughness={0.35} metalness={0.1} />
    </mesh>
  )
}

type ThreeSceneProps = {
  controls: ShapeControls
}

export function ThreeScene({ controls }: ThreeSceneProps) {
  return (
    <div className="three-scene-wrap" aria-label="Three.js preview">
      <Canvas
        camera={{ position: [2.2, 1.8, 2.8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 4]} intensity={0.95} />
        <pointLight position={[-3, 2, 2]} intensity={0.5} />
        <StarterShape controls={controls} />
        <OrbitControls enableDamping makeDefault />
      </Canvas>
    </div>
  )
}
