document.addEventListener("DOMContentLoaded", () => {
    const h2Element = document.querySelector("h2.randomPasswordTitle");
    if (!h2Element) return;
    
    const originalText = h2Element.textContent;
    
    function obfuscateText() {
        let chars = originalText.split("");
        let index = 0;
        let interval = setInterval(() => {
            if (index < chars.length) {
                chars[index] = "*";
                h2Element.textContent = chars.join("");
                index++;
            } else {
                clearInterval(interval);
                setTimeout(revealText, 2000);
            }
        }, 100);
    }
    
    function revealText() {
        let chars = Array(originalText.length).fill("*");
        let index = 0;
        let interval = setInterval(() => {
            if (index < originalText.length) {
                chars[index] = originalText[index];
                h2Element.textContent = chars.join("");
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    }
    
    function startProcess() {
        setTimeout(() => { // Добавляем задержку перед началом анимации
            obfuscateText();
            setInterval(obfuscateText, 10000);
        }, 2000); // 2 секунды задержки
    }
    
    startProcess();
});
