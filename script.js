//Conectar com a API  utilizando o FETCH
fetch('dados.json').then(resposta => resposta.json()).then(corpo => {
    console.log(corpo)

    //FRONT-END
    document.getElementById('imagem').innerHTML = corpo.image;
    document.getElementById('nome').innerHTML = corpo.nome;
    document.getElementById('marca').innerHTML = corpo.marca;
    document.getElementById('cor').innerHTML = corpo.cor;
    document.getElementById('preco').innerHTML = corpo.price;

    document.getElementById('imagem2').innerHTML = corpo.image2;
    document.getElementById('nome2').innerHTML = corpo.nome2;
    document.getElementById('marca2').innerHTML = corpo.marca2;
    document.getElementById('cor2').innerHTML = corpo.cor2;
    document.getElementById('preco2').innerHTML = corpo.price2;

    document.getElementById('imagem3').innerHTML = corpo.image3;
    document.getElementById('nome3').innerHTML = corpo.nome3;
    document.getElementById('marca3').innerHTML = corpo.marca3;
    document.getElementById('cor3').innerHTML = corpo.cor3;
    document.getElementById('preco3').innerHTML = corpo.price3;
    
    document.getElementById('imagem4').innerHTML = corpo.image4;
    document.getElementById('nome4').innerHTML = corpo.nome4;
    document.getElementById('marca4').innerHTML = corpo.marca4;
    document.getElementById('cor4').innerHTML = corpo.cor4;
    document.getElementById('preco4').innerHTML = corpo.price4;

    document.getElementById('imagem5').innerHTML = corpo.image5;
    document.getElementById('nome5').innerHTML = corpo.nome5;
    document.getElementById('marca5').innerHTML = corpo.marca5;
    document.getElementById('cor5').innerHTML = corpo.cor5;
    document.getElementById('preco5').innerHTML = corpo.price5;

    document.getElementById('imagem6').innerHTML = corpo.image6;
    document.getElementById('nome6').innerHTML = corpo.nome6;
    document.getElementById('marca6').innerHTML = corpo.marca6;
    document.getElementById('cor6').innerHTML = corpo.cor6;
    document.getElementById('preco6').innerHTML = corpo.price6;

    document.getElementById('imagem7').innerHTML = corpo.image7;
    document.getElementById('nome7').innerHTML = corpo.nome7;
    document.getElementById('marca7').innerHTML = corpo.marca7;
    document.getElementById('cor7').innerHTML = corpo.cor7;
    document.getElementById('preco7').innerHTML = corpo.price7;

    document.getElementById('imagem8').innerHTML = corpo.image8;
    document.getElementById('nome8').innerHTML = corpo.nome8;
    document.getElementById('marca8').innerHTML = corpo.marca8;
    document.getElementById('cor8').innerHTML = corpo.cor8;
    document.getElementById('preco8').innerHTML = corpo.price8;
})



function comprar() {
    event.preventDefault();
    Swal.fire({
        title:"Parabéns!",
        text: "Guitarra comprada com sucesso!",
        icon: "success"
      });
}





