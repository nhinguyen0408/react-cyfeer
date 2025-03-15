import React, { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import { AuthRouter } from "./auth/auth-router"
import ProtectedRoute from "./ProtectedRoute"
import { NotAuthRouter } from "./auth/not-auth-router"
import LayoutHome from "../layouts/LayoutHome"
const AppRouter = () => {
    return (
        <Fragment>
            <LayoutHome>
                <Routes>
                    {
                        Object.values(AuthRouter).map(({ path, component: Component }) => (
                            <Route
                                path={path}
                                key={path}
                                element={
                                    <ProtectedRoute children={<Component />} />
                                }
                            />
                        ))
                    }
                </Routes>
            </LayoutHome>
            <Routes>
                {
                    Object.values(NotAuthRouter).map(({ path, component: Component }) => (
                        <Route
                            path={path}
                            key={path}
                            element={<Component />}
                        />
                    ))
                }
            </Routes>
        </Fragment>
    )
}

export default AppRouter