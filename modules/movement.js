import * as THREE from 'three';

export const keysPressed = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};

export const updateMovement = (delta, controls, camera, walls) => {
  const moveSpeed = 14 * delta; 

  const previousPosition = camera.position.clone(); 

  if (keysPressed.ArrowRight) {
    controls.moveRight(moveSpeed);
  }
  if (keysPressed.ArrowLeft) {
    controls.moveRight(-moveSpeed);
  }
  if (keysPressed.ArrowUp) {
    controls.moveForward(moveSpeed);
  }
  if (keysPressed.ArrowDown) {
    controls.moveForward(-moveSpeed);
  }

  if (checkCollision(camera, walls)) {
    camera.position.copy(previousPosition); 
  }
};

export const checkCollision = (camera, walls) => {
  const playerBoundingBox = new THREE.Box3(); 
  const cameraWorldPosition = new THREE.Vector3(); 
  camera.getWorldPosition(cameraWorldPosition); 
  playerBoundingBox.setFromCenterAndSize(
    cameraWorldPosition,
    new THREE.Vector3(1, 1, 1) 
  );

  for (let i = 0; i < walls.children.length; i++) {
    const wall = walls.children[i];
    if (playerBoundingBox.intersectsBox(wall.BoundingBox)) {
      return true;
    }
  }

  return false; 
};
