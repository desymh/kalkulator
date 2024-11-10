<?php
// Cek apakah form telah disubmit dan proses kalkulasi
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $operator = $_POST['operator'];

    // Periksa apakah input valid
    if (is_numeric($num1) && is_numeric($num2)) {
        // Menghitung berdasarkan operator yang dipilih
        switch ($operator) {
            case '+':
                $result = $num1 + $num2;
                break;
            case '-':
                $result = $num1 - $num2;
                break;
            case '*':
                $result = $num1 * $num2;
                break;
            case '/':
                if ($num2 == 0) {
                    $result = "Error: Division by zero!";
                } else {
                    $result = $num1 / $num2;
                }
                break;
            default:
                $result = "Invalid operator";
                break;
        }
    } else {
        $result = "Invalid input! Please enter valid numbers.";
    }
} else {
    $result = "";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator PHP dengan JavaScript</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div class="calculator">
        <h2>Kalkulator</h2>

        <!-- Form untuk kalkulasi -->
        <form method="POST" id="calculator-form">
            <div class="input-field">
                <input type="number" name="num1" id="num1" placeholder="Angka pertama" required>
            </div>
            
            <div class="input-field">
                <input type="number" name="num2" id="num2" placeholder="Angka kedua" required>
            </div>
            
            <div class="operator">
                <select name="operator" id="operator">
                    <option value="+" selected>Tambah (+)</option>
                    <option value="-">Kurang (-)</option>
                    <option value="*">Kali (*)</option>
                    <option value="/">Bagi (/)</option>
                </select>
            </div>

            <div class="button">
                <button type="submit" id="submit-button">Hitung</button>
            </div>
        </form>
    </div>
     <div id="resultModal" class="modal">
        <div class="modal-content">
            <span class="close" id="closeModal">&times;</span>
            <h3>Hasil: </h3>
            <p id="resultText"></p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
