import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Points, BufferGeometry, BufferAttribute } from 'three'
import * as THREE from 'three'

function ParticleGalaxy() {
  const ref = useRef<Points>(null!)

  const [positions, colors] = useMemo(() => {
    const count = 4000
    const pos = new Float32Array(count * 3)
    const cols = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const radius = Math.pow(Math.random(), 1.5) * 5
      const angle = Math.random() * Math.PI * 2
      const spread = (Math.random() - 0.5) * 0.8 * (1 - radius / 5)

      pos[i * 3] = Math.cos(angle) * radius + spread
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.6 * (1 - radius / 5)
      pos[i * 3 + 2] = Math.sin(angle) * radius + spread

      const hue = 0.55 + (radius / 5) * 0.1
      const saturation = 0.6 + Math.random() * 0.3
      const lightness = 0.3 + Math.random() * 0.3
      const c = new THREE.Color().setHSL(hue, saturation, lightness)
      cols[i * 3] = c.r
      cols[i * 3 + 1] = c.g
      cols[i * 3 + 2] = c.b
    }
    return [pos, cols]
  }, [])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.04
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.015) * 0.04
    }
  })

  const geometry = useMemo(() => {
    const geo = new BufferGeometry()
    geo.setAttribute('position', new BufferAttribute(positions, 3))
    geo.setAttribute('color', new BufferAttribute(colors, 3))
    return geo
  }, [positions, colors])

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 0]} intensity={0.3} color="#06b6d4" />
      <ParticleGalaxy />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </>
  )
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }} dpr={[1, 2]}>
      <Scene />
    </Canvas>
  )
}
