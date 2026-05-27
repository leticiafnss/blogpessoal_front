import axios from "axios";

const api = axios.create({
  baseURL: "https://blogpessoal-nest-zii9.onrender.com/"
})

export default api;