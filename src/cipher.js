window.cipher = {

};
const cifrado = (string, offset)=>{
  let result = "";
  let cifrar = result;

  for (let i = 0; i < string.length; i++){
  let charCodigo = string.charCodeAt(i);
    ///MAYUS: A
    if (charCodigo >= 65 && charCodigo <= 90){
      cifrar = (((charCodigo - 65) + offset) % 26) + 65;
    }
    ///minus: a
    else if (charCodigo >= 97 && charCodigo <= 122){
      cifrar = (((charCodigo - 97) + offset) % 26) + 97;
    }
    else if (charCodigo === 32){
      cifrar = 32;
    }
    ///Caracteres Especiales

    else if (charCodigo >= 32 && charCodigo <= 64){
      cifrar = (((charCodigo - 32) + offset) % 26) + 32;
    }
    result = result + String.fromCharCode(cifrar);

  }
  return result;
}
///Cambiar esta function a arrow function
const descifrado = (string, offset)=>{
  let result2 = "";
  let descifrar = result2;

  for (let i = 0; i < string.length; i++){
    let charCodigo = string.charCodeAt(i);
    ///MAYUS: A
    if (charCodigo >= 65 && charCodigo <= 90){
      descifrar = (((charCodigo - 65) - offset + 26) % 26) + 65;
    }
    ///minus: a
    else if (charCodigo >= 97 && charCodigo <= 122){
      descifrar = (((charCodigo - 97) - offset + 26) % 26) + 97;
    }
    else if (charCodigo === 32){
      descifrar = 32;
    }
    ///Caracteres Especiales

    else if (charCodigo >= 32 && charCodigo <= 64){
      descifrar = (((charCodigo - 32) - offset + 26) % 26) + 32;
    }
    result2 = result2 + String.fromCharCode(descifrar);

  }
  return result2;
}

function encripta(){
  let userText = document.getElementById("userText").value;
  document.getElementById("messageCipher").innerHTML = "Tu mensaje cifrado es " + cifrado(userText, 15);
}

  function descifra(){
    let userOut = document.getElementById("userOut").value;
    document.getElementById("messageDesCipher").innerHTML = "Tu mensaje Descifrado es " + descifrado(userOut, 15);
  }
