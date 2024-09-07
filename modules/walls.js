import * as THREE from "three";

export function createWalls(scene, textureLoader) {
  let wallGroup = new THREE.Group();
  scene.add(wallGroup);

  const normalTexture = textureLoader.load(
    "img/brick-wall-painted-white.jpg"
   );
   
   const roughnessTexture = textureLoader.load(
    "img/brick-wall-painted-white.jpg"
   );
   
  normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
  roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;

  const wallMaterial = new THREE.MeshStandardMaterial({
    normalMap: normalTexture,
    roughnessMap: roughnessTexture,
    side: THREE.DoubleSide,
  });
  // Front Wall
  const frontWall = new THREE.Mesh( 
    new THREE.BoxGeometry(115, 20, 0.001), 
    wallMaterial 
  );

  frontWall.position.z = -30; 

  // Left Wall
  const leftWall = new THREE.Mesh(
    new THREE.BoxGeometry(115, 115, 0.001), 
    wallMaterial
  );

  leftWall.rotation.y = Math.PI / 2; 
  leftWall.position.x = -27; 

  // Right Wall
  const rightWall = new THREE.Mesh( 
    new THREE.BoxGeometry(115, 115, 0.001), 
    wallMaterial
  );

  rightWall.position.x = 57;
  rightWall.rotation.y = Math.PI / 2; 

  // Back Wall
  const backWall = new THREE.Mesh(
    new THREE.BoxGeometry(115, 20, 0.001),
    wallMaterial 
  );
  backWall.position.z = 57;

  wallGroup.add(frontWall, backWall, leftWall, rightWall);

  return wallGroup;
}
