import React, { useState, useEffect } from "react"
import NavBar from "../Components/NavBar"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa"

function Details() {
  // Data state until local storing is available
  const [details, setDetails] = useState([])
  const [prod, setProd] = useState([])
  //let params
  let params = useParams()
  //fetching data

  useEffect(() => {
    const fetchData = async () => {
      const DataRaw = await fetch(
        `https://api.themoviedb.org/3/movie/${params.name}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1
      `
      )
      const Data = await DataRaw.json()
      setDetails(Data)
      setProd(Data.production_companies)
    }
    fetchData()
  }, [params.name])
  return (
    <div key={details.id}>
      <NavBar></NavBar>
      <DetailsWrapper
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{details.title}</h2>
        <Div key={details.id}>
          <Img
            src={"https://image.tmdb.org/t/p/w500" + details.poster_path}
            alt={details.id}
          />
          <Divv>
            <FaStar className="FaStar"></FaStar>
            <h4>{details.vote_average}</h4>
          </Divv>
          <p>{details.overview}</p>
        </Div>
        <Div2>
          {prod.map((company) => {
            return (
              <div key={company.id}>
                <img
                  className="ImG"
                  src={"https://image.tmdb.org/t/p/w500/" + company.logo_path}
                  alt={company.id}
                />
              </div>
            )
          })}
        </Div2>
      </DetailsWrapper>
    </div>
  )
}

const DetailsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  h2 {
    margin-top: 2rem;
    margin-left: 3rem;
    font-size: 2rem;
    align-items: center;
    margin-left: 40rem;
  }
  p {
    font-weight: 600;
    margin-top: 2rem;
    margin-left: 2rem;
    margin-bottom: 20rem;
    width: 40rem;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 4rem;
      width: max-content;
      padding-left: 15rem;
    }
    p {
      font-weight: 600;
      margin-top: 2rem;
      margin-left: 2rem;
      font-size: 4rem;
      margin-bottom: 5rem;
    }
  }
`
const Div = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  p {
    align-self: flex-end;
  }
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 3rem;
    P {
      align-items: center;
      font-size: 3rem;
      width: 69rem;
      margin-top: 2rem;
      margin-left: 57rem;
    }
  }
`
const Divv = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  h4 {
    font-size: 1.3rem;
    padding-left: 0.5rem;
  }
  .FaStar {
    font-size: 2rem;
    padding-left: 2rem;
  }
  h3 {
    padding-left: 35rem;
  }
  @media only screen and (max-width: 900px) {
    h4 {
      padding-left: 1rem;
      font-size: 3rem;
    }
    .FaStar {
      font-size: 5rem;
    }
  }
`

const Div2 = styled(motion.div)`
  width: 100%;
  margin-top: 0rem;
  margin-bottom: 20rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 70rem;
  padding-left: 40rem;
  .ImG {
    width: 5vw;
    padding-left: 5rem;
  }
  @media only screen and (max-width: 900px) {
    padding-left: 5rem;
    .ImG {
      width: 50vw;
      padding-left: 5rem;
      margin-bottom: 3rem;
    }
  }
`

const Img = styled(motion.img)`
  border-radius: 14px;
  align-items: center;
  margin-top: 1rem;
  object-fit: cover;
  width: 25rem;
  height: 32rem;
  margin-left: 4rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  @media only screen and (max-width: 900px) {
    width: 72rem;
    object-fit: cover;
    height: 95rem;
    margin-left: 55rem;
  }
`

export default Details
