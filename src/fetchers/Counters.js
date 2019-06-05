import axios from "axios";

const fetchStoredCounters = ()=>{
    return axios
    .get("/storedCounters.json")
    .then(response=>response.data.storedValues)
}

export default fetchStoredCounters;