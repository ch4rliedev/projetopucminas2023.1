function salvarDados() {
    const nomeInfluencer = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const localidade = document.querySelector('.form-select-lg').value;
    
    const categorias = Array.from(document.getElementsByClassName('categoria'))
      .filter(categoria => categoria.checked)
      .map(categoria => categoria.value);

    const redesSociais = Array.from(document.getElementsByClassName('redes'))
      .filter(rede => rede.checked)
      .map(rede => rede.value);
  
    const descricao = document.getElementById('descricao').value;
    
    if (nomeInfluencer.trim() === '' || nomeInfluencer.length < 5 || nomeInfluencer.length > 25) {
        alert('O campo "NOME DO INFLUENCER" é obrigatório e deve ter entre 5 e 25 caracteres.');
        return;
    }
    if (cpf.trim() === '' || cpf.length != 11 || isNaN(cpf)) {
        alert('O campo "CPF" é obrigatório e só aceita números, 11 dígitos.');
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
    if (redesSociais.length == 0) {
        alert('O campo "REDES SOCIAIS" é obrigatório.');
        return;
    }
    if (descricao.trim() === ''  || descricao.length < 10 || descricao.length > 400) {
        alert('O campo "DESCRIÇÃO" é obrigatório e deve ter entre 10 e 400 caracteres.');
        return;
    }
    
    localStorage.setItem('nomeInfluencer', nomeInfluencer);
    localStorage.setItem('cpf', cpf);
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);
    localStorage.setItem('localidade', localidade);
    localStorage.setItem('categorias', JSON.stringify(categorias));
    localStorage.setItem('descricao', descricao);
    localStorage.setItem('redesSociais', JSON.stringify(redesSociais));

    alert(`Perfil cadastrado com sucesso. Bem vindo ao DIVULGA AÍ, ${nomeInfluencer}`);

    window.location.href = './portal_influencer.html';
  }
  