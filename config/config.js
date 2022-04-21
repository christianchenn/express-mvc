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
    secret:"soaMudahBukan?",
    API_URL: "https://api.spoonacular.com",
    API_KEY: API_KEY,
    API_CONFIG: {
        Authorization: `Bearer ${API_KEY}`,
    }
}