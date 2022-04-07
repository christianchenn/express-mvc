const API_KEY = ''
module.exports = {
    database: {
        host: "localhost",
        user: "root",
        password: "",
        connectionLimit: 10,
        database: "",
    },
    server: {
        port: 3000
    },
    API_URL: "https://api.genius.com",
    API_KEY: API_KEY,
    API_CONFIG: {
        Authorization: `Bearer ${API_KEY}`,
    }
}