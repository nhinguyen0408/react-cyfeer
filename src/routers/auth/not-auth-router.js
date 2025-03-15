import { lazy } from "react";
const Login = lazy(() => import("../../features/auth/login"))

export const NotAuthRouter = {
    login: {
        path: '/login',
        component: Login
    },
}