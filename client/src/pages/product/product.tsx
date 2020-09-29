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

import video1 from '../../assets/videos/Contorno-muñeca.mp4'
import video2 from '../../assets/videos/contornoBajoRodilla.mp4'
import video3 from '../../assets/videos/contornoCadera.mp4'
import video4 from '../../assets/videos/contornoEmpeine.mp4'
import video5 from '../../assets/videos/ContornoMano.mp4'
import video6 from '../../assets/videos/ContornoMedioMuslo.mp4'
import video7 from '../../assets/videos/ContornoMuñeca.mp4'
import video8 from '../../assets/videos/ContornoMusloSuperior.mp4'
import video9 from '../../assets/videos/ContornoSobreRodilla.mp4'
import video10 from '../../assets/videos/ContornoTalonEmpeine.mp4'
import video11 from '../../assets/videos/largo Ombligo-mitadIngle.mp4'
import video12 from '../../assets/videos/largo-manga-bajoCodo.mp4'
import video13 from '../../assets/videos/Largo-manga-muñeca.mp4'
import video14 from '../../assets/videos/Largo-manga-sobreCodo.mp4'
import video15 from '../../assets/videos/largo-mediaPierna-tobillo.mp4'
import video16 from '../../assets/videos/largo-rodilla-tobillo.mp4'
import video17 from '../../assets/videos/largoEspalda.mp4'
import video18 from '../../assets/videos/LargoMano.mp4'
import video19 from '../../assets/videos/LargoPie.mp4'
import video20 from '../../assets/videos/LargoSobreRodilla.mp4'
import video21 from '../../assets/videos/LargoTobillo.mp4'
import video22 from '../../assets/videos/LateralSeno-bajoBusto.mp4'
import video23 from '../../assets/videos/siza-medioHombro-axila.mp4'



import './product.scss';

const ProductPage: FunctionComponent = () => {

const videoIndex = {
 siza:video23,bust_Size:video22,contour_Hips:video3,contour_Upper_Thighs:video8,contour_Mid_Thighs:video6
}

  const images1 = [image1, image2, image3];

  const images2 = [image4, image5, image6];

  const images3 = [image7, image8, image9];

  let product: Product = { images: [image1, image2],videos:videoIndex,localMeasurements:[''], name: 'testing', description: '', benefits: '' };

  let { pid } = useParams();
  function selectProduct(pid: string) {
    switch (pid) {
      case '1':
        product = { images: [jpgImage1, jpgImage2], videos:videoIndex ,localMeasurements:['siza','bust_Size','contour_Hips','contour_Mid_Thigh'],name: `Faja Deportiva `, description: 'Pensada para usar debajo de la ropa deportiva por personas que tienen exceso de peso ya que recoge la piel y ofrece comodidad al hacer ejercicios o caminar Ideal, en sus diferentes largo, para usar debajo de vestidos de fiesta por disimular los gorditos', benefits: '' };
        break;
      case '2':
        product = { images: [image3, image4], videos:videoIndex,localMeasurements:[''],name: `not a testto`, description: '', benefits: '' };
        break;

      default:
        product = { images: [image1, image2],videos:videoIndex,localMeasurements:[''], name: `testing on ${pid}`, description: '', benefits: '' };

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
