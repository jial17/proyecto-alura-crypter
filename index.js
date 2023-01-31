//capturar elemntos html 
const textoEntrada = document.getElementById("text-entrada");
const textoSalida= document.getElementById("text-salida");
const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const btnCopiar = document.getElementById("copiar-des");
const imgNino = document.getElementById("nino");
//funcion encriptar texto
function encriptar(texto) {
 
  let textoEncriptado = "";  

  for (let i = 0; i < texto.length; i++) {

    let caracter = texto[i];
      
    if (caracter === "a") {
      textoEncriptado += "ai";
    } else if (caracter === "e") {
      textoEncriptado += "enter";
    } else if (caracter === "i") {
      textoEncriptado += "imes";
    } else if (caracter === "o") {
      textoEncriptado += "ober";
    } else if (caracter === "u") {
      textoEncriptado += "ufat";
    } else {
      textoEncriptado += caracter;
    }
  }
  
  return textoEncriptado;
}



//console.log(encriptar("probando la funcionalidad del desencriptador de alura challenge"));



//funcion desencriptar texto
function desencriptar(texto) {
 
  let textoDesencriptado = "";
 
  for (let i = 0; i < texto.length; i++) {
  
    let caracter = texto[i];
   
    if  (texto.slice(i, i + 2) === "ai") {
      textoDesencriptado += "a";
      i += 1;
    } else if (texto.slice(i, i + 5) === "enter") {
      textoDesencriptado += "e";
      i += 4;
    } else if (texto.slice(i, i + 4) === "imes") {
      textoDesencriptado += "i";
      i += 3;
    } else if (texto.slice(i, i + 4) === "ober") {
      textoDesencriptado += "o";
      i += 3;
    } else if (texto.slice(i, i + 4) === "ufat") {
      textoDesencriptado += "u";
      i += 3;
    } else {
      textoDesencriptado += caracter;
    }
   
  };
  return textoDesencriptado;
};
//console.log(desencriptar("proberbaindober lai fufatncimesobernailimesdaid denterl dentersenterncrimesptaidoberr denter ailufatrai chaillenterngenter"))

if (textoEntrada.value =="") {
  textoSalida.style.visibility = "hidden";
  imgNino.style.visibility = "visible";
  
}

//eventos botones
textoEntrada.addEventListener('change', e =>{
  e.preventDefault();
  textoSalida.value = "";
  textoSalida.style.visibility = "visible";
})

btnEncriptar.addEventListener('click', e =>{
  e.preventDefault();
  const texto = textoEntrada.value.toLowerCase();
  const msj = encriptar(texto);
  //console.log(msj);
  textoSalida.value= msj;
  imgNino.style.visibility= "hidden";
})
btnDesencriptar.addEventListener('click', e =>{
  e.preventDefault();
  const texto = textoEntrada.value.toLowerCase();
  const msj = desencriptar(texto);
  //console.log(msj);
  textoSalida.value= msj;
  textoEntrada.value= ""
})

btnCopiar.addEventListener('click', e => {
  e.preventDefault();
  textoSalida.select(); 
  try {
      // Copiando el texto seleccionado
      navigator.clipboard.writeText(textoSalida.value);
      if(successful) textoSalida.innerHTML = 'Copiado!';
      else textoSalida.innerHTML = 'Incapaz de copiar!';
  } catch (err) {
      textoSalida.innerHTML = 'Browser no soportado!';
  }
})