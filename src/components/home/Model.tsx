"use client";

import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";

interface ModelProps {
  url: string;
}

export const Model = ({ url }: ModelProps) => {
  const { scene } = useGLTF(url);

  // Deep clone for multiple instances
  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  // Center and scale the model
  useMemo(() => {
    const box = new THREE.Box3().setFromObject(clonedScene);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());
    clonedScene.position.sub(center);

    const scale = 2 / size; // Adjust scale as needed
    clonedScene.scale.set(scale, scale, scale);
  }, [clonedScene]);

  return <primitive object={clonedScene} />;
};
