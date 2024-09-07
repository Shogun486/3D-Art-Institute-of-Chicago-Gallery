import * as THREE from "three";

export const createCeiling = (scene, textureLoader) => {
  const colorTexture = textureLoader.load(
    "img/light-gray-concrete-wall.jpg" 
  );
  const displacementTexture = textureLoader.load(
    "img/light-gray-concrete-wall.jpg" 
  );
  const aoTexture = textureLoader.load(
    "img/light-gray-concrete-wall.jpg" 
  );
  const emissionTexture = textureLoader.load(
    "img/light-gray-concrete-wall.jpg" 
  );
  const metalnessTexture = textureLoader.load(
    "img/light-gray-concrete-wall.jpg" 
  );
  const normalGLTexture = textureLoader.load(
    "img/light-gray-concrete-wall.jpg" 
  );
  const roughnessTexture = textureLoader.load(
    "img/light-gray-concrete-wall.jpg" 
  );

  colorTexture.wrapS = colorTexture.wrapT = THREE.RepeatWrapping;
  displacementTexture.wrapS = displacementTexture.wrapT = THREE.RepeatWrapping;
  aoTexture.wrapS = aoTexture.wrapT = THREE.RepeatWrapping;
  emissionTexture.wrapS = emissionTexture.wrapT = THREE.RepeatWrapping;
  metalnessTexture.wrapS = metalnessTexture.wrapT = THREE.RepeatWrapping;
  normalGLTexture.wrapS = normalGLTexture.wrapT = THREE.RepeatWrapping;
  roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;

  const ceilingGeometry = new THREE.PlaneGeometry(120, 120);
  const ceilingMaterial = new THREE.MeshLambertMaterial({
    map: colorTexture,
    displacementMap: displacementTexture,
    aoMap: aoTexture,
    emissiveMap: emissionTexture,
    metalnessMap: metalnessTexture,
    normalMap: normalGLTexture,
    normalMapType: THREE.NormalMap,
    roughnessMap: roughnessTexture,
    displacementScale: 0.1,
    side: THREE.DoubleSide,
  });
  const ceilingPlane = new THREE.Mesh(ceilingGeometry, ceilingMaterial);

  ceilingPlane.rotation.x = Math.PI / 2;

  ceilingPlane.position.y = 9;

  scene.add(ceilingPlane);
};
