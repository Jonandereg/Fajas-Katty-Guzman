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
import jpgImage3 from '../../assets/pictures/jpgs/jpg-3.jpg'
import jpgImage4 from '../../assets/pictures/jpgs/jpg-4.jpg'
import jpgImage5 from '../../assets/pictures/jpgs/jpg-5.jpg'
import jpgImage6 from '../../assets/pictures/jpgs/jpg-6.jpg'
import jpgImage7 from '../../assets/pictures/jpgs/jpg-7.jpg'
import jpgImage8 from '../../assets/pictures/jpgs/jpg-8.jpg'

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
 siza:video23, bust_Size:video22, contour_Hips:video3, contour_Upper_Thigh:video8, contour_Mid_Thigh:video6,  contour_Below_Knee:video2 ,back_Width:video17
}

 

  let product: Product = { images: [image1, image2],videos:videoIndex,localMeasurements:[''], name: 'testing', description: '', benefits: '' };

  let { pid } = useParams();
  function selectProduct(pid: string) {
    switch (pid) {
      case '1':
        product = { images: [jpgImage1, jpgImage2], videos:videoIndex ,localMeasurements:['siza','bust_Size','contour_Hips','contour_Mid_Thigh'],name: `Faja Deportiva `, description: 'Pensada para usar debajo de la ropa deportiva por personas que tienen exceso de peso ya que recoge la piel y ofrece comodidad al hacer ejercicios o caminar Ideal, en sus diferentes largo, para usar debajo de vestidos de fiesta por disimular los gorditos', benefits: '' };
        break;
      case '2':
        product = { images: [jpgImage3, jpgImage4], videos:videoIndex,localMeasurements:['siza','bust_Size','contour_Hips','contour_Upper_Thigh','contour_Mid_Thigh','contour_Below_Knee'],name: `Faja a media pierna con espalda `, description: 'Esta faja es ideal para aquellas personas que quieren trabajar el area  abdominal Indicada para reducir y moldear, o luego de una intervención quirúrgica, tales como lipoescultura, abdominoplastía, eventración, postparto o cualquier otra intervención quirúrgica que amerite fajarse', benefits: '' };
        break;
      case '3':
        product = { images: [jpgImage5, jpgImage6], videos:videoIndex,localMeasurements:['siza','bust_Size','back_Width','contour_Hips','contour_Upper_Thigh','contour_Mid_Thigh','contour_Below_Knee'],name: `Faja con sosten incorporado `, description: 'Esta faja es ideal para aquellas personas que quieren trabajar tanto abdomen, como piernas y espalda y que quiera la comodidad del sostén incorporado Indicada para reducir y moldear, o luego de una intervención quirúrgica, tales como lipoescultura, abdominoplastía, eventración o cualquier otra intervención quirúrgica que amerite fajarse', benefits: '' };
        break;
      case '4':
       product = { images: [jpgImage7, jpgImage8], videos:videoIndex,localMeasurements:['siza','bust_Size','back_Width'],name: `Sosten con soporte en la espalda `, description: 'Para aquellas mujeres que necesitan un buen soporte al momento de hacer ejercicios o por tener unos senos de gran volumen o después de un aumento de mamás, este modelo de sostén se adapta para aquellas mujeres que les fue realizada una mastectomía parcial ya que se le incorpora un bolsillo interno donde se coloca la prótesis externa para dar armonía en el tamaño vienen por talla, combinando ancho de espalda y copa del busto', benefits: '' };
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
