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
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            mensagem.style.backgroundImage = "none";
        };
    };

    return stringEncriptada;

};


function descriptar(stringDescriptada){
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for(i=0; i < matrizCodigo.length; i++) {
        if(stringDescriptada.includes(matrizCodigo[i][0])){
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            mensagem.style.backgroundImage = "none";
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
