import axios from "axios";


export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"06c0a17a04f34619893935bd50044928"
    }
})