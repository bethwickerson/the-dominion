import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
//import Img1 from '../components/blog/blog1.png'

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture()
  },
  // Vertex Shader
  glsl`
    precision mediump float;
 
    varying vec2 vUv;
    varying float vWave;

    uniform float uTime;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);

    void main() {
      vUv = uv;

      vec3 pos = position;
      float noiseFreq = 2.0;
      float noiseAmp = 0.4;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;

    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;

    varying vec2 vUv;
    varying float vWave;

    void main() {
      float wave = vWave * 0.02;
      vec3 texture = texture2D(uTexture, vUv + wave).rgb;
      gl_FragColor = vec4(texture, 1.0); 
    }
  `
);

extend({ WaveShaderMaterial });

const Wave = () => {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  const [image] = useLoader(THREE.TextureLoader, [
    "../../blog/blog1.png"
  ]);

  return (
    <mesh>
      <planeBufferGeometry args={[1., 0.6, 16, 16]} />
      <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
    </mesh>
  );
};


const Blog = () => {
  return (
    <>
      <Canvas camera={{ fov: 12, position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Wave />
        </Suspense>
      </Canvas>
      <div className="Blog">
        <article>
          <em>August 30, 2021</em>
          <h1>The Dominion Conic Plugin for Grasshopper/Rhino3D went public on Github.</h1>
          <p>The Dominion is created and supported by Daniel Christev, Michael Wickerson, Peter Davis, and Beth Wickerson</p>
          <p>We are looking to highlight and promote creative designers that utilize the new conic plugin for grasshopper/rhino3D. More information coming soon!</p>
          <p><a href="https://github.com/bulgos/TheDominion" target="_blank" rel="noreferrer">https://github.com/bulgos/TheDominion</a></p>
        </article>
      </div>
    </>
  );
}

export default Blog;