let str = "Priti";
let str1 = "";

for (let i = 0; i < str.length; i++) {
  let code = str.charCodeAt(i);

  // If uppercase (A-Z)
  if (code >= 65 && code <= 90) {
    str1 += String.fromCharCode(code + 32); // convert to lowercase
  }
  // If lowercase (a-z)
  else if (code >= 97 && code <= 122) {
    str1 += String.fromCharCode(code - 32); // convert to uppercase
  } else {
    str1 += str[i]; // keep other chars unchanged
  }
}
console.log(str1);