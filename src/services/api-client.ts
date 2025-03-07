import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key:{YOUR_API_KEY} // provide you rawg.io api key from -- https://rawg.io/signup
    }
})
