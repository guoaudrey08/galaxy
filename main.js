import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh, addStandardMesh, addSphereMesh, addPlanet1, addPlanet2, addPlanet3, addPlanet4 } from './addMeshes'
import { addLight, addLight2 } from './addLights'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

//setting up 3 essentials
const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({antialias:true})
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth/window.innerHeight,
  0.1,
  100
)
camera.position.set(0,0,12)

//let mesh
const controls = new OrbitControls(camera, renderer.domElement)
const meshes = {}
let tick = 0;

//calling the function
init()
function init(){
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  //meshes
  meshes.planet1 = addPlanet1()
  meshes.planet2 = addPlanet2()
  meshes.planet3 = addPlanet3()
  meshes.planet4 = addPlanet4()
  // meshes.planet5 = addPlanet5()
  // meshes.planet6 = addPlanet6()
  // meshes.planet7 = addPlanet7()
  console.log(meshes.default)

  //lights
  meshes.defaultLight = addLight()
  meshes.ambientLight = addLight2()

  //scene operations
  scene.add(meshes.planet1)
  scene.add(meshes.planet2)
  scene.add(meshes.planet3)
  scene.add(meshes.planet4)
  // scene.add(meshes.planet5)
  // scene.add(meshes.planet6)
  // scene.add(meshes.planet7)
  scene.add(meshes.defaultLight)
  scene.add(meshes.ambientLight)

  resize()
  animate()
}

//when you resize the window, the scene adjusts
function resize (){
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })
}

function animate(){
  requestAnimationFrame(animate)  //calls itself 60 times a second
  //mesh.position.x += 0.01
  // meshes.default.position.x += 0.01
  // meshes.default.position.y += 0.01
  // meshes.default.position.z += 0.01
  
  meshes.planet1.position.x = 4 * Math.sin(tick) * 0.5
  meshes.planet1.position.y = 4 * Math.cos(tick) * 0.5

  meshes.planet1.rotation.x += 0.009
  meshes.planet1.rotation.y += 0.009

  meshes.planet2.position.x = 5 * Math.sin(tick * 2)
  meshes.planet2.position.y = 5 * Math.cos(tick * 2)

  meshes.planet2.rotation.x += 0.005
  meshes.planet2.rotation.y += 0.005

  meshes.planet3.position.x = 10 * Math.sin(tick) * 0.8
  meshes.planet3.position.y = 10 * Math.cos(tick) * 0.8

  meshes.planet3.rotation.x += 0.01
  meshes.planet3.rotation.y += 0.01

  meshes.planet4.rotation.x += 0.01
  meshes.planet4.rotation.y += 0.01

  //meshes.default.position.y = Math.sin(tick);

  // meshes.default.rotation.y += 0.01
  // meshes.default.rotation.x += 0.01

  // meshes.standard.rotation.y += 0.01
  // meshes.standard.rotation.x += 0.01

  tick += 0.01;

  renderer.render(scene, camera)
}