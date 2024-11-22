function calculateBMI() {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const height = parseFloat(document.getElementById('height').value) / 100; // konversi cm ke meter
    const weight = parseFloat(document.getElementById('weight').value);

 
    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';

    if (bmi < 18.5) {
        category = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal (ideal)';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Kelebihan berat badan';
    } else {
        category = 'Kegemukan (Obesitas)';
    }

 
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <div><strong>Jenis Kelamin:</strong> ${gender === 'male' ? 'Laki-laki' : 'Perempuan'}</div>
        <div class="bmi-value"><strong>BMI Anda:</strong> ${bmi}</div>
        <div class="bmi-value-label"><strong>Kategori:</strong> ${category}</div>
        <div><strong>Tinggi Badan:</strong> ${document.getElementById('height').value} cm</div>
        <div><strong>Berat Badan:</strong> ${document.getElementById('weight').value} kg</div>
    `;

    resultDiv.classList.add('show'); // Tambahkan kelas untuk tampilkan efek
}