import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import { RGBELoader } from 'https://unpkg.com/three@0.119.0/examples/jsm/loaders/RGBELoader.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.119.0/examples/jsm/loaders/GLTFLoader.js';
import {canvas, renderer, scene, camera, control} from './base.js'




const loop = () =>
{
  control.update();
  renderer.render(scene, camera);
  requestAnimationFrame(loop)
}
loop()
