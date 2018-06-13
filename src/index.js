//
const userText = document.getElementById("userText");
const userOut = document.getElementById("userOut");
const messageCipher = document.getElementById("messageCipher");
const messageDesCipher = document.getElementById("messageDesCipher");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.addEventListener("click", encripta){
  window.cipher.encode(userText.value, offset);
  messageCipher.innerHTML = "Tu mensaje cifrado es " + userText;
  console.log(window.cipher.encode(userText.value, offset));
};


  function descifra(){


  }
