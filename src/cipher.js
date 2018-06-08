// // window.cipher = {
//   offset:35, function(offset, )
//   encriptar:
//   // ...
//   desencriptar:
// };
// window.cipher = {
// let mensaje=document.getElementById("mensaje").value;
// let posiciones=document.getElementById("posiciones").value;
//    function encode(posiciones,mensaje){
//     let resultado = ""; //code;
//     let codigo = resultado;
//   for (let i=0; i<mensaje.length;i++){
//     if (mensaje.charCodeAt(i)>=65 && mensaje.charCodeAt(i)<=90){
//       codigo = (((mensaje.charCodeAt(i)-65)+posiciones)%26)+65;
//     }
//     else if (mensaje.charCodeAt(i)>=97 && mensaje.charCodeAt(i)<=122){
//       codigo = (((mensaje.charCodeAt(i)-97)+posiciones)%26)+97;
//     }
//     else if (mensaje.charCodeAt(i)>=32 && mensaje.charCodeAt(i)<=64){
//       codigo = (((mensaje.charCodeAt(i)-32)+posiciones)%26)+32;
//     }
//     resultado=resultado+String.fromCharCode(codigo);
//   }
//   return resultado;
// }
// console.log(encode(posiciones,mensaje));
// };
///UpperCase Letters fins de 65 a 90
///LowerCase Letters fins de 97 a 122


const cifrado = (mensaje, posicion)=>{
  let resultado = "";
  let cifrar = resultado;                   ///Se re asigna el valor a la variable
  for (let i = 0; i < mensaje.length; i++){     //para poder operar después y no hacerlo con un string vacío

    ///MAYUS: A
    if (mensaje.charCodeAt(i)>=65 && mensaje.charCodeAt(i)<=90){
      cifrar = (((mensaje.charCodeAt(i)-65) + posicion) % 26)+65;
    }
    ///minus: a
    else if (mensaje.charCodeAt(i)>=97 && mensaje.charCodeAt(i)<=122){
      cifrar = (((mensaje.charCodeAt(i)-97) + posicion) % 26) + 97;
    }
    ///Caracteres Especiales

    else if (mensaje.charCodeAt(i)>=32 && mensaje.charCodeAt(i)<=64){
      cifrar = (((mensaje.charCodeAt(i) - 32)+posicion) % 26) + 32;
    }
    resultado= resultado + String.fromCharCode(cifrar); /// String.fromCharCode() convierte un
                                            //caracter unicode/numero a un caracter
  }
  return resultado;
}
console.log(cifrado("Que onda ", 3));
