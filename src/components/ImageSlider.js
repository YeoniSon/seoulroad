import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const topImg = [
  { src: '/img/mainSlide1.jpg', alt: 'image 1' },
  { src: '/img/mainSlide2.jpg', alt: 'image 2' },
  { src: '/img/mainSlide3.jpg', alt: 'image 3' },
  { src: '/img/mainSlide4.jpg', alt: 'image 4' },
];


function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className,  onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

const SlickContainer = styled.div`
  .slick-slider img {
    width:auto;
  }
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: transparent;
    outline: none;
    background-color: rgba(222, 222, 222, 0.5);
  }

  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 0;
  }

  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: 'slick';
    font-size: 30px;
    line-height: 1;
    opacity: 0;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-next,
  .slick-prev {
    display: block;
    z-index: 100;
    width: 70px;
    height: 124px;
    background-color: rgba(222, 222, 222, 0.3);
  }

  .slick-prev {
    left: 50px;
  }

  .slick-next {
    right: 50px;
  }

  .slick-next:after {
    content: '';
    position: absolute;
    width: 33px;
    height: 61px;
    background-image: url(/img/arrow.png);
    top: 50%;
    left: 50%;
    color: #fff;
    transform: translate(-50%, -50%);
  }

  .slick-prev:after {
    content: '';
    position: absolute;
    width: 33px;
    height: 61px;
    background-image: url(/img/arrow.png);
    top: 50%;
    left: 50%;
    color: #fff;
    transform: translate(-50%, -50%) rotate(180deg);
  }

  .slick-dots {
    bottom: 15px;
  }

  .slick-dots li button:before {
    font-size: 12px;
  }
`;

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
  <SlickContainer>
    <Slider {...settings}>
      {topImg.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Slider>
  </SlickContainer>
  );
};

export default ImageSlider;
