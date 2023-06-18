function salvarDados() {
  const nomeInfluencer = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const localidade = document.querySelector(".form-select-lg").value;

  let listCadastro = JSON.parse(localStorage.getItem("listCadastro") || "[]");

  // Verifica se já existe um usuário cadastrado no localStorage pelo valor de email e o valor de cpf
  const existingUser = listCadastro.find((user) => user.email === email || user.cpf === cpf);
  if (existingUser) {
    if (existingUser.email === email) {
      alert("Já existe um usuário cadastrado com este email.");
    } else {
      alert("Já existe um usuário cadastrado com este CPF.");
    }
    return;
  }

  const categorias = Array.from(document.getElementsByClassName("categoria"))
    .filter((categoria) => categoria.checked)
    .map((categoria) => categoria.value);

  const redesSociais = Array.from(document.getElementsByClassName("redes"))
    .filter((rede) => rede.checked)
    .map((rede) => rede.value);

  const descricao = document.getElementById("descricao").value;

  if (
    nomeInfluencer.trim() === "" ||
    nomeInfluencer.length < 5 ||
    nomeInfluencer.length > 25
  ) {
    alert(
      'O campo "NOME DO INFLUENCER" é obrigatório e deve ter entre 5 e 25 caracteres.'
    );
    return;
  }
  if (cpf.trim() === "" || cpf.length != 11 || isNaN(cpf)) {
    alert('O campo "CPF" é obrigatório e só aceita números, 11 dígitos.');
    return;
  }
  if (email.trim() === "") {
    alert('O campo "EMAIL" é obrigatório.');
    return;
  }
  if (senha.trim() === "" || senha.length < 8 || senha.length > 32) {
    alert('O campo "SENHA" é obrigatório, deve ter entre 8 e 32 caracteres.');
    return;
  }
  if (categorias.length == 0) {
    alert('O campo "CATEGORIAS" é obrigatório.');
    return;
  }
  if (redesSociais.length == 0) {
    alert('O campo "REDES SOCIAIS" é obrigatório.');
    return;
  }
  if (
    descricao.trim() === "" ||
    descricao.length < 10 ||
    descricao.length > 400
  ) {
    alert(
      'O campo "DESCRIÇÃO" é obrigatório e deve ter entre 10 e 400 caracteres.'
    );
    return;
  }



 listCadastro.push({
   tipo: 1,
   nomeInfluencer: nomeInfluencer,
   cpf: cpf,
   email: email,
   senha: senha,
   localidade: localidade,
   categorias: categorias,
   descricao: descricao,
   redesSociais: redesSociais,
 });

 localStorage.setItem("listCadastro", JSON.stringify(listCadastro));

 alert(
   `Perfil cadastrado com sucesso. Bem vindo ao DIVULGA AÍ, ${nomeInfluencer}`
 );

 window.location.href = "../public/login.html";
}