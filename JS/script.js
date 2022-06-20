/* animações text nav-bar */

/* text GitHub */
function mouseEnterMouse1(){
    document.getElementById("github").style = "color: gray;";
}
function mouseLeaveMouse1(){
    document.getElementById("github").style = "color: white;";
}
/* text Linkedin */
function mouseEnterMouse2(){
    document.getElementById("linkedin").style = "color: gray;";
}
function mouseLeaveMouse2(){
    document.getElementById("linkedin").style = "color: white;";
}


/* animações botão Logar */
document.querySelector("button").style = " color: white;margin-top: 5%;border-radius: 5px;height: 50px;font-size: 16px;font-weight: bold;font-family: 'Tiro Devanagari Sanskrit', serif;background-image: linear-gradient(to right, rgb(58, 11, 119), rgb(4, 0, 36) );border: none;";

function clickButton(){
    document.querySelector("button").style = " color: black;margin-top: 5%;border-radius: 5px;height: 50px;font-size: 16px;font-weight: bold;font-family: 'Tiro Devanagari Sanskrit', serif;background-image: linear-gradient(to right, rgb(96, 1, 219), rgb(9, 5, 37) );border: none;";
}
function unClickButton(){
    document.querySelector("button").style = " color: white;margin-top: 5%;border-radius: 5px;height: 50px;font-size: 16px;font-weight: bold;font-family: 'Tiro Devanagari Sanskrit', serif;background-image: linear-gradient(to right, rgb(58, 11, 119), rgb(4, 0, 36) );border: none;";
}
function mouseEnterMouse(){
    document.querySelector("button").style = " color: black;margin-top: 5%;border-radius: 5px;height: 50px;font-size: 16px;font-weight: bold;font-family: 'Tiro Devanagari Sanskrit', serif;background-image: linear-gradient(to right, rgb(58, 11, 119), rgb(4, 0, 36) );border: none;";
}
function mouseLeaveMouse(){
    document.querySelector("button").style = " color: white;margin-top: 5%;border-radius: 5px;height: 50px;font-size: 16px;font-weight: bold;font-family: 'Tiro Devanagari Sanskrit', serif;background-image: linear-gradient(to right, rgb(58, 11, 119), rgb(4, 0, 36) );border: none;";
}

/* calcular media */

function calcularMedia(){


    var inputNota1 = document.querySelector("#nota1");
    var nota1 = inputNota1.value;
    var inputNota2 = document.querySelector("#nota2");
    var nota2 = inputNota2.value;
    var exame = 0;
    var inputExame = document.querySelector("#exame");
    var exame = inputExame.value;

    console.log(exame);
    console.log(nota1);
    console.log(nota2);
    var mediaSemestral = (Number(nota1) + Number(nota2))/2;
    console.log(mediaSemestral);

    /* se o campo do exame estiver nulo ele vai calcular a media semestral se não a media final */
if(exame == 0){
    verificarSePassou(mediaSemestral);
}else{
    calcularMediaFinal(mediaSemestral,exame);
}

/* calcular media  final*/
}

function calcularMediaFinal(mediaSemestral,exame){
    var mediaFinal = (mediaSemestral + Number(exame))/2;
    verificarSePegouDp(mediaFinal);
}

/* verificar se passou */

function verificarSePassou(mediaSemestral){
    mostrarAviso();
    if(mediaSemestral < 7){
        document.getElementById("aviso").textContent = "Vai Para o Exame";
        avisoNota(mediaSemestral);
     
    }else{
        document.getElementById("aviso").textContent = "Passou!!!";
        avisoNota(mediaSemestral);
       
    }
}
/* verificar se pegou dp */
function verificarSePegouDp(mediaFinal){
    mostrarAviso();
    if(mediaFinal < 5){
        document.getElementById("aviso").textContent = "Ficou de DP";
        avisoNotaFinal(mediaFinal);
    }else{
        document.getElementById("aviso").textContent = "Escapou da DP";
        avisoNotaFinal(mediaFinal);
        
    }
}
/* mensagens das notas */
function avisoNota(mediaSemestral){
    document.getElementById("nota").textContent = "Sua Media Semestral = " + mediaSemestral;
}
function avisoNotaFinal(mediaFinal){
    document.getElementById("nota").textContent = "Sua Media Final = " + mediaFinal;
}
/* animação da div alerta */
function mostrarAviso(){
    document.getElementById("alerta").style = "visibility: visible;  text-align: center; background-image: linear-gradient(to right, rgb(96, 1, 219), rgb(9, 5, 37) );border: 5px;border-color: black;border-radius: 5px;";
}