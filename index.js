const express = require("express");//importando o express       
const app = express();// iniciando o express


app.get("/",function(requisicao,resposta){
    resposta.send("<h1>Bem vindo ao Guia do Programador</h1>")
    //resposta.send("Outra Resposta");//Não Funciona, so funciona com uma resposta nao pode enviar multiplas resposta em uma mesma rota.
});

app.get("/blog/:artigo?",function(requisicao,resposta){
    var artigo = requisicao.params.artigo;

    if(artigo){

        resposta.send("<h2>artigo: "   + artigo  + "</h2>");
    }else{
        resposta.send("<h1>Bem Vindo ao meu blog!</h1>");

    }
    
})



app.get("/canal/youtube",function(requisicao,resposta){
    var canal = requisicao.query["canal"]
    if(canal){
        resposta.send(canal);

    }else{

        resposta.send("Nenhum canal Fornecido")
    }
    
})

app.get("/ola/:nome/:empresa",function(requisicao,resposta){
    //requisição dados enviado pelo Usuario.
    //resposta é o dado que vai ser enviado para o ususario.
    var nome = requisicao.params.nome;
    var empresa = requisicao.params.empresa;
    resposta.send("<h1> Oi" + nome + "do" + empresa + "</h1>");

});



app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!")
    }

})