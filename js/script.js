
  function redirecionarParaPaginaDeLogin() {
    window.location.href = "./login.html";
  }

  (function() {
    'use strict';
    window.addEventListener('load', function() {
      
      var forms = document.getElementsByClassName('needs-validation');
   
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            event.preventDefault();
            event.stopPropagation();
      
            alert("Sua conta foi criada com sucesso!");
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var email = 'example@example.com';
    var password = '123456';

   
    var emailInput = document.getElementById('exampleInputEmail1').value;
    var passwordInput = document.getElementById('exampleInputPassword1').value;

    
    if (emailInput !== email || passwordInput !== password) {
      alert('Erro: Credenciais inválidas!'); 
    } else {
      
      alert('Login bem-sucedido! Redirecionando...');
    }
  });