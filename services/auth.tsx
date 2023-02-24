import axios from "axios";
const ROOT_API = process.env.NEXT_PUBLIC_API;
export async function setSignUp(data) {
  const URL = "auth/signup";
  const response = await axios.post(`${ROOT_API}/api/${URL}`, data).catch(err => err.response);
  const axiosResponse = response.data;
  if (axiosResponse?.error === 1) {
    return axiosResponse;
  }
  return axiosResponse.data;
}
