import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './App.js'
import './index.css'
import { ReactFlowProvider } from 'reactflow'
import { App } from 'antd'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactFlowProvider>
      <App>
        <Main />
      </App>
    </ReactFlowProvider>
  </React.StrictMode>,
)
