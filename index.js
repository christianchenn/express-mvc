const server = require("./server");
const config = require("./config/config")

app = server.init()

app.listen(config.server.port, ()=>{
    console.log(`Listening on Port ${config.server.port}`)
})






