// Formun gönderilmesi sırasında validasyon kontrolü
document.querySelector('form').addEventListener('submit', function (event) {
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
emailInput.addEventListener('invalid', function () {
    emailInput.setCustomValidity('Lütfen geçerli bir e-posta adresi girin.');
});

emailInput.addEventListener('input', function () {
    emailInput.setCustomValidity('');
});

// Ek açıklama alanı için
const addDescriptionButton = document.getElementById('addDescriptionButton'); // Ek açıklama butonuna bir ID ekleyin
const descriptionContainer = document.querySelector('.description-container'); // Açıklama alanlarını tutacak bir div

// Ek açıklama butonuna tıklama olayı
if (addDescriptionButton && descriptionContainer) {
    addDescriptionButton.addEventListener('click', function (event) {
        event.preventDefault(); // Butonun varsayılan davranışını engeller
        const newDescriptionInput = document.createElement('textarea'); // Yeni açıklama alanı
        newDescriptionInput.placeholder = 'Ek açıklama yapın...';
        newDescriptionInput.className = 'form-control mb-3'; // Bootstrap stil sınıfı
        descriptionContainer.appendChild(newDescriptionInput); // Açıklama alanını ekler
    });
}
// Şifre gücü göstergesi
const passwordInput = document.getElementById('ş');
const passwordStrengthMeter = document.createElement('div');
passwordStrengthMeter.style.height = '5px';
passwordStrengthMeter.style.width = '100%';
passwordStrengthMeter.style.backgroundColor = '#f7f7f7';
passwordStrengthMeter.style.borderRadius = '5px';
passwordInput.parentElement.appendChild(passwordStrengthMeter);

passwordInput.addEventListener('input', function () {
    const password = passwordInput.value;
    let strength = 0;

    if (password.length >= 6) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;

    switch (strength) {
        case 1:
            passwordStrengthMeter.style.backgroundColor = '#e74c3c'; // Kırmızı
            break;
        case 2:
            passwordStrengthMeter.style.backgroundColor = '#f39c12'; // Sarı
            break;
        case 3:
            passwordStrengthMeter.style.backgroundColor = '#f1c40f'; // Sarı-yeşil
            break;
        case 4:
            passwordStrengthMeter.style.backgroundColor = '#2ecc71'; // Yeşil
            break;
        default:
            passwordStrengthMeter.style.backgroundColor = '#f7f7f7'; // Boş
            break;
    }
});
document.querySelector('form').addEventListener('submit', function (event) {
    const password = document.getElementById('ş').value;
    const passwordStrength = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/;

    // Şifre kontrolü
    if (!passwordStrength.test(password)) {
        alert('Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir ve en az 6 karakter uzunluğunda olmalıdır.');
        event.preventDefault(); // Formun gönderilmesini engeller
    } else {
        alert('Form başarıyla gönderildi!');
    }
});


