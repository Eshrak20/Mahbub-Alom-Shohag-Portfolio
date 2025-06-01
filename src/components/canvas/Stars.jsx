import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();

  // ✅ Use useMemo to avoid recomputing sphere positions on every render
  const sphere = useMemo(
    () => random.inSphere(new Float32Array(2000), { radius: 1.2 }),
    []
  );

  // ✅ Frame updates kept minimal
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.003}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas
        gl={{ powerPreference: "low-power" }} // ✅ Hint to browser for energy saving
        camera={{ position: [0, 0, 1], fov: 75 }}
        dpr={window.devicePixelRatio > 1 ? 1.5 : 1} // ✅ Lower DPR for low-end displays
        resize={{ scroll: false, debounce: { scroll: 50, resize: 50 } }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
