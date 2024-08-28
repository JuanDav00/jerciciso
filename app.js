
function getRandomSymbol() {
    const symbols = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    return symbols.charAt(Math.floor(Math.random() * symbols.length));
}

// Encripta el texto ingresado, reemplazando cada carácter con un símbolo aleatorio
function encrypt() {
    const inputText = document.getElementById("inputText").value;
    let encryptedText = "";

    for (let i = 0; i < inputText.length; i++) {
        // Por cada carácter, agrega un símbolo aleatorio a la cadena encriptada
        encryptedText += getRandomSymbol();
    }

    // Muestra el texto encriptado en el área de salida
    document.getElementById("outputText").value = encryptedText;
}

// Copia el texto encriptado al portapapeles
function copyText() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
}