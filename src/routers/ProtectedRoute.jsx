import React from "react"
import { useCookies } from "react-cookie"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const [user] = useCookies(['user'])
    return (
        !user?.user?.email
        ? <Navigate to={"/login"} replace />
        : children
    )
}

export default ProtectedRoute