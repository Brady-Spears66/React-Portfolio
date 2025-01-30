import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import './styles.css';

import CanvasLoader from "../Loader";

// @ts-ignore
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();

  // Rotate the ball manually while it floats
  useFrame(() => {
    if (meshRef.current) {
      // @ts-ignore
      meshRef.current.rotation.y += 0.01; // Adjust speed of rotation as needed
      // @ts-ignore
    }
  });

  return (
    <Float speed={10} floatingRange={[0, .6]} floatIntensity={2}>
      <mesh 
        // @ts-ignore
        ref={meshRef} 
        castShadow 
        receiveShadow 
        scale={2.75}
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
        />
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
        <Decal
          position={[0, 0, -1]}
          rotation={[0, Math.PI, 0]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

// @ts-ignore
const BallCanvas = ({ icon }) => {
  return (
    <div className="ball-container">
      <Canvas
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 10], fov: 50 }}
      >
        {/* Independent stationary lights */}
        <ambientLight intensity={0.1} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight
          position={[-5, 5, -5]}
          intensity={0.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Suspense fallback={<CanvasLoader />}>
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
