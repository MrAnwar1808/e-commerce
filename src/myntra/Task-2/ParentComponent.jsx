

import React from 'react';
import ChildComponent from './ChildComponent';
import './Task.css'


const ParentComponent = () => {

  const products = [
    { image: "demo2.jpg", name: "Nike", price: 1000, quantity: 10 },
    { image: "demo.jpg", name: "Nike", price: 1000, quantity: 20 },
    {image: "demo3.jpg", name: "Puma", price: 1000, quantity: 30 },
  ];

  return (

    <div>
          
          <ChildComponent products={products} />
    
    </div>

  );
};

export default ParentComponent;
