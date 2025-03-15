import axiosInstance from "../../../plugins/axios-config"

const CompanyAPI = {
    async getProjectOfCompany(data) {
        try {
            const res = await axiosInstance.get('/project', {params: data})
            return res?.data
        } catch (error) {
            return null
        }
    }
}

export default CompanyAPI