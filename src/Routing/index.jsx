import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header } from '../Component'
import { Home, RealState } from '../pages'
import CitizenShip from '../pages/CitizenShip'
import AboutTurkey from '../pages/About__Turkey'
import BuyerGuidetag from '../Component/BuyerGuidetag'
import AboutUsGuide from '../pages/AboutUsGuide'
import ViewProperty from '../pages/ViewProperty'
import PropertyTurkey from '../pages/PropertyTurkey'
import Contact from '../pages/Contact'


export default function Routing() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/realState' element={<RealState />} />
                <Route path='/turkishCitizen' element={<CitizenShip />} />
                <Route path='/about' element={<AboutTurkey />} />
                <Route path='/buyer' element={<BuyerGuidetag />} />
                <Route path='/aboutusguide' element={<AboutUsGuide />} />
                {/* <Route path='/viewproperty' element={<ViewProperty />} /> */}
                {/* <Route path='/propertyTurkey' element={<PropertyTurkey />} /> */}
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
