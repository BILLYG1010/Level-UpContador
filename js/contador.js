window.addEventListener('load', iniciar)

function iniciar (){
    let contador = 0;  
    const NumeroInicio = document.querySelector("#NumeroInicio");
    const btns = document.querySelectorAll(".btn");
    
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
    
            const estilo = e.currentTarget.classList;
    
            if (estilo.contains("btnDisminuir")) {
                contador--;
               }
    
            if (estilo.contains("btnReiniciar")){
                 contador = 0;
               }    
            if (estilo.contains("btnIncrementar")){
                 contador++;
              }
        
            if (contador > 0){
                 NumeroInicio.style.color = "green";
              }
            if (contador < 0){
                 NumeroInicio.style.color = "red";
              }
            if (contador === 0){
                 NumeroInicio.style.color = "white";
              }
      
            NumeroInicio.textContent = contador;
        });
    });
 }
    
    
    
