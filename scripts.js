document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.container').classList.remove('hidden');
    }, 3000); // 3 saniye sonra loader kaybolacak ve içerik görünecek
});
