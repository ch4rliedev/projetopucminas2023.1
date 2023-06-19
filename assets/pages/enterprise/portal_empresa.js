let listAnuncioInfluencer = JSON.parse(localStorage.getItem('listAnuncioInfluencer'))

for(var i=0; i<listAnuncioInfluencer.length; i++){
    $("#todoAnuncio").append("<div class='todosAnuncios'><h2>"+listAnuncioInfluencer[i].titulo+"</h2><p>"+listAnuncioInfluencer[i].descAnuncio+"</p><div class='divVerMais'><a class='verMais' href='./influencer_anuncio1.html'>Ver mais</a></div></div>");
}