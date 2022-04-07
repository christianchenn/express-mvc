const axios = require("axios");
const token = require("./config").API_KEY
const client = axios.create({
    headers:{
        Authorization:`Bearer ${token}`
    }
})
module.exports = client;