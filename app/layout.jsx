
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/globals.css'
import { Children } from 'react'

export const metadata={
    title:"PITCHINI",
    description:'Online Agency'
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
    <body>
    
      <Provider>
      <Nav/>
        <div className='main'>
        
            <div className='gradient'/>
        </div>
       
        <main className='app'>
       
            {children}
        
        </main>
       
        </Provider>
        
    </body>
   
    </html>
  )
}

export default RootLayout