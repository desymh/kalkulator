// Fungsi untuk menampilkan modal dengan hasil kalkulasi
function showResultModal(result) {
    const modal = document.getElementById('resultModal');
    const resultText = document.getElementById('resultText');
    resultText.textContent = result; // Set hasil kalkulasi
    modal.classList.add('show'); // Tampilkan modal
}

// Fungsi untuk menutup modal
function closeModal() {
    const modal = document.getElementById('resultModal');
    modal.classList.remove('show'); // Sembunyikan modal
}

// Event listener untuk tombol close
document.getElementById('closeModal').addEventListener('click', closeModal);

// Event listener untuk form submit
document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form disubmit ke server

    // Ambil nilai input dari form
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    let result;

    // Periksa apakah input valid dan kalkulasi hasil
    if (isNaN(num1) || isNaN(num2)) {
        result = "Invalid input! Please enter valid numbers.";
    } else {
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
                    result = "Error: Division by zero!";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = "Invalid operator!";
        }
    }

    // Tampilkan modal dengan hasil kalkulasi
    showResultModal(result);
});
