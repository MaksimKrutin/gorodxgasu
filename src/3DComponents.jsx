import React from 'react';
import My3DModel from './ThreeDComponent.jsx';
import My3DModelTwo from './ThreeDComponentTwo.jsx';
import My3DModelThree from './ThreeDComponentThree.jsx';
import './ItemRow.css';



const ItemRow = () => {
  return (
    <div className="item-row"> 
    
      <div className="item-row">
        <My3DModel />
      </div>
      <div className="item-row">
        <My3DModelTwo />
      </div>
      <div className="item-row">
        <My3DModelThree />
      </div>
    </div>
  );
};

export default ItemRow;