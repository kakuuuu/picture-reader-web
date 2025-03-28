import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const DemoSection: React.FC<{ t: any; router: any }> = ({ t, router }) => {
  return (
    <div id="demo" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('demo.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-500">{t('demo.description')}</p>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className="rounded-xl shadow-2xl"
        >
          {[
            {
              title: t('demo.slides.0.title'),
              description: t('demo.slides.0.description'),
              image: `${router.basePath}/assets/images/example1.png`,
            },
            {
              title: t('demo.slides.1.title'),
              description: t('demo.slides.1.description'),
              image: `${router.basePath}/assets/images/example2.png`,
            },
            {
              title: t('demo.slides.2.title'),
              description: t('demo.slides.2.description'),
              image: `${router.basePath}/assets/images/example3.png`,
            },
            {
              title: t('demo.slides.3.title'),
              description: t('demo.slides.3.description'),
              image: `${router.basePath}/assets/images/example4.png`,
            },
          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-[720px] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
                  <h3 className="mb-2 text-2xl font-bold">{slide.title}</h3>
                  <p className="text-lg">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DemoSection;
