document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("generateButton");

    if (button) {
        button.addEventListener("touchstart", function () {
            button.classList.add("active");
        });

        button.addEventListener("touchend", function () {
            setTimeout(() => {
                button.classList.remove("active");
            }, 200); // Небольшая задержка перед возвратом
        });
    }
});
