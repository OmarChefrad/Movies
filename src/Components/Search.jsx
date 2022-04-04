import React, { useState } from "react"
import styled from "styled-components"
// import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function Search() {
  const [input, setInput] = useState("")
  const Navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    Navigate("/Searched/" + input)
  }

  return (
    <FStyle onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          placeholder="  Search a Movie title"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
    </FStyle>
  )
}

const FormStyle = styled.form`
  margin: 0rem 20rem;
  margin-right: 25rem;
  margin-top: 5rem;
  user-select: none;
  @media only screen and (max-width: 900px) {
    margin: 0rem;
    margin-top: 13rem;
  }
  div {
    position: relative;
    width: 38rem;
  }
  input {
    border: none;
    background: linear-gradient(69deg, white black);
    font-size: 1.5rem;
    color: black;
    padding: 0.8rem 3rem;
    border: none;
    border-radius: 94rem;
    outline: none;
    width: 100%;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    @media only screen and (max-width: 900px) {
      font-size: 3rem;
      font-weight: 600;
      width: 68rem;
      height: 6rem;
      margin-left: 2rem;
    }
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: black;
  }
`
// const FaSEARCH = styled(FaSearch)`
//   font-size: 1.35rem;
//   cursor: pointer;
//   @media only screen and (max-width: 900px) {
//     font-size: 3rem;
//     margin-left:2rem;
//   }
// `
const FStyle = styled(FormStyle)`
  padding: 1rem;
`
export default Search
