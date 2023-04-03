import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header } from '../Component'
import { Home, RealState } from '../pages'


export default function Routing() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/realState' element={<RealState />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
