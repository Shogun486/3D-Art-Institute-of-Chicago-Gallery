import { keysPressed } from "./movement.js"; 
import { showMenu, hideMenu } from "./menu.js"; 
import { startSearch } from "./paintingData.js";

let lockPointer = true;
let showMenuOnUnlock = false;

export const setupEventListeners = (controls, camera, scene) => {
  document.addEventListener(
    "keydown",
    (event) => onKeyDown(event, controls),
    false
  );
  document.addEventListener(
    "keyup",
    (event) => onKeyUp(event, controls),
    false
  );

  controls.addEventListener("unlock", () => {
    if (showMenuOnUnlock) {
      showMenu();
    }
    showMenuOnUnlock = false;
  });

  document.getElementById("play_button").addEventListener("click", startSearch);
};


function togglePointerLock(controls) {
  if (lockPointer) {
    controls.lock();
  } else {
    showMenuOnUnlock = false;
    controls.unlock();
  }
  lockPointer = !lockPointer;
}

function onKeyDown(event, controls) {
  if (event.key in keysPressed) {
    keysPressed[event.key] = true; 
  }

  if (event.key === "Escape") {
    showMenu(); 
    showMenuOnUnlock = true;
    controls.unlock(); 
    lockPointer = false;
  }
}

function onKeyUp(event, controls) {
  if (event.key in keysPressed) {
    keysPressed[event.key] = false; 
  }
}





