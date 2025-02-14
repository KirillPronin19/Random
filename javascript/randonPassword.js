function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+?><:{}[]";
    let password = "";
    for (let i = 0; i < 16; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

function animatePasswordReveal(password, element) {
    let maskedPassword = Array(password.length).fill("*");
    element.textContent = maskedPassword.join("");
    element.style.display = "block";
    
    let index = 0;
    let interval = setInterval(() => {
        if (index < password.length) {
            maskedPassword[index] = password[index];
            element.textContent = maskedPassword.join("");
            index++;
        } else {
            clearInterval(interval);
        }
    }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".randomPassword");
    if (!container) return;
    
    const button = container.querySelector("#generatePasswordBtn");
    const passwordBlock = container.querySelector("#passwordBlock");
    
    if (!button || !passwordBlock) return;
    
    button.addEventListener("click", () => {
        const password = generatePassword();
        passwordBlock.textContent = ""; // Очистка перед анимацией
        animatePasswordReveal(password, passwordBlock);
    });
});
