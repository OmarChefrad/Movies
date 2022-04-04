import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"

function NavBar() {
  return (
    <Nav>
      <Link to="/Movies">
        <h1>MY MOVIES</h1>
      </Link>
      <Link to="/Popular">
        <h1>POPULAR</h1>
      </Link>
      <Link to="/TopRated">
        <h1>TOP RATED</h1>
      </Link>
      <Link to="/UpComing">
        <h1>UPCOMING</h1>
      </Link>
      <Link to="/Backdrop">
        <FaSEARCH></FaSEARCH>
      </Link>
    </Nav>
  )
}

const Nav = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  border-radius: 23rem;
  border: 2px solid #eeeee4;
  width: 90%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 4rem;
  margin-top: 1.5rem;
  -webkit-tap-highlight-color: transparent;
  @media only screen and (max-width: 900px) {
    width: 80rem;
    height: 12rem;
    margin-top: 3rem;
    margin-bottom: 4rem;
    margin-left: 0rem;
    margin-right: 4rem;
  }

  a {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
  h1 {
    color: black !important;
    text-decoration: none;
    padding-left: 8rem;
    font-size: 1.6rem;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    font-weight: 600;
    -webkit-tap-highlight-color: transparent;
    @media only screen and (max-width: 900px) {
      font-size: 3rem;
      font-weight: 600;
      padding-left: 2.5rem;
    }
  }
  img {
    height: 100%;
    width: 100%;
  }
`
const FaSEARCH = styled(FaSearch)`
  font-size: 1.7rem;
  cursor: pointer;
  text-decoration: none;
  padding-left: 10rem;
  color: black;
  @media only screen and (max-width: 900px) {
    height: 15vh;
    width: 15vw;
    padding-left: 5rem;
  }
`

export default NavBar
