import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import "./styles.css";

import CanvasLoader from "../Loader";

// Function to create a rounded texture
const createRoundedTexture = (
  originalTexture: THREE.Texture,
  borderRadius: number = 0.5
) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) return originalTexture;

  const size = 512; // Fixed size for consistency
  canvas.width = size;
  canvas.height = size;

  // Create a temporary image to draw the original texture
  const img = originalTexture.image;

  // Clear canvas
  ctx.clearRect(0, 0, size, size);

  // Create rounded rectangle path
  const radius = size * borderRadius;
  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(size - radius, 0);
  ctx.quadraticCurveTo(size, 0, size, radius);
  ctx.lineTo(size, size - radius);
  ctx.quadraticCurveTo(size, size, size - radius, size);
  ctx.lineTo(radius, size);
  ctx.quadraticCurveTo(0, size, 0, size - radius);
  ctx.lineTo(0, radius);
  ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.closePath();

  // Clip to the rounded rectangle
  ctx.clip();

  // Draw the image
  ctx.drawImage(img, 0, 0, size, size);

  // Create new texture from canvas
  const roundedTexture = new THREE.CanvasTexture(canvas);
  roundedTexture.needsUpdate = true;

  return roundedTexture;
};

interface BallProps {
  imgUrl: string;
  hasRoundedCorners?: boolean;
}

const Ball = ({ imgUrl, hasRoundedCorners }: BallProps) => {
  const [originalTexture] = useTexture([imgUrl]);
  const meshRef = useRef<THREE.Mesh>(null);

  // Process texture based on hasRoundedCorners prop
  const processedTexture = useMemo(() => {
    if (hasRoundedCorners && originalTexture.image) {
      return createRoundedTexture(originalTexture);
    }
    return originalTexture;
  }, [originalTexture, hasRoundedCorners]);

  // Rotate the ball manually while it floats
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Adjust speed of rotation as needed
    }
  });

  return (
    <Float speed={10} floatingRange={[0, 0.6]} floatIntensity={2}>
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
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
          map={processedTexture}
        />
        <Decal
          position={[0, 0, -1]}
          rotation={[0, Math.PI, 0]}
          scale={1}
          map={processedTexture}
        />
      </mesh>
    </Float>
  );
};

interface BallCanvasProps {
  icon: string;
  hasRoundedCorners?: boolean;
}

const BallCanvas = ({ icon, hasRoundedCorners }: BallCanvasProps) => {
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
          <Ball imgUrl={icon} hasRoundedCorners={hasRoundedCorners} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
