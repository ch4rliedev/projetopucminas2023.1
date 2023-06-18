function salvarDados() {
  const nomeEmpresa = document.getElementById("nome_da_empresa").value;
  const cnpj = document.getElementById("cnpj").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const localidade = document.querySelector(".form-select-lg").value;

  let listCadastro = JSON.parse(localStorage.getItem("listCadastro") || "[]");

    // Verifica se já existe um usuário cadastrado no localStorage pelo valor de email e o valor de cnpj
    const existingUser = listCadastro.find((user) => user.email === email || user.cnpj === cnpj);
    if (existingUser) {
      if (existingUser.email === email) {
        alert("Já existe um usuário cadastrado com este email.");
      } else {
        alert("Já existe um usuário cadastrado com este CNPJ.");
      }
      return;
    }

  const categorias = Array.from(document.getElementsByClassName("categoria"))
    .filter((categoria) => categoria.checked)
    .map((categoria) => categoria.value);

  const descricao = document.getElementById("descricao").value;

  if (
    nomeEmpresa.trim() === "" ||
    nomeEmpresa.length < 5 ||
    nomeEmpresa.length > 25
  ) {
    alert(
      'O campo "NOME DA EMPRESA" é obrigatório e deve ter entre 5 e 25 caracteres.'
    );
    return;
  }
  if (cnpj.trim() === "" || cnpj.length != 14 || isNaN(cnpj)) {
    alert('O campo "CNPJ" é obrigatório e só aceita números, 14 dígitos.');
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
    tipo: 0,
    nomeEmpresa: nomeEmpresa,
    cnpj: cnpj,
    email: email,
    senha: senha,
    localidade: localidade,
    categorias: categorias,
    descricao: descricao,
  });

  localStorage.setItem("listCadastro", JSON.stringify(listCadastro));

  alert(
    `Perfil cadastrado com sucesso. Bem vindo ao DIVULGA AÍ, ${nomeEmpresa}`
  );

  window.location.href = "../public/login.html";
}
