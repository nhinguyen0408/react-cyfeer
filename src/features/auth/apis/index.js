import axiosInstance from "../../../plugins/axios-config"

const AuthAPI = {
    async getAccount(data) {
        try {
            const res = await axiosInstance.get('/users', {params: data})
            return res?.data
        } catch (error) {
            return null
        }
    },
}

export default AuthAPI