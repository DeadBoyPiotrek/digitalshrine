'use client';

import { Canvas } from '@react-three/fiber';
import { Imposter3d } from './imposter3d';
import { Environment, useEnvironment } from '@react-three/drei';
export const Scene = () => {
  const env = useEnvironment({ files: '/among_us/studio.hdr' });
  return (
    <Canvas>
      <Imposter3d />

      <Environment map={env} />
    </Canvas>
  );
};
