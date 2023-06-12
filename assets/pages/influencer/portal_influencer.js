let listAnuncio = JSON.parse(localStorage.getItem('listAnuncio'))

for(var i=0; i<listAnuncio.length; i++){
    $("#todoAnuncio").append("<div class='todosAnuncios'><h2>"+listAnuncio[i].titulo+"</h2><p>"+listAnuncio[i].descAnuncio+"</p><div class='divVerMais'><a class='verMais' href='./influencer_anuncio1.html'>Ver mais</a></div></div>");
}