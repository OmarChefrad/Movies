import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"
import NavBar from "../Components/NavBar"
import { Link } from "react-router-dom"

function Searched() {
  const [searchedMovies, setSearchedMovies] = useState([])
  let params = useParams()

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${name}
      `
    )
    const movies = await data.json()
    setSearchedMovies(movies.results)
  }
  useEffect(() => {
    getSearched(params.Search)
  }, [params.Search])

  return (
    <Div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar></NavBar>
      <H1>THE RESULTS OF : {params.Search}</H1>
      {searchedMovies.map((movie) => {
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
    </Div>
  )
}

const Div = styled(motion.div)``
const Frame = styled(motion.div)`
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
const Title = styled(motion.div)`
  font-size: 1.3rem;
  font-weight: 600;
  @media only screen and (max-width: 900px) {
    font-size: 3rem;
    font-weight: 600;
  }
`
const H1 = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 600;
  padding-left: 5rem;
  padding-top: 2rem;
  width: max-content;
  @media only screen and (max-width: 900px) {
    font-size: 3.389999rem;
    padding-left: 5rem;
    padding-top: 2rem;
  }
`
const Img = styled(motion.img)`
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

export default Searched
