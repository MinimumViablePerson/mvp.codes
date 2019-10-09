import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Toggle = ({ className, toggleDarkMode, darkMode }) => (
  <label className={className}>
    <input
      aria-label='dark mode toggle'
      type='checkbox'
      checked={darkMode}
      onChange={toggleDarkMode}
    />
    <span />
  </label>
)

Toggle.propTypes = {
  className: PropTypes.string,
  toggleDarkMode: PropTypes.func.isRequired
}

const StyledToggle = styled(Toggle)`
  position: absolute;
  width: 34px;
  height: 34px;
  top: 20px;
  right: 20px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(39, 171, 252);
    transition: 0.4s;
    border-radius: 34px;
  }

  span:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    transition: 0.5s ease-out;

    background-color: #fff;
    box-shadow: inset -12px 5px 0 20px #eddd5b;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: #ffffffaa;
  }

  input:focus + span {
    box-shadow: 0 0 1px #ffffffaa;
  }

  input:checked + span:before {
    background-color: transparent;
    border-radius: 50%;
    box-shadow: inset -12px 5px 0 -2px #fff;
  }
`

export default StyledToggle
