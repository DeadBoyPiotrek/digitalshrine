'use client';

import { Canvas } from '@react-three/fiber';
import { Imposter3d } from './imposter3d';
import { Environment, OrbitControls, useEnvironment } from '@react-three/drei';

export const Imposter = () => {
  const env = useEnvironment({ files: '/among_us/studio.hdr' });
  return (
    <Canvas>
      <OrbitControls />
      {/* <pointLight position={[10, 10, 10]} intensity={0.01} /> */}
      {/* <ambientLight intensity={0.05} /> */}

      <Imposter3d />

      <Environment map={env} />
    </Canvas>
  );
};
