// Variabel elemen
const colorBtn = document.getElementById('colorBtn');
const textBtn = document.getElementById('textBtn');
const moveBtn = document.getElementById('moveBtn');
const imageBtn = document.getElementById('imageBtn');
const message = document.getElementById('message');
const movingBox = document.getElementById('movingBox');
const clickCount = document.getElementById('clickCount');
const myImage = document.getElementById('myImage');

// Array warna random
const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
const messages = [
    "Hidup Jokowi ",
    "Hidup Blonde ✨",
    "Yo Ndak Tau Kok Tanya Saya 🚀",
    "SAWEEEEETTT 💪",
    "Oke gas😄"
];

// Array gambar (dari Unsplash)
const images = [
    'https://id.pinterest.com/pin/491385009365657419/',
    'https://www.instagram.com/p/DNWozOPy3nS/',
    'https://id.pinterest.com/pin/236931630391078875/',
    'https://satujabar.com/wp-content/uploads/2024/08/Bahlil-Lahadalia.jpg'
];

// Counter klik
let count = 0;

// Fungsi update counter
function updateCounter() {
    count++;
    clickCount.textContent = count;
    
    // Efek saat counter berubah
    clickCount.style.transform = 'scale(1.2)';
    setTimeout(() => {
        clickCount.style.transform = 'scale(1)';
    }, 200);
}

// 1. Tombol Ubah Warna
colorBtn.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    message.style.backgroundColor = randomColor;
    message.style.color = 'white';
    message.innerHTML = `<i class="fas fa-palette"></i> Warna berubah ke: ${randomColor}`;
    
    // Efek pada tombol
    this.style.background = `linear-gradient(to right, ${randomColor} 0%, #00f2fe 100%)`;
    
    updateCounter();
});

// 2. Tombol Ubah Teks
textBtn.addEventListener('click', function() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.innerHTML = `<i class="fas fa-comment"></i> ${randomMessage}`;
    message.style.backgroundColor = '#f8f9fa';
    message.style.color = '#333';
    message.style.borderLeftColor = '#4facfe';
    
    updateCounter();
});

// 3. Tombol Pindahkan Kotak
let position = 0;
moveBtn.addEventListener('click', function() {
    position = (position + 1) % 3;
    
    switch(position) {
        case 0:
            movingBox.style.transform = 'translateX(0)';
            movingBox.innerHTML = 'POSISI 1';
            movingBox.style.background = 'linear-gradient(45deg, #ff6b6b, #ffa726)';
            break;
        case 1:
            movingBox.style.transform = 'translateX(100px)';
            movingBox.innerHTML = 'POSISI 2';
            movingBox.style.background = 'linear-gradient(45deg, #4ecdc4, #45b7d1)';
            break;
        case 2:
            movingBox.style.transform = 'translateX(-100px)';
            movingBox.innerHTML = 'POSISI 3';
            movingBox.style.background = 'linear-gradient(45deg, #96ceb4, #feca57)';
            break;
    }
    
    message.innerHTML = `<i class="fas fa-arrows-alt"></i> Kotak dipindahkan ke posisi ${position + 1}`;
    
    updateCounter();
});

// 4. Tombol Ubah Gambar
let imageIndex = 0;
imageBtn.addEventListener('click', function() {
    imageIndex = (imageIndex + 1) % images.length;
    myImage.style.opacity = '0.5';
    
    setTimeout(() => {
        myImage.src = images[imageIndex];
        myImage.style.opacity = '1';
    }, 300);
    
    message.innerHTML = `<i class="fas fa-image"></i> Gambar diubah ke gambar ${imageIndex + 1}`;
    
    updateCounter();
});

// Efek hover pada kotak
movingBox.addEventListener('mouseenter', function() {
    this.style.transform += ' scale(1.1) rotate(5deg)';
});

movingBox.addEventListener('mouseleave', function() {
    this.style.transform = this.style.transform.replace(' scale(1.1) rotate(5deg)', '');
});

// Pesan awal
message.innerHTML = `
    <div>
        <i class="fas fa-hand-pointer" style="font-size: 1.5rem; color: #4facfe;"></i><br>
        Klik tombol-tombol di atas untuk melihat keajaiban!<br>
        <small>Setiap klik akan menghitung di counter</small>
    </div>
`;
movingBox.innerHTML = 'KOTAK<br>INTERAKTIF';
