const express = require("express")
const server = express()

const nunjucks = require("nunjucks")


server.set("view engine", "html")

nunjucks.configure("views",{
    express:server
})


server.get("/", function(req, res){
    return res.send("rota encontrada, não precisamos usar dirname nesse caso ")
})





server.listen(4000, function ( ){ 

    console.log("server is running")

})