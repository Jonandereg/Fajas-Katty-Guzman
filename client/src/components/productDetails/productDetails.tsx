import React, { FunctionComponent} from 'react';
import Product from '../../types/product';
import './productDetails.scss'
import Measurements from '../measurementsInput/measurements';

interface ProductProps {
  product: Product;
}

const ProductDetails: FunctionComponent<ProductProps> = (props) => {

 

  return (
    <>
      <div className='Product_Container'>
       <div className="Container_Imgs">
       <img src={props.product.images[0]} alt="Card Back"/>
       <img src={props.product.images[1]} className="img-top" alt="Card Front"/>

       </div>
       <div className="Container_Text">
        <h1>{props.product.name}</h1>
          <p>{props.product.description}</p>
       </div>
       <div className="Container_Button">
        <Measurements product={props.product}/>  
       </div>
        
      </div>
    </>
  );
};

export default ProductDetails;
