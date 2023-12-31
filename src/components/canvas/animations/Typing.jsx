import { useFBX } from "@react-three/drei";

export const useAnimationFBX = (path) => {
  const fbx = useFBX(path);
  return fbx.animations;
};
