import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ObjectViewer = () => {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      {/* Add 3D model here */}
    </Canvas>
  );
};

export default ObjectViewer;
