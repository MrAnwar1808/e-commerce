

import React from 'react';

const ChildComponent = ({ products }) => {

  const calculateTotalValue = (price, quantity) => {

    return price * quantity;

  };

  const totalValue = products.reduce((acc, product) => acc + calculateTotalValue(product.price, product.quantity), 0);

  return (
    <div>
      <h2>Product Inventory</h2>
      <table border="1">

        <thead>
          <tr>
            <th>Product image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Value</th>
          </tr>
        </thead>

        <tbody>

          {products.map((product, index) => (

            <tr key={index}>    

              <td><img src={`/images2/${product.image}`} alt={product.name} style={{ width: '50px', height: '50px' }} /></td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>${calculateTotalValue(product.price, product.quantity)}</td>

            </tr>

          ))}
        </tbody>
      </table>

      <h3>Total Value: ${totalValue}</h3>

    </div>

  );
};

export default ChildComponent;
