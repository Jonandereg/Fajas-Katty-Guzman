import React, { FunctionComponent } from 'react';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import ProducDetails from '../../components/productDetails/productDetails';
import Product from '../../types/product';
import { useParams } from 'react-router-dom';

import image1 from '../../assets/pictures/png-09.png';
import image2 from '../../assets/pictures/png-01.png';
import image3 from '../../assets/pictures/png-02.png';
import image4 from '../../assets/pictures/png-03.png';
import image5 from '../../assets/pictures/png-04.png';
import image6 from '../../assets/pictures/png-05.png';
import image7 from '../../assets/pictures/png-06.png';
import image8 from '../../assets/pictures/png-07.png';
import image9 from '../../assets/pictures/png-08.png'; 

import jpgImage1 from '../../assets/pictures/jpgs/jpg-1.jpg'
import jpgImage2 from '../../assets/pictures/jpgs/jpg-2.jpg'
import './product.scss';

const ProductPage: FunctionComponent = () => {
  const images1 = [image1, image2, image3];

  const images2 = [image4, image5, image6];

  const images3 = [image7, image8, image9];

  let product: Product = { images: [image1, image2],videos:[''],measurements:[''], name: 'testing', description: '', benefits: '' };

  let { pid } = useParams();
  function selectProduct(pid: string) {
    switch (pid) {
      case '1':
        product = { images: [jpgImage1, jpgImage2], videos:[''],measurements:['head','chest','arm','leg'],name: `Faja Deportiva `, description: 'Pensada para usar debajo de la ropa deportiva por personas que tienen exceso de peso ya que recoge la piel y ofrece comodidad al hacer ejercicios o caminar Ideal, en sus diferentes largo, para usar debajo de vestidos de fiesta por disimular los gorditos', benefits: '' };
        break;
      case '2':
        product = { images: [image3, image4], videos:[''],measurements:[''],name: `not a testto`, description: '', benefits: '' };
        break;

      default:
        product = { images: [image1, image2],videos:[''],measurements:[''], name: `testing on ${pid}`, description: '', benefits: '' };

        break;
    }
  }
  selectProduct(pid);
  return (
    <>
      <Navbar />
      <div className='Home_Content'>
        <div className='heroContent'>
          <ProducDetails product={product} />          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
