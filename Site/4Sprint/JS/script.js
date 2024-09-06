
/*ico pessoa*/


function toggleMenu(event) {
    event.preventDefault(); // Evita que o link redirecione a página
    const icoPessoa = document.querySelector('.ico-pessoa');
    icoPessoa.classList.toggle('show-menu');
}

// Fecha o menu se clicar fora dele
document.addEventListener('click', function(event) {
    const icoPessoa = document.querySelector('.ico-pessoa');
    if (!icoPessoa.contains(event.target)) {
        icoPessoa.classList.remove('show-menu');
    }
});

/*//////////fim ico pessoa/////////////*/

/* Botão Cadastrar */

 // Acessar o botão pelo ID
 const cadastrarButton = document.getElementById('Cadastrar');

 // Adicionar um ouvinte de evento para o clique no botão
 cadastrarButton.addEventListener('click', function(event) {
     // Evitar o envio padrão do formulário
     event.preventDefault();

     // Acessar os valores dos campos do formulário
     const email = document.getElementById('email').value;
     const senha = document.getElementById('senha').value;

     // Fazer algo com os valores (por exemplo, exibir no console)
     console.log('E-mail:', email);
     console.log('Senha:', senha);

     window.location.href = 'pgCadastro2.html'; // Substitua pelo caminho correto
 });




