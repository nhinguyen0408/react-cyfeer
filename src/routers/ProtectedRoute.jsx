import React from "react"
import { useCookies } from "react-cookie"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const [token] = useCookies(['token'])

    return (
        // token 
        // ? <Navigate to={"/login"} replace />
        // : children
        children
    )
}

export default ProtectedRoute