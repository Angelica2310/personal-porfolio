"use client";

import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Model } from "./Computer";
function GenerateModel() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Model position={[0, -2, -1]} />
        </Suspense>
        <Environment preset="sunset" />
        <ContactShadows
          opacity={0.5}
          scale={50}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
          position={[0, -2.5, 0]}
        />
      </Canvas>
    </>
  );
}
export default React.memo(GenerateModel);
