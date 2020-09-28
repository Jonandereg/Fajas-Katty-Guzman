import React, { FunctionComponent } from 'react';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Gallereact from 'gallereact';
import './home.scss';
import image1 from '../../assets/pictures/png-09.png';
import image2 from '../../assets/pictures/png-01.png';
import image3 from '../../assets/pictures/png-02.png';
import image4 from '../../assets/pictures/png-03.png';
import image5 from '../../assets/pictures/png-04.png';
import image6 from '../../assets/pictures/png-05.png';
import image7 from '../../assets/pictures/png-06.png';
import image8 from '../../assets/pictures/png-07.png';
import image9 from '../../assets/pictures/png-08.png';

const Homepage: FunctionComponent = (props) => {
  const images1 = [image1, image2, image3];

  const images2 = [image4, image5, image6];

  const images3 = [image7,image8,image9]

  return (
    <>
      <Navbar />
      <div className='Home_Content'>
        <div className='heroContent'>
          <div className='Content_Imgs1' style={{ width: '25vw', height: '60vh' }}>
            <Gallereact images={images1} autoPlay={true} displayArrows={false} transition={true} duration={4000} displayDot={false} />
          </div>
          <div className='Content_Imgs1' style={{ width: '25vw', height: '60vh' }}>
            <Gallereact images={images2} autoPlay={true} displayArrows={false} display duration={4000} displayDot={false} />
          </div>
          <div className='Content_Imgs1' style={{ width: '25vw', height: '60vh' }}>
            <Gallereact images={images3} autoPlay={true} displayArrows={false} duration={4000} displayDot={false}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
