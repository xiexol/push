document.getElementById('hamburger').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); // Tambahkan atau hapus kelas 'active'
});

// Kalkulator BMI
document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    // Menghitung BMI
    const bmi = (weight * 10000) / (height * height);
    
    // Menampilkan hasil
    const bmiResult = document.getElementById('bmi-result');
    const bmiOutput = document.getElementById('bmi-output');
    const bmiCategory = document.getElementById('bmi-category');
    
    bmiOutput.innerHTML = `BMI Anda adalah: <strong>${bmi.toFixed(2)}</strong>`;
    
    // Menentukan kategori BMI
    if (bmi < 18.5) {
        bmiCategory.innerHTML = "Kategori: Kurus";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory.innerHTML = "Kategori: Ideal";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory.innerHTML = "Kategori: Overweight";
    } else {
        bmiCategory.innerHTML = "Kategori: Obesitas";
    }
    
    bmiResult.style.display = 'block'; // Menampilkan hasil
});

// Kalkulator Kalori
document.getElementById('calorie-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight-cal').value);
    const height = parseFloat(document.getElementById('height-cal').value);
    const activityLevel = document.getElementById('activity-level').value;
    let bmr;

    // Menghitung BMR berdasarkan jenis kelamin
    if (gender === 'male') {
        bmr = 10 * weight + 6
.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Menghitung kalori harian berdasarkan tingkat aktivitas
    let calorieNeeds;
    switch (activityLevel) {
        case 'sedentary':
            calorieNeeds = bmr * 1.2;
            break;
        case 'light':
            calorieNeeds = bmr * 1.375;
            break;
        case 'moderate':
            calorieNeeds = bmr * 1.55;
            break;
        case 'active':
            calorieNeeds = bmr * 1.725;
            break;
        default:
            calorieNeeds = bmr; // Jika tidak ada pilihan
    }

    // Menampilkan hasil
    const calorieResult = document.getElementById('calorie-result');
    const calorieOutput = document.getElementById('calorie-output');
    
    calorieOutput.innerHTML = `Kalori Harian yang Dibutuhkan: <strong>${Math.round(calorieNeeds)}</strong> kalori`;
    calorieResult.style.display = 'block'; // Menampilkan hasil
});

// Tab switching
document.getElementById('bmi-tab').addEventListener('click', function() {
    document.getElementById('bmi-calculator').style.display = 'block'; // Tampilkan kalkulator BMI
    document.getElementById('calorie-calculator').style.display = 'none'; // Sembunyikan kalkulator kalori
    this.classList.add('active');
    document.getElementById('calorie-tab').classList.remove('active');
});

document.getElementById('calorie-tab').addEventListener('click', function() {
    document.getElementById('calorie-calculator').style.display = 'block'; // Tampilkan kalkulator kalori
    document.getElementById('bmi-calculator').style.display = 'none'; // Sembunyikan kalkulator BMI
    this.classList.add('active');
    document.getElementById('bmi-tab').classList.remove('active');
});