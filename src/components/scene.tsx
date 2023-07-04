'use client';

import { Canvas } from '@react-three/fiber';
import { Imposter3d } from './imposter3d';
import { Environment } from '@react-three/drei';
export const Scene = () => {
  return (
    <Canvas>
      <Imposter3d />
      <Environment files={'/env/studio.hdr'} />
    </Canvas>
  );
};
