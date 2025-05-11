import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { scene } = useGLTF("code_3d/scene.gltf");

  return (
    <primitive
      object={scene}
      scale={props.isMobile ? 0.03 : 0.02}
      position={props.isMobile ? [0, -3, -95] : [0, -3, -95]}
      rotation={[0, 0, 0]}
    />
  );
}

useGLTF.preload("code_3d/scene.gltf");
