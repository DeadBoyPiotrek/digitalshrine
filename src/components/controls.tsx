import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export const Controls = () => {
  const orbitControlsRef = useRef<typeof OrbitControls>(null);
  useFrame(() => {
    if (orbitControlsRef.current) {
      orbitControlsRef.current;
      orbitControlsRef.current;
    }
  });
  return <OrbitControls ref={orbitControlsRef} />;
};
