"use client";

import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Computer from "../../public/Computer";

function GenerateModel() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Computer />
        </Suspense>
        <Environment preset="sunset" />
        <ContactShadows
          opacity={0.5}
          scale={90}
          blur={1}
          far={50}
          resolution={256}
          color="#000000"
          position={[0.2, -4.9, 0]}
        />
      </Canvas>
    </>
  );
}
export default React.memo(GenerateModel);
