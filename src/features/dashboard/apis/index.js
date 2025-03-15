import axiosInstance from "../../../plugins/axios-config"

const DashboradAPI = {
    async getlistCompany() {
        try {
            const res = await axiosInstance.get('/company')
            return res?.data
        } catch (error) {
            return null
        }
    }
}

export default DashboradAPI