
    // let iniciar = document.getElementsByClassName("button")[0];
// let pausar = document.getElementsByClassName("button")[1];
let zerar = document.getElementsByClassName("button")[2];
let segundos = document.getElementById("segundos");
let minutos = document.getElementById("minutos");
let horas = document.getElementById("horas");

function iniciar() {
    let iniciar = document.getElementsByClassName("button")[0];
    clear = iniciar.addEventListener ("click", cronometro);
    }

    let pausar = document.getElementsByClassName("button")[1];
    pausar.addEventListener ("click", () => (
        clearInterval(clear);
    )); 
        
function cronometro() {
   var intervalo = setInterval(() => {
        segundos.textContent = parseInt(segundos.textContent, 10) + 1;
    }, 1000);
}

iniciar()




