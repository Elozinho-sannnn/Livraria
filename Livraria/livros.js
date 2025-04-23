let livros= require("./livros.json");

    function criarArquivo(){
        let livrosTexto = JSON.stringify(livros);
        const fs = require('fs');
        fs.writeFileSync("livros.json", livrosTexto);
    }
//criarArquivo();
function mostraLivros(){
    livros.forEach((livro) => {
        console.log(livro.titulo + "-" +
                    livro.Autor + "Ano: " +
                    livro.Ano + "Páginas: " +
                    livro.paginas + "Preço: " +
                    livro.Preco)
    })
}


function adicionaLivro(titulo, paginas, Autor, Genero, Ano, Preco, Sinopse){
livros.push({
    titulo: titulo,
    paginas: paginas,
    Autor: Autor,
    Genero: Genero,
    Ano: Ano,
    Preco: Preco,
    Sinopse: Sinopse,
});
console.log("livro adicionado com sucesso!");
}
adicionaLivro("Trono de vidro", 390, "Sarah j. MAS", "Fantasia", 2020, 25, "Cealena é uma assassina, e a melhor de Adarlan. Encarcerada e fraca, ele está quase perdendo as esperanças quando recebe uma proposta: terá de volta sua liberdad se representar o príncipe de Adarlan em uma competição, lutando contra os mais habilidosos matadores do reino.");
mostraLivros()

