import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import { Navigation, EffectCoverflow } from 'swiper/modules'

const destinations = [
  {
    id: 1,
    name: 'Golden Gate Bridge',
    imageUrl: '/destination1.jpg',
  },
  {
    id: 2,
    name: "Cox's Bazar",
    imageUrl: '/destination2.jpg',
  },
  {
    id: 3,
    name: 'Photography Spot',
    imageUrl: '/destination3.jpg',
  },
  {
    id: 3,
    name: 'Photography Spot',
    imageUrl: '/destination2.jpg',
  },
  {
    id: 3,
    name: 'Photography Spot',
    imageUrl: '/destination1.jpg',
  },
]

const PopularDestination = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {destinations.map((destination) => (
            <SwiperSlide key={destination.id}>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={destination.imageUrl}
                  alt={destination.name}
                  className="w-full h-[120px] md:h-[200px] object-cover rounded-lg transition-transform duration-300 ease-in-out"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default PopularDestination
