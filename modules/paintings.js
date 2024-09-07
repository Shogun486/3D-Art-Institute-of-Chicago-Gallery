import * as THREE from 'three';
import { addObjectsToScene } from "./sceneHelpers";
import { scene as i} from "./scene.js";

export function createPaintings(scene, textureLoader, paintingData) {
 
  let paintings = [];

  paintingData.forEach((data) => {
   
    const painting = new THREE.Mesh( 
      new THREE.PlaneGeometry(data.width, data.height),
      new THREE.MeshLambertMaterial({ map: textureLoader.load(data.imgSrc)})
    );

    painting.position.set(data.position.x, data.position.y, data.position.z); 
    painting.rotation.y = data.rotationY; 

    
    painting.userData = {
      type: 'painting', 
      info: data.info, 
    };

    painting.castShadow = true; 
    painting.receiveShadow = true; 

    paintings.push(painting); 
  });
  addObjectsToScene(i, paintings);
  return paintings; 
}
