//
const userText = document.getElementById("userText");
const userOut = document.getElementById("userOut");
const messageCipher = document.getElementById("messageCipher");
const messageDesCipher = document.getElementById("messageDesCipher");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

function encripta() {
  let valor = userText.value;
  messageCipher.innerHTML = window.cipher.encode(valor);
  console.log();

}

button1.addEventListener("click",encripta);


  function descifra(){
    let valor = userOut.value;
    messageDesCipher.innerHTML = window.cipher.decode(valor);

  }

button2.addEventListener("click",descifra);
