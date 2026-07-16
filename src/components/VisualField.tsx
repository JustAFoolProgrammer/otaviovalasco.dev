import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Mesh } from 'three'
function Orb() { const mesh = useRef<Mesh>(null); useFrame((s) => { if (mesh.current) { mesh.current.rotation.y = s.clock.elapsedTime * .12; mesh.current.rotation.x = s.pointer.y * .15 } }); return <mesh ref={mesh} position={[2, 1, -2]}><icosahedronGeometry args={[1.25, 3]}/><meshBasicMaterial color="#4f8cff" wireframe transparent opacity={.12}/></mesh> }
export default function VisualField() { return <div className="visual-field" aria-hidden="true"><Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]}><Orb /></Canvas></div> }
