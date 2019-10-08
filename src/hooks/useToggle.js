import { useState } from 'react'

const useToggle = (initialState = false) => {
  const [value, setValue] = useState(Boolean(initialState))
  const toggle = () => setValue(!value)
  return [value, toggle]
}

export default useToggle
