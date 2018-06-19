const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.addEventListener("click", event => {
  let userText = document.getElementById("userText").value;
  let results = cipher.encode(offset, userText);
  document.getElementById("messageCipher").innerHTML = results;
});
button2.addEventListener("click", event => {
  let userOut = document.getElementById("userOut").value;
  let results2 = cipher.decode(offset, userOut);
  document.getElementById("messageDesCipher").innerHTML = results2;
});

container.style.display = "none";
hh1.style.display = "none";

function buttonWelcome() {
  loader.style.display = "none";
  animations.style.display ="none";
  container.style.display = "flex";
  hh1.style.display = "block";
  // loader.style.display= "none";

  // titlepage.style.display = "block";
  // ingreso.style.display= "block";

}
