const express = require("express")
const nunjucks = require("nunjucks")


const server = express()

const videos = require("./data")

server.use (express.static('public'))

server.set("view engine", "njk")

nunjucks.configure(__dirname + "/views",{
    express:server,
    autoescape:false,
    noCache:true
})


server.get("/", function(req, res){

    const about = { 

        avatar_url: "https://images.unsplash.com/photo-1614790871804-fe037bdc1214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name: "Ricardo Lucas",
        role: "Aluno - Rocketseat ", 
        description: 'Estudante, focado em aprender e trazer o melhor para o mercado de programação. Estudante da <a href="https://rocketseat.com.br/" target="_blanck">rocketseat</a>',
       
        links:[

            { name:'github', url:"https://github.com/Lucaalmeida" },
            { name:'twitter', url:"https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D" },
            { name:'linkedin', url:"https://www.linkedin.com/in/ricardo-lucas-1b66011ba/" }

        ]
    }

    return res.render("about", { about})
})

server.get("/portifolio", function(req, res){

    return res.render("portifolio", { items : videos})

})




server.listen(4000, function ( ){ 
    console.log("server is running")
})