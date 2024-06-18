function togglePasswordVisibility(btnSelector, inputSelector) {
    let btn = document.querySelector(btnSelector);
    btn.addEventListener('click', () => {
      let input = document.querySelector(inputSelector);
      if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
      } else {
        input.setAttribute('type', 'password');
      }
    });
  }
  
  // Alterna a visibilidade das senhas
  togglePasswordVisibility('#verSenha', '#senha');
  togglePasswordVisibility('#verConfirmSenha', '#confirmarsenha');
  
  // Variáveis globais para validação
  let validNome = false;
  let validEmail = false;
  let validSenha = false;
  let validConfirmSenha = false;
  let validTelefone = false;
  let validData = false;
  
  // Função para validar o nome completo
  document.querySelector('#nomecompleto').addEventListener('keyup', () => {
    let nomecompleto = document.querySelector('#nomecompleto');
    let labelNome = document.querySelector('#labelNome');
    if (nomecompleto.value.length <= 10) {
      labelNome.setAttribute('style', 'color: #3399BB');
      labelNome.innerHTML = '*Insira seu nome completo';
      validNome = false;
    } else {
      labelNome.setAttribute('style', 'color: #3399BB');
      labelNome.innerHTML = 'Nome completo válido';
      validNome = true;
    }
  });
  
  // Função para validar o email
  document.querySelector('#email').addEventListener('keyup', () => {
    let email = document.querySelector('#email');
    let labelEmail = document.querySelector('#labelEmail');
    if (email.value.length <= 10) {
      labelEmail.setAttribute('style', 'color: #3399BB');
      labelEmail.innerHTML = '*Confira se o e-mail está correto';
      validEmail = false;
    } else {
      labelEmail.setAttribute('style', 'color: #3399BB');
      labelEmail.innerHTML = 'E-mail válido';
      validEmail = true;
    }
  });
  
  // Função para validar a senha
  document.querySelector('#senha').addEventListener('keyup', () => {
    let senha = document.querySelector('#senha');
    let labelSenha = document.querySelector('#labelSenha');
    if (senha.value.length <= 7) {
      labelSenha.setAttribute('style', 'color: #3399BB');
      labelSenha.innerHTML = '*Insira no mínimo 8 digitos';
      validSenha = false;
    } else {
      labelSenha.setAttribute('style', 'color: #3399BB');
      labelSenha.innerHTML = 'Senha válida';
      validSenha = true;
    }
  });
  
  // Função para validar a confirmação da senha
  document.querySelector('#confirmarsenha').addEventListener('keyup', () => {
    let senha = document.querySelector('#senha');
    let confirmarsenha = document.querySelector('#confirmarsenha');
    let labelConfirmSenha = document.querySelector('#labelConfirmSenha');
    if (senha.value !== confirmarsenha.value) {
      labelConfirmSenha.setAttribute('style', 'color: #3399BB');
      labelConfirmSenha.innerHTML = '*As senhas não conferem';
      validConfirmSenha = false;
    } else {
      labelConfirmSenha.setAttribute('style', 'color: #3399BB');
      labelConfirmSenha.innerHTML = 'As senhas conferem';
      validConfirmSenha = true;
    }
  });
  
  // Função para validar o telefone
  document.querySelector('#telefone').addEventListener('keyup', () => {
    let telefone = document.querySelector('#telefone');
    let labelTelefone = document.querySelector('#labelTelefone');
    if (telefone.value.length <= 10) {
      labelTelefone.setAttribute('style', 'color: #3399BB');
      labelTelefone.innerHTML = '*Insira um telefone válido';
      validTelefone = false
    } else {
      labelTelefone.setAttribute('style', 'color: #3399BB');
      labelTelefone.innerHTML = 'Telefone válido';
      validTelefone = true
    }
  });

  // Função para validar data
  document.querySelector('#datadenascimento').addEventListener('keyup', () => {
    let datadenascimento = document.querySelector('#datadenascimento');
    let labelData = document.querySelector('#labelData');
    if (datadenascimento.value.length <= 7) {
      labelData.setAttribute('style', 'color: #3399BB');
      labelData.innerHTML = '*Insira uma data válida';
      validData = false;
    } else {
      labelData.setAttribute('style', 'color: #3399BB');
      labelData.innerHTML = 'Data Válida';
      validData = true;
    }
  });
  
  // Função para verificar se todos os campos estão válidos e enviar o formulário
  function cadastrar() {
    if (validNome && validEmail && validSenha && validConfirmSenha && validTelefone && validData) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser2') || '[]')

    listaUser.push(
    {
        nomecompletoCad: nomecompleto.value,
        emailCad: email.value,
        telefoneCad: telefone.value,
        dataCad: datadenascimento.value,
        senhaCad: senha.value

    }
    )

    localStorage.setItem('listaUser2', JSON.stringify(listaUser))


      msgSuccess.setAttribute('style', 'display: block')
      msgSuccess.innerHTML = '<strong>Usuário Cadastrado!</strong>'
      msgError.setAttribute('style', 'display: none')
      msgError.innerHTML = ''

    setTimeout(()=>{
    window.location.href = ''
    }, 3000)
    

    } else {
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = '<strong>Preencha os campos corretamente antes de cadastrar!</strong>'
      msgSuccess.innerHTML = ''
      msgSuccess.setAttribute('style', 'display: none')
    }
  }

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')