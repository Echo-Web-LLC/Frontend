import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function GradientSphereMaterial() {
  const ref = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    ref.current.uniforms.time.value = time;
  });

  return (
    <shaderMaterial
      ref={ref}
      attach="material"
      vertexShader={`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `}
      fragmentShader={`
        uniform float time;
        varying vec2 vUv;
        void main() {
          vec3 colorA = vec3(231.0, 231.0, 231.0) / 255.0;
          vec3 colorB = vec3(39.0, 39.0, 39.0) / 255.0;
          vec3 gradient = mix(colorA, colorB, vUv.y);
          vec2 center = vec2(0.5, 0.5);
          float radius = 2.0;
          float glowStrength = 1.0 + 1.0 * sin(1.0 * time);
          float distanceFromCenter = distance(vUv, center);
          float glowFactor = smoothstep(radius - 0.1, radius + 0.1, distanceFromCenter);
          vec3 glowColor = vec3(0, 0, 0); // Set the glow color to white
          vec4 glow = vec4(glowColor, 1.0) * glowStrength * (1.0 - glowFactor);
          gl_FragColor = vec4(glow.rgb + gradient.rgb, 1.0);
        }
      `}
      uniforms={{
        time: { value: 0.0 },
      }}
    />
  );
}

function Landing(props) {
  return (
    <>
      <div style={{ width: '100%', height: '90vh', position: 'relative' }} className="canvas_3D_container">
        <Canvas
          style={{ width: '100%', height: '105%' }}
          camera={{ position: [0, 0, 20], near: 0.1, far: 100 }}
          className="canvas"
          dpr={[1, 2]}
        >
          <PerspectiveCamera fov={75} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
          </PerspectiveCamera>
          <Sphere args={[8, 32, 32]}>
            <GradientSphereMaterial />
          </Sphere>
        </Canvas>
      </div>
    </>
  );
}

export default Landing;