import * as THREE from 'three'
const tLoader = new THREE.TextureLoader()

//arrow function, but is almost the same as "export function addBoilerPlateMesh(){}"
export const addBoilerPlateMesh = () => {
    const box = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial = new THREE.MeshBasicMaterial({ color: '0xff0000'})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(2, 0, 0)
    return boxMesh
}

export function addStandardMesh(){
    const box = new THREE.BoxGeometry(1,1, 1)
    const boxMaterial = new THREE.MeshStandardMaterial({ color:0x00ff00})
    const boxMesh = new THREE.Mesh(box,boxMaterial)
    boxMesh.position.set(-2,0,0)
    return boxMesh
}

//add planet boiler plate
export function addSphereMesh(){
    const geometry = new THREE.SphereGeometry(0.3, 200, 100)
    const material = new THREE.MeshPhysicalMaterial({ color:0x00ff00})
    const mesh = new THREE.Mesh(geometry, material)
    return mesh
}

//ground dirt
export function addPlanet1(){
    const color = tLoader.load('/ground dirt/color.JPG')
    const disp = tLoader.load('/ground dirt/displacement.PNG')
    const normal = tLoader.load('/ground dirt/normal.jpg')
    const roughness = tLoader.load('/ground dirt/roughness.jpg')
    const ambient = tLoader.load('/ground dirt/ambient.jpg')

    const geometry = new THREE.SphereGeometry(0.2, 200, 100)
    const material = new THREE.MeshPhysicalMaterial({ 
        map: color,
        aoMap: ambient,
        displacementMap: disp,
        normalMap: normal,
        roughnessMap: roughness
    })
    const mesh = new THREE.Mesh(geometry, material)
    return mesh
}

//ground wet
export function addPlanet2(){
    const color = tLoader.load('/ground wet/color.jpg')
    const height = tLoader.load('/ground wet/height.png')
    const normal = tLoader.load('/ground wet/normal.jpg')
    const roughness = tLoader.load('/ground wet/roughness.jpg')
    const ambient = tLoader.load('/ground wet/ambient.jpg')

    const geometry = new THREE.SphereGeometry(0.4, 200, 100)
    const material = new THREE.MeshPhysicalMaterial({ 
        color: 0xeae15f,
        map: color,
        aoMap: ambient,
        displacementMap: height,
        normalMap: normal,
        roughnessMap: roughness
    })
    const mesh = new THREE.Mesh(geometry, material)
    return mesh
}

//lava
export function addPlanet3(){
    const color = tLoader.load('/lava/color.png')
    const disp = tLoader.load('/lava/displacement.png')
    const normal = tLoader.load('/lava/normal.png')
    const spec = tLoader.load('/lava/specular.png')
    const ambient = tLoader.load('/lava/ambient.png')

    const geometry = new THREE.SphereGeometry(0.7, 400, 400)
    const material = new THREE.MeshPhysicalMaterial({ 
        map: color,
        aoMap: ambient,
        displacementMap: disp,
        normalMap: normal,
        specularColorMap: spec
    })
    const mesh = new THREE.Mesh(geometry, material)
    return mesh
}

//wall plaster
export function addPlanet4(){
    const color = tLoader.load('/wall plaster/color.jpg')
    const disp = tLoader.load('/wall plaster/height.png')
    const normal = tLoader.load('/wall plaster/normal.jpg')
    const roughness = tLoader.load('/wall plaster/roughness.jpg')
    const ambient = tLoader.load('/wall plaster/ambient.jpg')

    const geometry = new THREE.SphereGeometry(0.1, 400, 400)
    const material = new THREE.MeshPhysicalMaterial({ 
        color: 0x66619f,
        map: color,
        aoMap: ambient,
        displacementMap: disp,
        normalMap: normal,
        roughnessMap: roughness
    })
    const mesh = new THREE.Mesh(geometry, material)
    return mesh
}