import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import type { Mesh } from 'three'

type RotatingBoxProps = {
  speed: number
  color: string
}

function RotatingBox({ speed, color }: RotatingBoxProps) {
  const ref = useRef<Mesh>(null)
  useFrame((_, delta) => {
    const mesh = ref.current
    if (!mesh) return
    const s = delta * speed
    mesh.rotation.x += s * 0.5
    mesh.rotation.y += s * 0.35
  })
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

type ThreeSceneProps = {
  /** Multiplier for rotation speed (1 = default). */
  speed?: number
  /** CSS color string for the mesh. */
  color?: string
}

export function ThreeScene({ speed = 1, color = '#4a4a4a' }: ThreeSceneProps) {
  return (
    <div className="three-scene-wrap" aria-label="Three.js preview">
      <Canvas
        camera={{ position: [2.2, 1.8, 2.8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.65} />
        <directionalLight position={[4, 6, 4]} intensity={1.1} />
        <RotatingBox speed={speed} color={color} />
        <OrbitControls enableDamping makeDefault />
      </Canvas>
    </div>
  )
}
