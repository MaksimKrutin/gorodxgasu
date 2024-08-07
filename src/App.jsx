import React, { useState, useRef } from 'react'
import './App.css'
import './index.css'
import Card from './Projects.jsx'
import Logos from './Logos.jsx'
import datalogos from './dataLogos.jsx'
import { gsap } from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import RunningLine1 from './runningLine1.jsx'
// import My3DModel from './ThreeDComponent.jsx'
// import My3DModelTwo from './ThreeDComponentTwo.jsx'
// import My3DModelThree from './ThreeDComponentThree.jsx'
import { ThemeProvider, useTheme } from './themeContext.jsx';
import ThemeToggle from './toggleButton.jsx';
import './darkLightMode.css'

import ItemRow from './3DComponents.jsx';





function App() {

  //скролл на нужный раздел//
  gsap.registerPlugin(ScrollToPlugin);
  const artRef1 = useRef(null);
  const artRef2 = useRef(null);
  const scrollTo = (target) => 
  gsap.to(window, { duration: 1, scrollTo: target });

  //смена svg картинок//
  // const { isDarkMode } = useTheme();


  //карточки//
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };
  
    const handleNext = () => {
      setCurrentCardIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 1));
    };
  
    const cards = [
      { nameCard: "Наименование 1", imageUrl: "shpunt.jpg", modelName: "nodeMortgage1.fbx" },
      { nameCard: "Наименование 2", imageUrl: "area.jpg", modelName: "nodeTube1.fbx" },
    ];
    //карточки//


  const logos = datalogos.map(item => {
    return (
      <Logos
        siteLink={item.siteLink}
        imgLink={item.imgLink}
      />
    )
  })
    
  return (
    <ThemeProvider>

    <div>

      {logos}
      
      <ThemeToggle />

      <RunningLine1 />


      <ItemRow />
        
      {/* <My3DModel />
      
      <My3DModelTwo />

      <My3DModelThree /> */}
      
      
      
      <h1 className="cardblock">Projects</h1>
      <div>
      <button className="projectsButton">
        About us
      </button>

      <button className="projectsButton" onClick={() => scrollTo(artRef1.current)}>
        Projects
      </button>

      <button className="testsButton" onClick={() => scrollTo(artRef2.current)}>
        Tests
      </button>
      </div>
    
      <div ref={ artRef1 }>
      {/* <div ref={ artRef1 } className={isDarkMode ? 'dark-mode' : 'light-mode'}> */}
        
        <Card 
          nameCard={cards[currentCardIndex].nameCard}
          imageUrl={cards[currentCardIndex].imageUrl}
          modelName={cards[currentCardIndex].modelName}
          onPrev={handlePrev}
          onNext={handleNext} 
          // isDarkMode={isDarkMode}
        />

      </div>

      <section ref={ artRef2 } style={{ marginTop: '650px'}}>

        Test Section

      </section>
      
      <p className="read-the-docs">
        The project for somebody by SK Gorod
      </p>

    </div>
    </ThemeProvider>
    )
}

export default App
