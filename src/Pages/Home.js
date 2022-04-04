import React, { useState, useEffect } from "react"
import NavBar from "../Components/NavBar"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { v4 as uuid } from "uuid"

function Home() {
  // Data state until local storing is available
  const [NowPlaying, setNowPlaying] = useState([])
  //fetching data
  const fetchData = async () => {
    const DataRaw = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1
      `
    )
    const Data = await DataRaw.json()
    setNowPlaying(Data.results)
  }
  useEffect(() => {
    fetchData()
  }, [])
  const unique_id = uuid()
  return (
    <Div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.375 }}
    >
      <div key={unique_id}>
        <NavBar></NavBar>
        <H1>Playing Now</H1>
        {NowPlaying.map((movie) => {
          return (
            <Link
              to={"/details/" + movie.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Frame key={movie.id}>
                <Title>{movie.title}</Title>
                <Img
                  src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                  alt={movie.id}
                />
              </Frame>
            </Link>
          )
        })}
      </div>
    </Div>
  )
}
const Div = styled(motion.div)``
const Frame = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 25rem;
  display: inline-flex;
  padding-left: 7.5rem;
  @media only screen and (max-width: 900px) {
    width: 65rem;
    height: 45rem;
    display: inline-flex;
  }
`
const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  @media only screen and (max-width: 900px) {
    font-size: 3rem;
    font-weight: 600;
  }
`
const Img = styled.img`
  border-radius: 14px;
  margin-top: 1rem;
  object-fit: cover;
  width: 25rem;
  height: 35rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  @media only screen and (max-width: 900px) {
    width: 69rem;
    height: 40rem;
    display: inline-flex;
    margin-top: 1rem;
  }
`
const H1 = styled.h1`
  font-size: 3rem;
  padding-left: 5rem;
  padding-top: 2rem;
  user-select: none;
  width: max-content;
  @media only screen and (max-width: 900px) {
    font-size: 4rem;
    width: max-content;
  }
`

export default Home
