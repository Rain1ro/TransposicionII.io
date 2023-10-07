
document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const outputText = document.getElementById("outputText");
    const encodeButton = document.getElementById("encodeButton");
    const decodeButton = document.getElementById("decodeButton");
    const resetButton = document.getElementById("resetButton");
    const columnCountInput = document.getElementById("columnCount");

    encodeButton.addEventListener("click", function () {
        const text = inputText.value;
        const columnCount = parseInt(columnCountInput.value);
        const encodedText = encode(text, columnCount);
        outputText.value = encodedText;
    });

    decodeButton.addEventListener("click", function () {
        const text = inputText.value;
        const columnCount = parseInt(columnCountInput.value);
        const decodedText = decode(text, columnCount);
        outputText.value = decodedText;
    });

    resetButton.addEventListener("click", function () {
        inputText.value = "";
        outputText.value = "";
    });

    function encode(text, columnCount) {
        let encodedText = "";
        for (let i = 0; i < columnCount; i++) {
            for (let j = i; j < text.length; j += columnCount) {
                encodedText += text[j];
            }
        }
        return encodedText;
    }

    function decode(text, columnCount) {
        const rowCount = Math.ceil(text.length / columnCount);
        const cellCount = rowCount * columnCount;
        const decodedText = new Array(cellCount);
        let index = 0;
        for (let i = 0; i < columnCount; i++) {
            for (let j = i; j < cellCount; j += columnCount) {
                if (index < text.length) {
                    decodedText[j] = text[index];
                    index++;
                }
            }
        }
        return decodedText.join('');
    }
});
