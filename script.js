const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);

    mensagem.value = textoEncriptado;
    
    

}

function btnDescriptografar() {
    const textoDescriptado = descriptar(inputTexto.value);
    mensagem.value = textoDescriptado;
    

}


function encriptar(stringEncriptada){
    let matrizCodigo = [["a", "ar"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            mensagem.style.backgroundImage = "none";
            
            const msgInfo1 = document.querySelector(".informacao01")
            msgInfo1.style.display = "none";

            const msgInfo2 = document.querySelector(".informacao02")
            msgInfo2.style.display = "none";

            const personagem = document.querySelector(".personagem")
            personagem.style.display = "none";

            const btnCopy = document.querySelector(".btnCopiar")
            btnCopy.style.visibility = "visible";
        

        };
    };

    return stringEncriptada;

};


function descriptar(stringDescriptada){
    let matrizCodigo = [["a", "ar"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for(i=0; i < matrizCodigo.length; i++) {
        if(stringDescriptada.includes(matrizCodigo[i][0])){
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            mensagem.style.backgroundImage = "none";

            const msgInfo1 = document.querySelector(".informacao01")
            msgInfo1.style.display = "none";

            const msgInfo2 = document.querySelector(".informacao02")
            msgInfo2.style.display = "none";

            const personagem = document.querySelector(".personagem")
            personagem.style.display = "none";

            const btnCopy = document.querySelector(".btnCopiar")
            btnCopy.style.visibility = "visible";
        };
    };

    return stringDescriptada;

}


function copiarTexto(){
    textoCopiado = document.getElementById("copiar");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999999);

    document.execCommand("copy");


};