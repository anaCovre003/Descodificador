const textArea= document.querySelector(".texto");
const mensagem= document.querySelector("#mensagem");
const imagem = document.querySelector("#bonecos");

function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value ="";

   if (textoEncriptado == "") {
    imagem.style.display = "none"; // oculta a imagem
  } else {
    imagem.style.display = "block"; // exibe a imagem
  }
}


function encriptar(stringEncriptada){

       let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
       stringEncriptada = stringEncriptada.toLowerCase();
       for(let i =0;i<matrizCodigo.length;i++){

        if(stringEncriptada.includes(matrizCodigo[i][0])){
          stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
        
       }
       return stringEncriptada;
    }  

  function btnDesencriptar(){
  const textoDesencriptado = desencriptar(textArea.value);
  mensagem.value = textoDesencriptado;
  textArea.value ="";

  if (textoDesencriptado == "") {
    imagem.style.display = "none"; // oculta a imagem
  } else {
    imagem.style.display = "block"; // exibe a imagem
  }
}

function desencriptar(stringDesencriptada){

  let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();
  for(let i =0;i<matrizCodigo.length;i++){

   if(stringDesencriptada.includes(matrizCodigo[i][0])){
    stringDesencriptada= stringDesencriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
   }
   
  }
  return stringDesencriptada;
}
