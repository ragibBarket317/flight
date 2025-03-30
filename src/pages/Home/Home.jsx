import React from 'react'
import FlightBookingSection from '../../components/Home/FlightBookingSection'
import Banner from '../../components/Home/Banner'
import HolidayPackages from '../../components/Home/HolidayPackages'
import PopularHotelPackage from '../../components/Home/PopularHotelPackage'
import PopularUmrahPackage from '../../components/Home/PopularUmrahPackage'
import PopularTour from '../../components/Home/PopularTour'
import PopularDestination from '../../components/Home/PopularDestination'
import StatsSection from '../../components/Home/StatsSection'

const Home = () => {
  return (
    <div>
      <FlightBookingSection />
      <Banner />
      <HolidayPackages />
      <PopularHotelPackage />
      <PopularUmrahPackage />
      <PopularDestination />
      <PopularTour />
      <StatsSection />
    </div>
  )
}

export default Home
