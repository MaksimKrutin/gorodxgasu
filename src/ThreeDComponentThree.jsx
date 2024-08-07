import { useRef, useState } from 'react'
import { Canvas, useFrame} from '@react-three/fiber'
import { useFBX, OrbitControls } from '@react-three/drei'
import './modelThree.css'

const RotatingModelThree = ({isRotating, setIsRotating}) => {
  let fbx = useFBX('nodeTube.fbx')
  let modelRef = useRef();
  const isPointerDown = useRef(false);

  useFrame(() => {
    if (isRotating && modelRef.current) {
      modelRef.current.rotation.z += 0.01;
      modelRef.current.rotation.x += 0.01;
    }
  });

  const handlePointerDown = () => {
    isPointerDown.current = true;
    setIsRotating(false);
  };

  const handlePointerUp = () => {
    isPointerDown.current = false;
    setIsRotating(true);
  };
  return (
    <primitive object={fbx}
     ref={modelRef} 
    onPointerDown={handlePointerDown}
    onPointerUp={handlePointerUp}
    />
  );
};

  const My3DModelThree = () => {
    const[isRotating, setIsRotating] = useState(true);
    return (
    // <div className="model">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.1} />
        <directionalLight color="grey" position={[10, 10, 10]} />
        <RotatingModelThree isRotating={isRotating} setIsRotating={setIsRotating}/>
      </Canvas>
    // </div>
  )
}
  
export default My3DModelThree;
