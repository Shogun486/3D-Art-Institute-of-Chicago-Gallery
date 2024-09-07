import * as THREE from "three";
import { displayPaintingInfo, hidePaintingInfo } from "./paintingInfo.js";
import { updateMovement } from "./movement.js";

export const setupRendering = (
  scene,
  camera,
  renderer,
  paintings,
  controls,
  walls,
  frames
) => {
  const clock = new THREE.Clock();

  function render() {
    const delta = clock.getDelta();

    updateMovement(delta, controls, camera, walls);

    const distanceThreshold = 7;

    let paintingToShow;
    paintings.forEach((painting) => {
      
      const distanceToPainting = camera.position.distanceTo(painting.position);
      if (distanceToPainting < distanceThreshold) {
        paintingToShow = painting;
      }
    });

    if (paintingToShow) {
      displayPaintingInfo(paintingToShow.userData.info);
    } else {
      hidePaintingInfo();
    }

    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;
      
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  };

  render();
  
};
