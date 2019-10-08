import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'

import Container from './Container'

ReactDOM.render(<Container />, document.getElementById('root'))

serviceWorker.register()
