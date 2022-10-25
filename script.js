const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const TextoEncriptado = Encriptar(inputTexto.value)
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage ="none"
    inputTexto.value =""
}


function Encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
           stringEncriptada = stringEncriptada.replaceAll
           (matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    inputTexto.value = "" 
    mensaje.classList.add("mensaje")
    }
    
    function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i =0; i < matrizCodigo.length; i++){
       if(stringDesencriptada.includes(matrizCodigo[i][1])){
          stringDesencriptada = stringDesencriptada.replaceAll
         (matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    
    return stringDesencriptada;
    }
    
    function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.style.backgroundImage ="url(imagenes/Muñeco.png)"
    mensaje.value =""
    alert("Texto Copiado")
    }
    
    
    

    

