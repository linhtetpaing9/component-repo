import React, { useEffect, useRef } from 'react';
import { Carousel } from 'antd';


const CustomSlide = (props) => {
  const { index, length, item, ...all } = props;

  return (
    <div {...all}>
      <div className="relative">
        <img src={item.url} style={{ width: '100%' }} />
        <div className="absolute text-white text-right top-1/3 left-2/4">
          <h1 className="text-white font-bold text-5xl">{item.title}</h1>
          <h3 className="text-white text-lg">{item.desc}</h3>
        </div>
      </div>
    </div>
  );
}


const FirstBannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: false,
  };
  const ref = useRef(null);
  useEffect(() => {
    // To move sliders dots to right and slider moving animation from right to left
    const carousel = ref.current.querySelector('.ant-carousel')
    const dots = ref.current.querySelector('.ant-carousel .slick-dots')
    if (carousel != null && dots != null) {
      carousel.classList.add("ant-carousel-vertical");
      dots.classList.add("slick-dots-right");
    }
  }, [])

  const banners = [
    {
      url: '/img/banner-slider.png',
      title: 'Local Experience',
      desc: 'Authentic Singapore Tours'
    },
    {
      url: '/img/banner-slider.png',
      title: 'Local Experien',
      desc: 'Authentic Singapore Tours'
    },
    {
      url: '/img/banner-slider.png',
      title: 'Local Expence',
      desc: 'Authentic Singapore Tours'
    },
  ]

  return (
    <section id="first__banner__slider" className="relative" ref={ref}>
      <Carousel {...settings} dotPosition="bottom">
        {
          banners.map((photo, index) =>
          (
            <CustomSlide key={`banner-img-${index}`} item={photo} />
          ))
        }
      </Carousel>
    </section>
  )
}
FirstBannerSlider.code = `
import React, { useEffect, useRef } from 'react';
import { Carousel } from 'antd';


const CustomSlide = (props) => {
  const { index, length, item, ...all } = props;

  return (
    <div {...all}>
      <div className="relative">
        <img src={item.url} style={{ width: '100%' }} />
        <div className="absolute text-white text-right top-1/3 left-2/4">
          <h1 className="text-white font-bold text-5xl">{item.title}</h1>
          <h3 className="text-white text-lg">{item.desc}</h3>
        </div>
      </div>
    </div>
  );
}


const FirstBannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: false,
  };
  const ref = useRef(null);
  useEffect(() => {
    // To move sliders dots to right and slider moving animation from right to left
    const carousel = ref.current.querySelector('.ant-carousel')
    const dots = ref.current.querySelector('.ant-carousel .slick-dots')
    if (carousel != null && dots != null) {
      carousel.classList.add("ant-carousel-vertical");
      dots.classList.add("slick-dots-right");
    }
  }, [])

  const banners = [
    {
      url: '/img/banner-slider.png',
      title: 'Local Experience',
      desc: 'Authentic Singapore Tours'
    },
    {
      url: '/img/banner-slider.png',
      title: 'Local Experien',
      desc: 'Authentic Singapore Tours'
    },
    {
      url: '/img/banner-slider.png',
      title: 'Local Expence',
      desc: 'Authentic Singapore Tours'
    },
  ]

  return (
    <section id="first__banner__slider" className="relative" ref={ref}>
      <Carousel {...settings} dotPosition="bottom">
        {
          banners.map((photo, index) =>
          (
            <CustomSlide key={` + '`banner-img-${index}`' + `} item={photo} />
          ))
        }
      </Carousel>
    </section>
  )
}`

export default FirstBannerSlider;
