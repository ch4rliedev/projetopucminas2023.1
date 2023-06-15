/*let html_com_imagem = `
<div class="container">
<div class="row">
  <section class="col-sm">
    <img src="undraw_social_thinking_re_y8cc.svg" alt="" class="img-thumbnail">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et vulputate purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam pulvinar felis velit, eget elementum magna aliquet ac. Donec non erat eget quam commodo pretium sit amet et est. Quisque ut velit id justo dignissim consequat. Ut at velit tortor. In luctus dui non ligula laoreet finibus.</p>

  </section>

  <section class="col-sm">
    <img src="undraw_mobile_marketing_re_p77p.svg" alt="" class="img-thumbnail">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et vulputate purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam pulvinar felis velit, eget elementum magna aliquet ac. Donec non erat eget quam commodo pretium sit amet et est. Quisque ut velit id justo dignissim consequat. Ut at velit tortor. In luctus dui non ligula laoreet finibus.</p>

  </section>

  <section class="col-sm">
    <img src="undraw_segment_analysis_re_ocsl.svg" alt="" class="img-thumbnail">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et vulputate purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam pulvinar felis velit, eget elementum magna aliquet ac. Donec non erat eget quam commodo pretium sit amet et est. Quisque ut velit id justo dignissim consequat. Ut at velit tortor. In luctus dui non ligula laoreet finibus.</p>

  </section>

</div>
</div`


btn = document.querySelector("#procurar")
btn.addEventListener("click", () => {
   //pegar id result e inseri image quando o botao for clicado
   document.querySelector("#resultado").innerHTML = html_com_imagem

})*/


/*
EFEITO quando clicar em procurar, carregar um spinner embaixo, desativado

       function clicou(){
        //alert("clicou")
        result = document.querySelector("#resultado")
        
        result.innerHTML=`
        <div class="text-center">
            procurando aguarde.....
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>       
        </div>`

       }
       */


/*EFEITO NO DROPDOWN*/

const menu = document.querySelectorAll(".dropdown-item")
menu.forEach(
  (node,index) => {
  node.addEventListener("click", function(){
   if(`${index}` == 0){ 
   	console.log("clicado no Gaming")
       Swal.fire({
       icon: 'success',
       title: 'Gaming Escolhido',
       showConfirmButton: false,
       timer: 1500
         })
        }
   else if(`${index}` == 1){
   	console.log("clicado no Cosméticos")
       Swal.fire({
       icon: 'success',
       title: 'Cosméticos Escolhido',
       showConfirmButton: false,
       timer: 1500
})
}
else if(`${index}` == 2){
    console.log("clicado no Lifestyle")
    Swal.fire({
    icon: 'success',
    title: 'Lifestyle Escolhido',
    showConfirmButton: false,
    timer: 1500
})
    
}

 else if(`${index}` == 3){
    console.log("clicado no Fitness")
    Swal.fire({
    icon: 'success',
    title: 'Fitness Escolhido',
    showConfirmButton: false,
    timer: 1500
})
}

  else if(`${index}` == 4){
    console.log("clicado no Esportes")
    Swal.fire({
    icon: 'success',
    title: 'Esportes Escolhido',
    showConfirmButton: false,
    timer: 1500
})
}
else if(`${index}` == 5){
    console.log("clicado no Variedades")
    Swal.fire({
    icon: 'success',
    title: 'Variedades Escolhido',
    showConfirmButton: false,
    timer: 1500
})
}


 else if(`${index}` == 6){
    console.log("clicado no Culinaria")
    Swal.fire({
    icon: 'success',
    title: 'Culinaria Escolhido',
    showConfirmButton: false,
    timer: 1500
})
}


})

 //console.log(node,index)
}
)




/*Efeito no botao Procurar */

procurar = () => {
let timerInterval
Swal.fire({
  title: 'por favor espere..!',
  html: 'Procurando aguarde <b></b> segundos.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
    let html_com_imagem = `
<div class="container">
<div class="row">
  <section class="col-sm">
    <img src="undraw_social_thinking_re_y8cc.svg" alt="" class="img-thumbnail">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et vulputate purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam pulvinar felis velit, eget elementum magna aliquet ac. Donec non erat eget quam commodo pretium sit amet et est. Quisque ut velit id justo dignissim consequat. Ut at velit tortor. In luctus dui non ligula laoreet finibus.</p>

  </section>

  <section class="col-sm">
    <img src="undraw_mobile_marketing_re_p77p.svg" alt="" class="img-thumbnail">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et vulputate purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam pulvinar felis velit, eget elementum magna aliquet ac. Donec non erat eget quam commodo pretium sit amet et est. Quisque ut velit id justo dignissim consequat. Ut at velit tortor. In luctus dui non ligula laoreet finibus.</p>

  </section>

  <section class="col-sm">
    <img src="undraw_segment_analysis_re_ocsl.svg" alt="" class="img-thumbnail">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et vulputate purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam pulvinar felis velit, eget elementum magna aliquet ac. Donec non erat eget quam commodo pretium sit amet et est. Quisque ut velit id justo dignissim consequat. Ut at velit tortor. In luctus dui non ligula laoreet finibus.</p>

  </section>

</div>
</div`
    document.querySelector("#resultado").innerHTML = html_com_imagem
  }
})
}