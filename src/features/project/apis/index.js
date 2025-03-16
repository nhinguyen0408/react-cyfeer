import axiosInstance from "../../../plugins/axios-config"

const ProjectAPI = {
    async getProjectRevenue(data) {
        try {
            const res = await axiosInstance.get('/project-revenue', {params: data})
            return res?.data
        } catch (error) {
            return null
        }
    }
}

export default ProjectAPI