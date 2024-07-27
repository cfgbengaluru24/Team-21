import React from 'react';
import ProductCard from '../../components/product/ProductCard';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
const ProductList = () => {
   
        const navigate = useNavigate();
        const handleDataClick = () => {
            navigate('/Request');
        
        };
    
    return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-extrabold text-center text-green-400 mb-6">Our Products</h2>
      <div className="flex flex-wrap justify-center">
        <ProductCard
          image="https://www.salaambaalaktrust.com/blog/wp-content/uploads/2022/02/Tax-Exemption-1024x683.jpg"
          title="Lantana Elephants"
          price={10000}
        />
        <ProductCard
          image="https://www.salaambaalaktrust.com/blog/wp-content/uploads/2022/02/Tax-Exemption-1024x683.jpg"
          title="Artifacts"
          price={5000}
        />
        <ProductCard
          image="https://www.salaambaalaktrust.com/blog/wp-content/uploads/2022/02/Tax-Exemption-1024x683.jpg"
          title="Biomass"
          price={4000}
        />
      </div>
    </div>
    <div className="text-green-400">
       <p> Our products are not always available , it is subject to the raw materials available please fill in the details so we can reach you</p>
    </div>
    <button className="mt-14 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-48" onClick={handleDataClick}> CLICK HERE</button>
    <Footer/>
    </>

  );
};

export default ProductList;
