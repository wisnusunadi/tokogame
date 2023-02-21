import axios from "axios";

export async function getFeaturedGame() {
    const ROOT_API = process.env.NEXT_PUBLIC_API;
    const URL = 'player/landingpage';
    const response = await axios.get(`${ROOT_API}/api/${URL}`);
    const axiosResponse = response.data; 
    return axiosResponse.data;
}

export async function getDetailVoucher(id){
    const ROOT_API = process.env.NEXT_PUBLIC_API;
    const URL = `player/${id}/detail`;
    const response = await axios.get(`${ROOT_API}/api/${URL}`);
    const axiosResponse = response.data; 
    return axiosResponse.data;
}

export async function getGamecategory() {
    const ROOT_API = process.env.NEXT_PUBLIC_API
    const URL = `player/category`;
    const response = await axios.get(`${ROOT_API}/api/${URL}`);
    const axiosResponse = response.data; 
    return axiosResponse.data;
    
}
