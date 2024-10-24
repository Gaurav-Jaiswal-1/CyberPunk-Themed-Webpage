import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { RGBShiftShader } from 'three/addons/shaders/RGBShiftShader.js'
import gsap from 'gsap'
// eslint-disable-next-line no-unused-vars
import LocomotiveScroll from 'locomotive-scroll'

const scroll = new LocomotiveScroll()


// scene
const scene = new THREE.Scene()

// camera 
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 4

// HDRI loader
const rgbeLoader = new RGBELoader()
rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/pond_bridge_night_1k.hdr', function(texture) {
  texture.mapping = THREE.EquirectangularReflectionMapping
  // scene.background = texture
  scene.environment = texture
})

// GLTF loader
const loader = new GLTFLoader()

let model

// Load the GLTF model
loader.load(
  './DamagedHelmet.gltf',
  (gltf) => {
    model = gltf.scene
    scene.add(model)
    
    // Adjust model position if needed
    model.position.set(0, 0, 0)
    
    // Adjust model scale if needed
    model.scale.set(1, 1, 1)
  },
  (progress) => {
    console.log(`Loading model... ${(progress.loaded / progress.total * 100)}%`)
  },
  (error) => {
    console.error('An error occurred while loading the model:', error)
  }
)



// renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#canvas'), antialias: true, alpha: true })
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1
renderer.outputEncoding = THREE.sRGBEncoding

// Post-processing
const composer = new EffectComposer(renderer)
const renderPass = new RenderPass(scene, camera)
composer.addPass(renderPass)

const rgbShiftPass = new ShaderPass(RGBShiftShader)
rgbShiftPass.uniforms['amount'].value = 0.0035
composer.addPass(rgbShiftPass)



window.addEventListener('mousemove', (e) => {
  if (model) {
    const rotationX = (e.clientX / window.innerHeight - 0.5) * (Math.PI*.9)
    const rotationY = (e.clientY / window.innerWidth - 0.5) * (Math.PI*.9)
    gsap.to(model.rotation, { y: rotationX, duration: 0.5 })
    gsap.to(model.rotation, { x: rotationY, duration: 0.5 })
  }
})

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
})  


// animate
function animate() {
  window.requestAnimationFrame(animate)
  
  if (model) {
    model.rotation.y += 0.005
  }
  
  
  composer.render()
}
animate()
