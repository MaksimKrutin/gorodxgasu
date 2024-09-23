import { useRef, useState } from 'react'
import { Canvas, useFrame} from '@react-three/fiber'
import { useFBX, OrbitControls } from '@react-three/drei'
// import './modelTwo.css'

const RotatingModelTwo = ({isRotating, setIsRotating}) => {
  let fbx = useFBX('nodeMortgage.fbx')
  let modelRef = useRef();
  const isPointerDown = useRef(false);
  
  useFrame(() => {
    if (isRotating && !isPointerDown.current && modelRef.current) {
      modelRef.current.rotation.y += 0.01;
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
  

  // const handleModelClick = () => {
  //   setIsRotating(prevState => !prevState);
  // };

  return (
    <primitive object={fbx}
     ref={modelRef} 
    //  onClick={handleModelClick}
    onPointerDown={handlePointerDown}
    onPointerUp={handlePointerUp}
    />
  );
};

  const My3DModelTwo = () => {
    const[isRotating, setIsRotating] = useState(true);
    return (
    // <div className="model">
      <Canvas> 
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.1} />
        <directionalLight color="grey" position={[10, 10, 10]} />
        <RotatingModelTwo isRotating={isRotating} setIsRotating={setIsRotating}/>
      </Canvas>
    // </div>
  )
}
  
  export default My3DModelTwo;
