import { createPaintings } from "./paintings";
import { addObjectsToScene } from "./sceneHelpers";
import { setupRendering } from "./rendering.js";
import * as THREE from "three";
import { scene, setupScene } from "./scene.js";
import { createWalls } from "./walls.js";
import { setupLighting } from "./lighting.js";
import { setupFloor } from "./floor.js";
import { createCeiling } from "./ceiling.js";
import { createBoundingBoxes } from "./boundingBox.js";
import { setupEventListeners } from "./eventListeners.js";
import { setupPlayButton } from "./menu.js";
import { createFrames } from "./frames.js";

export let paintingData = [];
let data = "";
let arr = [];
let name_of_artist = [];
let piece_name = [];
let descriptions = [];
let dates = [];
let places =[];
let response = "";

// API request
async function get(toSearch)
{
  response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${toSearch}&limit=16`)
  data = await response.json();
  return data.data;
}

// Organize data for each painting
async function displays(i)
{
  while(i < 16)
  {
    let num = data[i].id;
    response = await fetch(`https://api.artic.edu/api/v1/artworks?ids=${num}&fields=image_id,artist_title,title,description,date_display,place_of_origin`)
    let keys = await response.json();    
    let info = keys.data;
    let artist = info[0].artist_title;
    let artName = info[0].title;
    let description  = info[0].description;
    let date = info[0].date_display;
    let place = info[0].place_of_origin;
    let pre_iiif_url = keys.config.iiif_url;
    let image_id_no = info[0].image_id;
    let image_url = `${pre_iiif_url}/${image_id_no}/full/843,/0/default.jpg`;
    arr.push(image_url);
    name_of_artist.push(artist);
    piece_name.push(artName);
    descriptions.push(description);
    dates.push(date);
    places.push(place);
    i++;
  }
  return arr;
}

// Fetch user's choice of paintings
export async function startSearch()
{ 

  data = await get(document.getElementById("about_button").value);
  arr = await displays(0);

  let paintingData = [
    // Front Wall
    ...Array.from({ length: 4 }, (_, i) => ({
      imgSrc: arr[i], 
      width: 11, 
      height: 11, 
      position: { x: -15 + 20 * i, y: 1, z: -29.0 }, 
      rotationY: 0, 
      info: {
        title: piece_name[i],
        artist: name_of_artist[i],
        description: descriptions[i],
        year: dates[i],
        location: places[i],
      },
    })),
    // Back Wall
    ...Array.from({ length: 4 }, (_, i) => ({
      imgSrc: arr[i+4],
      width: 11,
      height: 11,
      position: { x: -15 + 20 * i, y: 1, z: 56.0 },
      rotationY: Math.PI,
      info: {
        title: piece_name[i+4],
        artist: name_of_artist[i+4],
        description: descriptions[i+4],
        year: dates[i+4],
        location: places[i+4],
      },
    })),
    // Left Wall
    ...Array.from({ length: 4 }, (_, i) => ({
      imgSrc: arr[i+8],
      width: 11,
      height: 11,
      position: { x: -26.0, y: 1, z: -15 + 20 * i },
      rotationY: Math.PI / 2,
      info: {
        title: piece_name[i+8],
        artist: name_of_artist[i+8],
        description: descriptions[i+8],
        year: dates[i+8],
        location: places[i+8],
      },
    })),
    // Right Wall
    ...Array.from({ length: 4 }, (_, i) => ({
      imgSrc: arr[i + 12],
      width: 11,
      height: 11,
      position: { x: 56, y: 1, z: -15 + 20 * i },
      rotationY: -Math.PI / 2,
      info: {
        title: piece_name[i + 12],
        artist: name_of_artist[i + 12],
        description: descriptions[i + 12],
        year: dates[i + 12],
        location: places[i + 12],
      },
    })),
  ];

  let { camera, controls, renderer } = setupScene();

  const textureLoader = new THREE.TextureLoader();
  const walls = createWalls(scene, textureLoader);
  const floor = setupFloor(scene);
  const ceiling = createCeiling(scene, textureLoader);
  const paintings = createPaintings(scene, textureLoader, paintingData);
  const lighting = setupLighting(scene, paintings);
  const frames = createFrames(scene, textureLoader); 

  createBoundingBoxes(walls);
  createBoundingBoxes(paintings);
  addObjectsToScene(scene, paintings);
  setupPlayButton(controls);
  setupEventListeners(controls);
  setupRendering(scene, camera, renderer, paintings, controls, walls, frames);
}


