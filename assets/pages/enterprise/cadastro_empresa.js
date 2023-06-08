function salvarDados() {
    const nomeEmpresa = document.getElementById('nome_da_empresa').value;
    const cnpj = document.getElementById('cnpj').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const localidade = document.querySelector('.form-select-lg').value;
    
    const categorias = Array.from(document.getElementsByClassName('categoria'))
      .filter(categoria => categoria.checked)
      .map(categoria => categoria.value);

    console.log(categorias)
  
    const descricao = document.getElementById('descricao').value;

    if (nomeEmpresa.trim() === '' || nomeEmpresa.length < 5 || nomeEmpresa.length > 25) {
        alert('O campo "NOME DA EMPRESA" é obrigatório e deve ter entre 5 e 25 caracteres.');
        return;
    }
    if (cnpj.trim() === '' || cnpj.length != 14 || isNaN(cnpj)) {
        alert('O campo "CNPJ" é obrigatório e só aceita números, 14 dígitos.');
        return;
    }
    if (email.trim() === '') {
        alert('O campo "EMAIL" é obrigatório.');
        return;
    }
    if (senha.trim() === '' || senha.length < 8 || senha.length > 32) {
        alert('O campo "SENHA" é obrigatório, deve ter entre 8 e 32 caracteres.');
        return;
    }
    if (categorias.length == 0) {
        alert('O campo "CATEGORIAS" é obrigatório.');
        return;
    }
    if (descricao.trim() === ''  || descricao.length < 10 || descricao.length > 400) {
        alert('O campo "DESCRIÇÃO" é obrigatório e deve ter entre 10 e 400 caracteres.');
        return;
    }
    
    localStorage.setItem('nomeEmpresa', nomeEmpresa);
    localStorage.setItem('cnpj', cnpj);
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);
    localStorage.setItem('localidade', localidade);
    localStorage.setItem('categorias', JSON.stringify(categorias));
    localStorage.setItem('descricao', descricao);

    alert(`Perfil cadastrado com sucesso. Bem vindo ao DIVULGA AÍ, ${nomeEmpresa}`);

    window.location.href = './portal_empresa.html';
  }
  