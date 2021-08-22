import * as THREE from 'three'
import React, { useEffect, useRef, Suspense, useMemo } from 'react'
import { Canvas, extend, /*useThree,*/ useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Water } from 'three-stdlib'
import { ReactComponent as ReactLogo } from './home/dominion-logo.svg'
import { iconIntro } from "./Animate"

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

export default function Home() {

  let icon = useRef(null);

  //When the component mounts
  useEffect(() => {
    iconIntro(icon)

  });

  return (
    <>
      <Canvas camera={{ position: [0, 9, 100], fov: 55, near: 1, far: 20000 }}>
        <pointLight position={[100, 100, 100]} />
        <pointLight position={[-100, -100, -100]} />
        <Suspense fallback={null}>
          <Ocean />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <div className="Home">
        <ReactLogo ref={(el) => (icon = el)} />
      </div>
    </>
  )
}
