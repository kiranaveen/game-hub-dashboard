import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key:'a155f7911125443bb8da3276e51b739d'
    }
})