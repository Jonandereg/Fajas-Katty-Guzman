import React, { FunctionComponent} from 'react';
import { Row, Col } from 'antd';
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
        <h1>{props.product.name}</h1>
      
       <Row>
    <Col span={18} push={6}>
    <div className="Container_Text">        
          <p>{props.product.description}</p>          
       </div>
    </Col>
    <Col span={6} pull={18}>
    <div className="Container_Imgs">
       <img src={props.product.images[0]} alt="Card Back"/>
       <img src={props.product.images[1]} className="img-top" alt="Card Front"/>
       </div>
    </Col>
  </Row>
       
       <div className="Container_Button">
        <Measurements product={props.product}/>  
       </div>
        
      </div>
    </>
  );
};

export default ProductDetails;
