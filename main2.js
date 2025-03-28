document.getElementById('sumar').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        document.getElementById('result').innerText = "Resultado: "+sumar;
    } else {
        document.getElementById('result').innerText = 'Por favor, ingresa números válidos.';
    }
});
