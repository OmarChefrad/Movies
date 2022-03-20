import React from "react"
import Search from "../Components/Search"
import NavBar from "../Components/NavBar"
import styled from "styled-components"
import { motion } from "framer-motion"

function Backdrop() {
  return (
    <Div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.375 }}
    >
      <NavBar></NavBar>
      <Search></Search>
    </Div>
  )
}
const Div = styled(motion.div)``
export default Backdrop
