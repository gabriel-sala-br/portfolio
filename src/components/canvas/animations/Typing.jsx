import { useFBX } from "@react-three/drei";

export const useAnimationFBX = (path) => {
  const fbx = useFBX(path);
  return fbx.animations;
};
// 6590738a9e1b858d3d32467a.gltf
