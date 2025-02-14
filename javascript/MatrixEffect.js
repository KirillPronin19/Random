document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".randomPassword");
    if (!container) return;
    
    const canvas = document.createElement("canvas");
    container.style.position = "relative";
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "-1";
    container.appendChild(canvas);
    
    const ctx = canvas.getContext("2d");
    function resizeCanvas() {
        canvas.width = container.clientWidth;
        canvas.height = container.scrollHeight; // Устанавливаем высоту в зависимости от содержимого блока
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    const chars = "0123456789!@#$%^&*()_+?><:{}[]".split("");
    const fontSize = 16;
    let columns, drops;
    
    function initializeMatrix() {
        columns = Math.floor(canvas.width / fontSize);
        drops = Array(columns).fill(0);
    }
    
    initializeMatrix();
    window.addEventListener("resize", initializeMatrix);
    
    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00bfff"; // Голубой цвет
        ctx.font = fontSize + "px monospace";
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 50);
});
