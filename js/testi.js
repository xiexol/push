document.getElementById('hamburger').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); // Tambahkan atau hapus kelas 'active'
});
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        // Memutar suara wush saat kartu dibuka
        const wushSound = document.getElementById('wush-sound');
        wushSound.play();


    });
});