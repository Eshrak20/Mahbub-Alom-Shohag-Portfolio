import React, { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, resetTrigger }) => {
  const ref = useRef();
  const [decal] = useTexture([imgUrl]);

  // Default rotation
  const defaultRotation = useMemo(() => [0, 0, 0], []);

  // Smoothly reset rotation
  useFrame(() => {
    if (resetTrigger.current && ref.current) {
      ref.current.rotation.x += (defaultRotation[0] - ref.current.rotation.x) * 0.1;
      ref.current.rotation.y += (defaultRotation[1] - ref.current.rotation.y) * 0.1;
      ref.current.rotation.z += (defaultRotation[2] - ref.current.rotation.z) * 0.1;
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 2, 2]} intensity={0.5} />
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        scale={2.75}
      >
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
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const resetTrigger = useRef(false);
  const timeoutRef = useRef();

  // Reset after 300ms of inactivity
  const handleStart = () => {
    resetTrigger.current = false;
    clearTimeout(timeoutRef.current);
  };

  const handleEnd = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      resetTrigger.current = true;
    }, 300);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current); // cleanup
  }, []);

  return (
    <Canvas
      frameloop="always"
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: true, powerPreference: "low-power" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} onStart={handleStart} onEnd={handleEnd} />
        <Ball imgUrl={icon} resetTrigger={resetTrigger} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
