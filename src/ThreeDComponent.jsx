import { useRef, useState } from 'react'
import { Canvas, useFrame} from '@react-three/fiber'
import { useFBX, OrbitControls } from '@react-three/drei'



const RotatingModel = ({ isRotating, setIsRotating }) => {
  let fbx = useFBX('nodeCorner.fbx');
  let modelRef = useRef();
  const isPointerDown = useRef(false);

  useFrame(() => {
    if (isRotating && !isPointerDown.current && modelRef.current) {
      modelRef.current.rotation.x += 0.01;
      // modelRef.current.rotation.y += 0.01;
      modelRef.current.rotation.z += 0.01;
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

  // const handleModelClick = () => {
  //   setIsRotating(prevState => !prevState);
  // };

  return (
    <primitive object={fbx} 
    ref={modelRef} 
    // onClick={handleModelClick}
    onPointerDown={handlePointerDown}
    onPointerUp={handlePointerUp}
    />
  );
};

  const My3DModel = () => {
    const [isRotating, setIsRotating] = useState(true);
    
    return (
  
    <div style={{ 

      width: '33%', 
      height: '400px', 
      zIndex: 1, 
      position: 'absolute', 
      left: '0', 
      top: '200px', 
      overflow: 'visible',
      

      }} className="model">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="grey" position={[10, 10, 10]} />
        <RotatingModel isRotating={isRotating} 
        setIsRotating={setIsRotating} />
      </Canvas>
    </div>
  )
}
  
  export default My3DModel;

