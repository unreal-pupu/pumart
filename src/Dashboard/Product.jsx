import React, { useState } from "react";
import BAYC from '../assets/BAYC.jpg';
import BAYD from '../assets/BAYD.jpg';
import BAYE from '../assets/BAYE.jpg';
import BAYF from '../assets/BAYF.jpg';

const Product = () => {
  const [products, setProducts] = useState([BAYC, BAYD, BAYE, BAYF]);

  const handleAddProduct = () => {
    const newProduct = BAYC; 
    setProducts([...products, newProduct]);
  };

  const handleImportProducts = () => {
    const importedProducts = [BAYD, BAYE]; 
    setProducts([...products, ...importedProducts]);
  };

  return (
    <div className="p-6 bg-[#fffcdc] min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="flex gap-4 mb-6">
        <button
          onClick={handleAddProduct}
          className="bg-[#14281d] text-white px-4 py-2 rounded hover:text-[#fffcdc]"
        >
          Add Product
        </button>
        <button
          onClick={handleImportProducts}
          className="bg-[#14281d] text-white px-4 py-2 rounded hover:text-[#fffcdc]"
        >
          Import Products
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <img
            key={index}
            src={product}
            alt={`Product ${index + 1}`}
            className="w-full h-40 object-cover rounded shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default Product;