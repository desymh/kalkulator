document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman reload saat form disubmit
    
    // Ambil input nilai dari form
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;

    var result;

    // Validasi input
    if (isNaN(num1) || isNaN(num2)) {
        result = "Input tidak valid! Pastikan memasukkan angka.";
    } else {
        // Hitung berdasarkan operator yang dipilih
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    result = "Error: Pembagian dengan nol!";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = "Operator tidak valid";
                break;
        }
    }

    // Tampilkan hasil kalkulasi menggunakan alert
    alert('Hasil: ' + result);
});