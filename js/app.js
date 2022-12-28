import * as THREE from 'three'
import images from './images'

// https://www.youtube.com/watch?v=V8GnInBUMLo
// 19min17s
function lerp(start, end, t) {
    return start * (1 - t ) + end * t
}

// Mouse coordinates
let targetX = 0
let targetY = 0

// Load images textures for Mesh

const textureZero = new THREE.TextureLoader().load(images.imageZero)
const textureOne = new THREE.TextureLoader().load(images.imageOne)
const textureTwo = new THREE.TextureLoader().load(images.imageTwo)
const textureThree = new THREE.TextureLoader().load(images.imageThree)

class webgl{
    constructor(){
        this.container = document.querySelector('main')
        this.links = [...document.querySelectorAll('li')]
        this.scene = new THREE.Scene()
        // this.persective = 1000 Camera distance on z axis
        this.sizes = new THREE.Vector2(0,0) // Mesh size
        this.offset = new THREE.Vector2(0,0) // Mesh position
        this.uniforms = {
            uTexture: { value: textureZero },
            uAlpha: { value: 0.0 },
            uOffset: { value: new THREE.Vector2(0,0) }
        }
        this.links.forEach((link, idx) => {
            link.addEventListener('mouseenter', () => {
                switch(idx) {
                    case 0:
                        this.uniforms.uTexture.value = textureZero
                        break
                    case 1:
                        this.uniforms.uTexture.value = textureOne
                        break
                    case 2:
                        this.uniforms.uTexture.value = textureTwo
                        break
                    case 3:
                        this.uniforms.uTexture.value = textureThree
                        break
                }
            })
        })
        this.addEventListeners(document.querySelector('ul'))
        this.setupCamera();
    }

    get viewport() {
        let width = window.innerWidth
        let height = window.innerHeight
        let aspect = width / height

        return {
            width,
            height,
            aspectRatio
        }
    }

    addEventListeners(element) {
        element.addEventListener('mouseenter', (e) => {
            this.linksHover = true
        })
        element.addEventListener('mouseleave', (e) => {
            this.linksHover = false
        })
    }

    setupCamera() {
        let fo
    }

}

new webgl()