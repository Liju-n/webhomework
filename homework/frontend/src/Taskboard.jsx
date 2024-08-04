import React from 'react'
import ReactDOM from 'react-dom/client'
import Taskboard from './Taskboard.react'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Taskboard />
    </React.StrictMode>,
)
