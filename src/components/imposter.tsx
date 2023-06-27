'use client';

import { Canvas } from '@react-three/fiber';
import { Imposter3d } from './imposter3d';
import { Environment, useEnvironment } from '@react-three/drei';
import { Controls } from './controls';

export const Imposter = () => {
  const env = useEnvironment({ files: '/among_us/studio.hdr' });
  return (
    <Canvas>
      <Controls />
      <pointLight position={[10, 10, 10]} />
      <ambientLight intensity={0.05} />

      <Imposter3d />

      <Environment map={env} />
    </Canvas>
  );
};
