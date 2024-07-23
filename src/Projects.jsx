import React, { useState } from 'react'
import './Projects.css'
import './index.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useFBX } from '@react-three/drei';
// import arrowBackLight from '/arrow_back.svg';
// import arrowBackDark from '/arrow_back_black.svg';
// import arrowForwardLight from '/arrow_forward.svg';
// import arrowForwardDark from '/arrow_forward_black.svg';



const ModelWindow = ({ isOpen, onClose, modelPath }) => {
    return (
      <div className={`model-window ${isOpen ? 'open' : ''}`}>
        <div className="model-content">
          {isOpen && (
            <Canvas>
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <directionalLight intensity={0.5} />
              <Model modelPath={modelPath}/>
            </Canvas>
          )}
        </div>
      </div>
    );
  };
  
  const Model = ({ modelPath }) => { 
    const fbx = useFBX(modelPath);
    return <primitive object={fbx} />;
  };
  
  const Card = ({ nameCard, imageUrl, modelName, onPrev, onNext, isDarkMode }) => {
    const [isWindowOpen, setIsWindowOpen] = useState(false);
  
    const handleToggleWindow = () => {
      setIsWindowOpen(prevState => !prevState);
    };

    return (
      <div className="card-container">
        <div className="card">
          <img src={imageUrl} className="card--image" />
        </div>
        <div>
            <button className="projectsButton prev-button" onClick={onPrev}>
                {/* <img src={isDarkMode ? "/arrow_b_b.svg" : "/arrow_b.svg"} /> */}
                <img src="arrow_back_grey.svg" />
            </button>
            <button className="projectsButton forw-button" onClick={onNext}>
                {/* <img src={isDarkMode ? "/arrow_f_b.svg" : "/arrow_f.svg"} /> */}
                <img src="arrow_forward_grey.svg" />
            </button>
        </div>
        
        <div className="card--content">
        <div className="card--stats">
            <span>{nameCard}</span>
          </div>
          <div className="card--buttons">
          <button className="projectsButton" style={{ marginLeft: '40px' }}>
              Information
            </button>
            <button className="projectsButton" onClick={handleToggleWindow}>
              Show 3D model
            </button>
            </div>
            </div>
        <ModelWindow isOpen={isWindowOpen} onClose={() => setIsWindowOpen(false)} modelPath={modelName} />
      </div>
    );
  };
  export default Card;


