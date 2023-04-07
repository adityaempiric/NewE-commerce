import React from 'react'
import Banner1 from '../Banner1/Banner1'
import Blog from '../Blog/Blog'
import CardModel1 from '../CardModel1/CardModel1'
import HomeCarousel from '../HomeCarousel/HomeCarousel'
import Magazine from '../Magazine/Magazine'
import MustOwnDesigner from '../MustOwnDesigner/MustOwnDesigner'
import NavBar from '../NavBar/NavBar'
import PopularStyle from '../PopularStyle/PopularStyle'
import Services from '../Services/Services'
import StoreEvents from '../StoreEvents/StoreEvents'
import SubNavBar from '../SubNavBar/SubNavBar'
import TopCategories from '../TopCategories/TopCategories'
import WhatsNew from '../WhatsNew/WhatsNew'

const HomePage = () => {
  return (
    <> 
        <NavBar/>
        <CardModel1/>
        <HomeCarousel/>
        <Banner1/>
        <TopCategories/>
        <PopularStyle/>
        <MustOwnDesigner/>
        <WhatsNew/>
        <Magazine/>
        <Blog/>
        <Services/>
        <StoreEvents/>
    </>
  )
}

export default HomePage