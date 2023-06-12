let listCadastro = JSON.parse(localStorage.getItem("listCadastro"));

function entrar(tipo) {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  for (var i = 0; i < listCadastro.length; i++) {
    console.log("oi");
    if (
      email.trim() == listCadastro[i].email &&
      senha.trim() == listCadastro[i].senha
    ) {
      if (listCadastro[i].tipo == tipo) {
        // alert("Login efetuado com sucesso");
        if (tipo == 1) {
          window.location.href = "./../influencer/portal_influencer.html";
        } else {
          window.location.href = "./../enterprise/portal_empresa.html";
        }
        break;
      } else {
        if (tipo == 1) {
          // alert("Você não esta cadastrado como influencer");
        } else {
          // alert("Você não esta cadastrado como empresa");
        }
      }
    } else {
      erro = true;
      // alert("email ou senha incorretos!");
    }
  }
}
