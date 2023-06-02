import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Sphere } from '@react-three/drei';

function Landing(props) {

  return (
    <div style={{ width: "100%", height: "90vh", position: "relative" }}>
      <Canvas
        shadows
        style={{ height: "100%" }}
        camera={{ position: [0, 0, 20], near: 0.1, far: 100 }}
        className="canvas"
        dpr={[1, 2]}
        gl={{ alpha: true }}
      >
        <PerspectiveCamera
          fov={75}
          aspect={window.innerWidth / window.innerHeight}
          near={0.1}
          far={100}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
        </PerspectiveCamera>
        <Sphere args={[8, 32, 32]}>{/* <GradientSphereMaterial /> */}</Sphere>
      </Canvas>
    </div>
  );
}

export default Landing;
