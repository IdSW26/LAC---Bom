function avisaCadastro(){
    alert("Cadastro realizado com sucesso!");
}
function avisaLogin(){
    alert("Login realizado com sucesso!");
}
function avisaCompra(){
    alert("Compra realizada com sucesso!");
}  
function adicionarCarrinho(){
    alert("Produto adicionado ao carrinho com sucesso")
}
function trazDados(){
    fetch('dados.json')
        .then(response => response.json())
        .then(dadinho =>{
            let local = document.getElementById('vemDado');

            local.innerHTML = "";

            dadinho.forEach((dado, index) => {
                local.innerHTML += `
                    <div class="card">
                        <img src="imagens/${dado.img}" alt="">
                        <h3>${dado.nome}</h3>
                        <a href="${dado.endereco}">
                            <button type="button">Saiba Mais</button>
                        </a>
                    </div>
                `;
            }); 
        })
        .catch(error => console.error('Erro:', error));
}