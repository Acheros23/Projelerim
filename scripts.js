// Formun gönderilmesi sırasında validasyon kontrolü
document.querySelector('form').addEventListener('submit', function(event) {
    const password = document.getElementById('ş').value;
    const passwordStrength = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/; // En az bir büyük harf, bir küçük harf ve bir rakam

    // Şifre kontrolü
    if (!passwordStrength.test(password)) {
        alert('Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir ve en az 6 karakter uzunluğunda olmalıdır.');
        event.preventDefault(); // Formun gönderilmesini engeller
    } else {
        alert('Form başarıyla gönderildi!');
    }
});

// E-posta alanı için özel hata mesajı
const emailInput = document.getElementById('mail');
emailInput.addEventListener('invalid', function() {
    emailInput.setCustomValidity('Lütfen geçerli bir e-posta adresi girin.');
});

emailInput.addEventListener('input', function() {
    emailInput.setCustomValidity('');
});

// Ek açıklama alanı için
const addDescriptionButton = document.getElementById('addDescriptionButton'); // Ek açıklama butonuna bir ID ekleyin
const descriptionContainer = document.querySelector('.description-container'); // Açıklama alanlarını tutacak bir div

// Ek açıklama butonuna tıklama olayı
if (addDescriptionButton && descriptionContainer) {
    addDescriptionButton.addEventListener('click', function(event) {
        event.preventDefault(); // Butonun varsayılan davranışını engeller
        const newDescriptionInput = document.createElement('textarea'); // Yeni açıklama alanı
        newDescriptionInput.placeholder = 'Ek açıklama yapın...';
        newDescriptionInput.className = 'form-control mb-3'; // Bootstrap stil sınıfı
        descriptionContainer.appendChild(newDescriptionInput); // Açıklama alanını ekler
    });
}
