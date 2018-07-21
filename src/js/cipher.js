
const offset = 33;
window.cipher = {
  encode: (offset, string) => {
    let result = '';
    let encrypt = result;


    for (let i = 0; i < string.length;i++) {
      let charCode = string.charCodeAt(i);
      // MAYUS: A
      if (charCode >= 65 && charCode <= 90) {
        encrypt = (((charCode - 65) + offset) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        encrypt = (((charCode - 97) + offset) % 26) + 97;
      } else if (charCode === 32) {
        encrypt = 32;
      } else if (charCode >= 32 && charCode <= 64) {
        encrypt = (((charCode - 32) + offset) % 26) + 32;
      }
      result = result + String.fromCharCode(encrypt);
    }
    return result;
  },
  decode: (offset, string) => {
    let result = '';
    let decipher = result;

    for (let i = 0; i < string.length; i++) {
      let charCode = string.charCodeAt(i);
      // /MAYUS: A
      if (charCode >= 65 && charCode <= 90) {
        decipher = (((charCode + 65) - offset) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        decipher = (((charCode + 97) + offset) % 26) + 97;
      } else if (charCode === 32) {
        decipher = 32;
      } else if (charCode >= 32 && charCode <= 64) {
        decipher = (((charCode - 32) + offset) % 26) + 32;
      }
      result = result + String.fromCharCode(decipher);
    }
    return result;
  }

};
