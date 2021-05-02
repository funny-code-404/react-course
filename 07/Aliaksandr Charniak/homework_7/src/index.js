import React from 'react'
import ReactDOM from 'react-dom'
import { debugContextDevtool } from 'react-context-devtool'

import App from './App'

const root = document.getElementById('root')

ReactDOM.render(<App />, root)

debugContextDevtool(root, {})
