import React from 'react'
import "./React3fiber.css"
import {Canvas} from "@react-three/fiber"
// import { BoxGeometry } from 'three'


const cube=()=>{
  return(
     <mesh position={[2,0,1]}>
  <boxGeometry/>
  <meshStandardMaterial color={"orange"}/>
   </mesh>
  )
}

const react3fiber = () => {


  return (
  <>
  <Canvas>
    <directionalLight position={[0,0,2]}/>
  <cube/>
   <mesh position={[2,0,1]}>
  <boxGeometry/>
  <meshStandardMaterial color={"orange"}/>
   </mesh>
    <mesh position={[-1,0,1]}>
  <boxGeometry/>
  <meshStandardMaterial color={"orange"}/>
   </mesh>

  </Canvas>
  </>
  )
}

export default react3fiber
