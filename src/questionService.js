const axios = require("axios")

const baseURL = "http://localhost:4000/"

export function getAll(){
     return axios.get(baseURL)
}

export function postOne(qa){
     return axios.post(baseURL, qa)
}