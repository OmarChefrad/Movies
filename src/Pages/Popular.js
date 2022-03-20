import React, { useState, useEffect } from "react"
import NavBar from "../Components/NavBar"
import styled from "styled-components"
import { motion } from "framer-motion"

function Popular() {
  // Data state until local storing is available
  const [popular, setPopular] = useState([])
  //fetching data
  const fetchData = async () => {
    const DataRaw = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1
      `
    )
    const Data = await DataRaw.json()
    setPopular(Data.results)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
      <Div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.375 }}
      >
      <NavBar></NavBar>
      <div>
        <H1>Popular</H1>
        {popular.map((movie) => {
          return (
            <Frame key={movie.id}>
              <Title>{movie.title}</Title>
              <Img
                src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                alt={movie.id}
              />
            </Frame>
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
`
const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
`
const Img = styled.img`
  border-radius: 14px;
  margin-top: 1rem;
  object-fit: cover;
  width: 25rem;
  height: 35rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`
const H1 = styled.h1`
  font-size: 3rem;
  padding-left: 5rem;
  padding-top: 2rem;
  user-select: none;
`
export default Popular
