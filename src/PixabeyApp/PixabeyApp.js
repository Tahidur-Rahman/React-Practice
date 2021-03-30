import { MuiThemeProvider } from 'material-ui/styles'
import React from 'react'
import Navbar from './Navbar'
import Search from './Search'

function PixabeyApp() {
    return (
        <MuiThemeProvider>
            <div>
           <Navbar/>
           </div>
           <Search/>
        </MuiThemeProvider>
    )
}

export default PixabeyApp
