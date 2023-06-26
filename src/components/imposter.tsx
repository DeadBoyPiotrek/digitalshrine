'use client';

import { Canvas } from '@react-three/fiber';
import { Imposter3d } from './imposter3d';
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sphere,
  TransformControls,
  useEnvironment,
} from '@react-three/drei';

export const Imposter = () => {
  const env = useEnvironment({ files: '/among_us/studio.hdr' });
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <ambientLight intensity={0.05} />
      {/* <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial roughness={0.1} metalness={1} envMap={env} />
      </Sphere> */}
      <Imposter3d />
      {/* <ContactShadows position={[0, -1.3, 0]} blur={1} scale={4} far={11} /> */}
      <OrbitControls enableDamping />
      {/* <axesHelper args={[5]} /> */}
      <Environment map={env} />
    </Canvas>
  );
};
