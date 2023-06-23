'use client';

import { Canvas } from '@react-three/fiber';
import { Imposter3d } from './imposter3d';
import { ContactShadows } from '@react-three/drei';

export const Imposter = () => {
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <Imposter3d />
      {/* <ContactShadows position={[0, -1, 0]} blur={2.3} scale={20} far={11} /> */}
    </Canvas>
  );
};
