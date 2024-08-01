import axios from "axios";


export default axios.create({
    baseURL:"https://api.rawg.io/api/games",
    params:{
        key:"06c0a17a04f34619893935bd50044928"
    }
})