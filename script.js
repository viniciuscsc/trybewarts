const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const botaoEntrar = document.querySelector('#Entrar');

function dispararAlert() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoEntrar.addEventListener('click', dispararAlert);

const botaoEnviar = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');

function habilitaBotaoEnviar() {
  if (checkbox.checked === true) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}

checkbox.addEventListener('click', habilitaBotaoEnviar);
