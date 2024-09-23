import { useRef, useState } from 'react'
import { Canvas, useFrame} from '@react-three/fiber'
import { useFBX, OrbitControls } from '@react-three/drei'
// import './model.css'



const RotatingModel = ({ isRotating, setIsRotating }) => {
  let fbx = useFBX('nodeCorner.fbx');
  let modelRef = useRef();
  const isPointerDown = useRef(false);
  fbx.scale.set(0.9, 0.9, 0.9);

  useFrame(() => {
    if (isRotating && !isPointerDown.current && modelRef.current) {
      modelRef.current.rotation.z += 0.01;
      modelRef.current.rotation.y += 0.01;
    }
  });

  const handlePointerDown = () => {
    isPointerDown.current = true;
    setIsRotating(false);
  };

  const handlePointerUp = () => {
    isPointerDown.current = false;
    setIsRotating(true);
  }

  return (
    <primitive object={fbx} 
    ref={modelRef} 
    onPointerDown={handlePointerDown}
    onPointerUp={handlePointerUp}
    />
  );
};

  const My3DModel = () => {
    const [isRotating, setIsRotating] = useState(true);

    return (
  
    
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.1} />
        <directionalLight color="grey" position={[10, 10, 10]} />
        <RotatingModel isRotating={isRotating} 
        setIsRotating={setIsRotating} />
      </Canvas>
  )
}
  export default My3DModel;

