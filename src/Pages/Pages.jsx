import React from "react"
import Home from "./Home"
import { Route, Routes, useLocation } from "react-router-dom"
import Popular from "./Popular"
import TopRated from "./TopRated"
import UpComing from "./UpComing"
import Backdrop from "./Backdrop"
import Searched from "./Searched"
import Details from "./Details"
import { AnimatePresence } from "framer-motion"

const Pages = () => {
  const Location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={Location} key={Location.pathname}>
        <Route path="/Movies/" element={<Home />} />
        <Route path="/Popular/" element={<Popular />} />
        <Route path="/TopRated/" element={<TopRated />} />
        <Route path="/UpComing/" element={<UpComing />} />
        <Route path="/Backdrop/" element={<Backdrop />} />
        <Route path="/Searched/:Search" element={<Searched />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages
