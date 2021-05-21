import React from 'react'
import './styles.css'
import MyResponsiveBump from './Components/Bump'

export default function App() {
    return (
        <div className="App">
            {/* <h1>nivo</h1> */}
            <div style={{height: 90 + "vh"}}>
                <MyResponsiveBump />
            </div>
        </div>
    )
}
