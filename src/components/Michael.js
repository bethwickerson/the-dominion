import * as THREE from 'three'
import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, extend, /*useThree,*/ useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import { Water } from 'three-stdlib'

extend({ Water })

function Ocean() {
  const ref = useRef()
  //const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '/michael/waternormals.jpeg')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xe4e12c,
      waterColor: 0x003366,
      distortionScale: 12,
      fog: true,
      //format: gl.encoding
    }),
    [waterNormals]
  )
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} position-y={-25} />
}

function Box() {
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.position.y = 5 + Math.sin(state.clock.elapsedTime) * 20
    ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += delta
  })
  return (
    <mesh ref={ref} scale={25}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}

export default function Home() {
  return (
    <Canvas camera={{ position: [0, 9, 100], fov: 55, near: 1, far: 20000 }}>
      <pointLight position={[100, 100, 100]} />
      <pointLight position={[-100, -100, -100]} />
      <Suspense fallback={null}>
        <Ocean />
        <Box />
      </Suspense>
      <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
      <OrbitControls />
    </Canvas>
  )
}
