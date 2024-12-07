import axios from "axios";
// const baseURL = "http://localhost:2500";
const baseURL = "https://express-backend-new.onrender.com";


const api = axios.create({
baseURL:baseURL,
withCredentials:true

})
export default api