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
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
}