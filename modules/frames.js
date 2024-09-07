import * as THREE from "three";

export function createFrames(scene, textureLoader) {
  let framesGroup = new THREE.Group();
  scene.add(framesGroup);

  const colorTexture = textureLoader.load(
    "img/frame.jpg"
  );
  const displacementTexture = textureLoader.load(
    "img/frame.jpg"
  );
  const normalTexture = textureLoader.load(
    "img/frame.jpg"
  );
  const roughnessTexture = textureLoader.load(
    "img/frame.jpg"
  );
  const aoTexture = textureLoader.load(
    "img/frame.jpg"
  );

  colorTexture.wrapS = colorTexture.wrapT = THREE.RepeatWrapping;
  displacementTexture.wrapS = displacementTexture.wrapT = THREE.RepeatWrapping;
  normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
  roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;
  aoTexture.wrapS = aoTexture.wrapT = THREE.RepeatWrapping;

  const frameGeometry = new THREE.PlaneGeometry(13, 13);
  const framesMaterial = new THREE.MeshStandardMaterial({
    map: colorTexture,
    displacementMap: displacementTexture,
    normalMap: normalTexture,
    roughnessMap: roughnessTexture,
    aoMap: aoTexture,
    displacementScale: 0.1,
    side: THREE.DoubleSide,
  });

  let ctr = 0;
  let arr = [];
  while(ctr < 4)
  {
    arr[ctr] = new THREE.Mesh(frameGeometry, framesMaterial);
    ctr++;
  }
 
  ctr = 0;
  // Front wall
  arr.forEach((frame) => {
    frame.position.x = -15 + 20 * ctr;
    frame.position.y = 1;
    frame.position.z = -29.5;
    framesGroup.add(frame);
    ctr++;
  });

  ctr = 0;
  arr = [];
  while(ctr < 4)
  {
    arr[ctr] = new THREE.Mesh(frameGeometry, framesMaterial);
    ctr++;
  }

  ctr = 0;
  // Back wall
  arr.forEach((frame) => {
    frame.position.x = -15 + 20 * ctr;
    frame.position.y = 1;
    frame.position.z = 56.5;
    framesGroup.add(frame);
    ctr++;
  });

  ctr = 0;
  arr = [];
  while(ctr < 4)
  {
    arr[ctr] = new THREE.Mesh(frameGeometry, framesMaterial);
    ctr++;
  }

  ctr = 0;
  // Left wall
  arr.forEach((frame) => {
    frame.rotation.y = Math.PI / 2;
    frame.position.x = -26.5;
    frame.position.y = 1;
    frame.position.z = -15 + 20 * ctr;
    framesGroup.add(frame);
    ctr++;
  });

  ctr = 0;
  arr = [];
  while(ctr < 4)
  {
    arr[ctr] = new THREE.Mesh(frameGeometry, framesMaterial);
    ctr++;
  }

  ctr = 0;
  // Right wall
  arr.forEach((frame) => {
    frame.rotation.y = -Math.PI / 2;
    frame.position.x = 56.5;
    frame.position.y = 1;
    frame.position.z = -15 + 20 * ctr;
    framesGroup.add(frame);
    ctr++;
  });

  return framesGroup;
}
