document.getElementById('workout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const goal = document.getElementById('goal').value;
    const level = document.getElementById('level').value;
    const workoutPlan = document.getElementById('workout-plan');

    let workoutContent = '';

    // Menentukan rencana latihan berdasarkan tujuan dan tingkat kebugaran
    if (goal === 'weight_loss') {
        if (level === 'beginner') {
            workoutContent = `
                <div class="workout">
                    <h3>Latihan Menurunkan Berat Badan (Pemula)</h3>
                    <img src=".../ilustrasi/jumpingjack.gif" alt="Jumping Jacks">
                    <p>1. Jumping Jacks: 3 set x 15 repetisi</p>
                    <img src="../ilustrasi/squat.gif" alt="Squat">
                    <p>2. Squat: 3 set x 10 repetisi</p>
                    <img src="../ilustrasi/plank.gif" alt="Plank">
                    <p>3. Plank: 3 set x 20 detik</p>
                </div>
            `;
        } else if (level === 'intermediate') {
            workoutContent = `
                <div class="workout">
                    <h3>Latihan Menurunkan Berat Badan (Menengah)</h3>
                    <img src="../ilustrasi/burpees.gif" alt="Burpees">
                    <p>1. Burpees: 4 set x 10 repetisi</p>
                    <img src="../ilustrasi/lunges.gif" alt="Lunges">
                    <p>2. Lunges: 4 set x 10 repetisi per kaki</p>
                    <img src="../ilustrasi/highknee.gif" alt="High Knees">
                    <p>3. High Knees: 4 set x 30 detik</p>
                </div>
            `;
        } else if (level === 'advanced') {
            workoutContent = `
                <div class="workout">
                    <h3>Latihan Menurunkan Berat Badan (Lanjutan)</h3>
                    <img src="../ilustrasi/mountainclimb.gif" alt="Mountain Climbers">
                    <p>1. Mountain Climbers: 5 set x 30 detik</p>
                    <img src="../ilustrasi/squatjump.gif" alt="Squat Jumps">
                    <p>2. Squat Jumps: 5 set x 10 repetisi</p>
                    <img src="../ilustrasi/plank.gif" alt="Plank Jacks">
                    <p>3. Plank Jacks: 5 set x 15 repetisi</p>
                </div>
            `;
        }
    } else if (goal === 'muscle_gain') {
        if (level === 'beginner') {
            workoutContent = `
                <div class="workout">
                    <h3>Latihan Meningkatkan Otot (Pemula)</h3>
                    <img src="../ilustrasi/push-up.gif" alt="Push Up">
                    <p>1. Push Up: 3 set x 8 repetisi</p>
                    <img src="../ilustrasi/squat.gif" alt="Bodyweight Squat">
                    <p>2. Bodyweight Squat: 3 set x 10 repetisi</p>
                    <img src="../ilustrasi/glutebridge.gif" alt="Glute Bridge">
                    <p>3. Glute Bridge: 3 set x 10 repetisi</p>
                </div>
            `;
        } else if (level === 'intermediate') {
            workoutContent = `
                <div class="workout">
                    <h3>Latihan Meningkatkan Otot (Menengah)</h3>
                    <img src="../ilustrasi/declinepushup.gif" alt="Decline Push Up">
                    <p>1. Decline Push Up: 4 set x 8 repetisi</p>
                    <img src="../ilustrasi/bulgariansplitsquat.gif" alt="Bulgarian Split Squat">
                    <p>2. Bulgarian Split Squat: 4 set x 10 repetisi per kaki</p>
                    <img src="../ilustrasi/tricepdips.gif" alt="Tricep Dips">
                    <p>3. Tricep Dips (menggunakan kursi): 4 set x 10 repetisi</p>
                </div>
            `;
        } else if (level === 'advanced') {
            workoutContent = `
                <div class="workout">
                    <h3>Latihan Meningkatkan Otot (Lanjutan)</h3>
                    <img src="../ilustrasi/pylopushup.gif" alt="Plyometric Push Up">
                    <p>1. Plyometric Push Up: 5 set x 6 repetisi</p>
                    <img src="../ilustrasi/onelegsquat.gif" alt="Single-Leg Squat">
                    <p>2. Single-Leg Squat: 5 set x 8 repetisi per kaki</p>
                    <img src="../ilustrasi/pikepushup.gif" alt="Pike Push Up">
                    <p>3. Pike Push Up: 5 set x 8 repetisi</p>
                </div>
            `;
        }
    } else if (goal === 'general_fitness') {
        if (level === 'beginner') {
            workoutContent = `
                <div class="workout">
                    <h3>Latihan Sekadar Berolahraga (Pemula)</h3>
                    <img src="../ilustrasi/yoga.gif" alt="Yoga">
                    <p>1. Yoga: 30 menit</p>
                    <img src="../ilustrasi/walking.gif" alt="Berjalan">
                    <p>2. Berjalan: 20 menit</p>
                </div>
            `;
        } else if (level === 'intermediate') {
            workoutContent = `
                <div class="workout">
                    <h3>Latihan Sekadar Berolahraga (Menengah)</h3>
                    <img src="../ilustrasi/running.gif" alt="Jogging">
                    <p>1. Jogging: 30 menit</p>
                    <img src="../ilustrasi/circuit.gif" alt="Circuit Training">
                    <p>2. Circuit Training (gerakan sesuai dengan keinginan): 20 menit</p>
                </div>
            `;
        } else if (level === 'advanced') {
            workoutContent = `
                <div class="workout">
                    <h3>Latihan Sekadar Berolahraga (Lanjutan)</h3>
                    <img src="../ilustrasi/burpees.gif" alt="HIIT">
                    <p>1. HIIT (gerakan sesuai dengan keinginan): 30 menit</p>
                    <img src="../ilustrasi/circuit.gif" alt="Kombinasi Latihan Kekuatan dan Kardio">
                    <p>2. Kombinasi Latihan Kekuatan dan Kardio (gerakan sesuai dengan keinginan): 30 menit</p>
                </div>
            `;
        }
    }

    workoutPlan.innerHTML = workoutContent;
});

// Menangani pengiriman formulir pelacak kemajuan
// Menangani pengiriman formulir pelacak kemajuan
document.getElementById('progress-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const date = document.getElementById('date').value;
    const workout = document.getElementById('workout').value;
    const notes = document.getElementById('notes').value;

    // Membuat entri kemajuan baru
    const progressEntry = {
        date: date,
        workout: workout,
        notes: notes
    };

    // Ambil data kemajuan yang ada dari local storage
    let progressEntries = JSON.parse(localStorage.getItem('progressEntries')) || [];
    progressEntries.push(progressEntry);

    // Simpan kembali ke local storage
    localStorage.setItem('progressEntries', JSON.stringify(progressEntries));

    // Menampilkan entri kemajuan
    displayProgressEntries();

    // Mengosongkan formulir setelah pengiriman
    document.getElementById('progress-form').reset();
});

// Fungsi untuk menampilkan entri kemajuan dari local storage
function displayProgressEntries() {
    const progressList = document.getElementById('progress-list');
    progressList.innerHTML = ''; // Kosongkan daftar sebelum menampilkan

    let progressEntries = JSON.parse(localStorage.getItem('progressEntries')) || [];

    progressEntries.forEach((entry, index) => {
        const progressEntryHTML = `
            <div class="progress-entry" style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <strong>Tanggal:</strong> ${entry.date}<br>
                    <strong>Latihan:</strong> ${entry.workout}<br>
                    <strong>Catatan:</strong> ${entry.notes}
                </div>
                <button onclick="deleteEntry(${index})" style="margin-left: 10px;">Hapus</button> <!-- Tombol Hapus -->
            </div>
        `;
        progressList.innerHTML += progressEntryHTML;
    });
}

// Fungsi untuk menghapus entri kemajuan
function deleteEntry(index) {
    let progressEntries = JSON.parse(localStorage.getItem('progressEntries')) || [];
    progressEntries.splice(index, 1); // Menghapus entri berdasarkan index

    // Simpan kembali ke local storage
    localStorage.setItem('progressEntries', JSON.stringify(progressEntries));

    // Menampilkan entri kemajuan setelah penghapusan
    displayProgressEntries();
}

// Panggil fungsi untuk menampilkan entri kemajuan saat halaman dimuat
window.onload = displayProgressEntries; 
// Fungsi untuk menampilkan entri kemajuan dari local storage
// Panggil fungsi untuk menampilkan entri kemajuan saat halaman dimuat
window.onload = displayProgressEntries; 
document.getElementById('hamburger').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); // Tambahkan atau hapus kelas 'active'
});
let timerInterval;
let seconds = 0;
let setTime = 0; // Menyimpan waktu yang diatur

function updateTimerDisplay() {
    const display = document.getElementById('timer-display');
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

document.getElementById('set-timer').addEventListener('click', function() {
    setTime = parseInt(document.getElementById('set-time').value);
    if (setTime > 0) {
        seconds = setTime; // Set waktu yang diatur
        updateTimerDisplay();
        document.getElementById('start-timer').disabled = false; // Aktifkan tombol mulai
    }
});

document.getElementById('start-timer').addEventListener('click', function() {
    this.disabled = true;
    document.getElementById('stop-timer').disabled = false;
    document.getElementById('reset-timer').disabled = false;

    const halfTime = Math.floor(seconds / 2); // Hitung setengah waktu
    let elapsedTime = 0; // Waktu yang telah berlalu

    timerInterval = setInterval(() => {
        if (seconds > 0) {
            seconds--;
            elapsedTime++;
            updateTimerDisplay();

            // Suara saat mencapai setengah waktu
            if (elapsedTime === halfTime) {
                playSound('../half-time-sound.mp3'); // Ganti dengan path file suara
            }
        } else {
            clearInterval(timerInterval);
            playSound('../end-time-sound.mp3'); // Ganti dengan path file suara
            document.getElementById('start-timer').disabled = false;
            document.getElementById('stop-timer').disabled = true;
        }
    }, 1000);
});

document.getElementById('stop-timer').addEventListener('click', function() {
    clearInterval(timerInterval);
    document.getElementById('start-timer').disabled = false;
    this.disabled = true;
});

document.getElementById('reset-timer').addEventListener('click', function() {
    clearInterval(timerInterval);
    seconds = 0;
    updateTimerDisplay();
    document.getElementById('start-timer').disabled = false;
    this.disabled = true;
    document.getElementById('stop-timer').disabled = true;
});

// Fungsi untuk memutar suara
function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

// Inisialisasi tampilan timer
updateTimerDisplay();