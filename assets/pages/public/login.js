let listCadastro = JSON.parse(localStorage.getItem("listCadastro"));

function entrar(tipo) {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  let checkUser = false;

  for (let i = 0; i < listCadastro.length; i++) {
    if (email.trim() == listCadastro[i].email && senha.trim() == listCadastro[i].senha) {
      if (listCadastro[i].tipo == tipo) {
        alert("Login efetuado com sucesso");
        localStorage.setItem("userCurrent", email);
        checkUser = true
        if (tipo == 1) {
          window.location.href = "./../influencer/portal_influencer.html";
        } else {
          window.location.href = "./../enterprise/portal_empresa.html";
        }
        break;
      } 
      else {
        if (tipo == 1) {
          alert("Você não está cadastrado como influencer, logue como empresa.");
          return;
        } else {
          alert("Você não está cadastrado como empresa, logue como influencer.");
          return;
        }
      }
    }
  }

  if (!checkUser) {
    alert("E-mail ou senha incorretos!");
  }
}
