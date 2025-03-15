import { Fragment, useState } from 'react'
import './App.css'
import AppRouter from './routers/AppRouter'
import Loading from './component/Loading'
import { LoadingContext } from './context/app-context'

function App() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Fragment>
      <LoadingContext.Provider value={{isLoading, setIsLoading}}>
        <AppRouter />
        { isLoading && <Loading /> } 
      </LoadingContext.Provider>
      
    </Fragment>
  )
}

export default App
