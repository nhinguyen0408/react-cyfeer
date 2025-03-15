import { lazy } from "react";
const DashboardPage = lazy(() => import("../../features/dashboard"))
const CompanyPage = lazy(() => import("../../features/company"))
const ProjectPage = lazy(() => import("../../features/project"))
const ProjectDetailPage = lazy(() => import("../../features/project/detail"))

export const AuthRouter = {
    index: {
        path: '/',
        component: DashboardPage
    },

    company: {
        path: '/company',
        component: CompanyPage
    },

    project: {
        path: '/project',
        component: ProjectPage,
    },

    projectDetail: {
        path: '/project/:id',
        component: ProjectDetailPage,
    },
}