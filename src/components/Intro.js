import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const Intro = ({ className }) => {
  const [flipped, setFlipped] = useState(false)

  const flip = () => setFlipped(!flipped)

  return <div className={className}>
    <h1 id='im'>I'm</h1>
    <div className={`flip-container ${flipped ? 'flip' : ''}`} onClick={flip}>
      <div className='flipper'>
        <div className='front'>
          <h1><span>Nicolas Marcora</span></h1>
        </div>
        <div className='back'>
          <h1><span>MinimumViablePerson</span></h1>
        </div>
      </div>
    </div>
  </div>
}

const StyledIntro = styled(Intro)`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  #im {
    width: 100%;
  }

  h2 {
    font-weight: 300;
  }

  animation: 1s ${animation} ease-out;

  span {
    color: rgba(9,141,222);
    font-weight: 600;
    cursor: pointer;
  }

  .flip-container {
    perspective: 1000px;
  }
  /* flip the pane when hovered */
  .flip-container.flip .flipper {
    transform: rotateY(180deg);
  }

  .flip-container, .front, .back {
    width: 100%;
    height: 50px;
  }

  /* flip speed goes here */
  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;

    position: relative;
  }

  /* hide back of pane during swap */
  .front, .back {
    backface-visibility: hidden;

    position: absolute;
    top: 0;
    left: 0;
  }

  /* front pane, placed above back */
  .front {
    z-index: 2;
    /* for firefox 31 */
    transform: rotateY(0deg);
  }

  /* back, initially hidden pane */
  .back {
    transform: rotateY(180deg);
  }
`

export default StyledIntro
