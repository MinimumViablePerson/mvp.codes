import React from 'react'

import styled from 'styled-components'

const Toggle = ({ className, darkMode, toggleDarkMode }) => (
  <label className={`switch ${className}`}>
    <input type='checkbox' onChange={toggleDarkMode} />
    <span className='slider round' />
  </label>
)

const StyledToggle = styled(Toggle)`
  /* The switch - the box around the slider */
  position: absolute;
  width: 60px;
  height: 34px;
  top: 20px;
  right: 20px;

  /* Hide default HTML checkbox */
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(39, 171, 252);
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    -webkit-transition: 0.4s;
    transition: 0.4s;

    ${props =>
    props.darkMode
      ? `
        background-color: transparent;
        border-radius: 50%;
        box-shadow: inset -12px 5px 0 -2px #fff;
      `
      : `
        background-color: #fff;
        box-shadow: inset -12px 5px 0 20px #eddd5b;
        border-radius: 0.3rem;
      `}
  }

  input:checked + .slider {
    background-color: #ffffffaa;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #ffffffaa;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`

export default StyledToggle
