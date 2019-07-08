import React from 'react'
import styled, { keyframes } from 'styled-components'

const Background = ({ className }) => 
  <ul className={className}>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>

const animation = keyframes`
  0%{
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 30%;
  }

  100%{
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
  }
`

const StyledBackground = styled(Background)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: -webkit-fill-available;
  overflow: hidden;
  z-index: -100;

  li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.5);
    animation: ${animation} 25s linear infinite;
    bottom: -150px;
    border: solid 1px #00000020;
  }

  li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }


  li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  li:nth-child(6) {
    left: 75%;
    width: 10px;
    height: 10px;
    animation-delay: 3s;
  }

  li:nth-child(7) {
    left: 35%;
    width: 45px;
    height: 45px;
    animation-delay: 7s;
  }

  li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  li:nth-child(10) {
    left: 85%;
    width: 35px;
    height: 35px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
`

export default StyledBackground