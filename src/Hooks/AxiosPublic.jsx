import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://automotive-server-site-two.vercel.app'
})
const useAxiosPublic = () => {

    return axiosPublic
};

export default useAxiosPublic;