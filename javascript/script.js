document.getElementById('generateButton').addEventListener('click', function() {
    let min = Number(document.getElementById('minValue').value) || 0;
    let max = Number(document.getElementById('maxValue').value) || Infinity;
    if (min > max) {
        alert('Минимальное значение не может быть больше максимального');
        return;
    }
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let resultBlock = document.getElementById('resultBlock');
    resultBlock.textContent = randomNumber;

    // Устанавливаем текст и добавляем класс для стилей
    resultBlock.textContent = randomNumber;
    resultBlock.classList.add('highlight');
});

// Анимация кубика 
let scenes = document.querySelectorAll(".scene");
    let cubes = document.querySelectorAll(".cube");
    let cubeData = Array.from(cubes).map(() => ({ x: 30, y: 20 }));

    document.addEventListener("mousemove", (event) => {
        scenes.forEach((scene, index) => {
            handleAutoRotation(event, scene, cubes[index], cubeData[index]);
        });
    });

    function handleAutoRotation(event, scene, cube, data) {
        let rect = scene.getBoundingClientRect();
        let cubeCenterX = rect.left + rect.width / 2;
        let cubeCenterY = rect.top + rect.height / 2;

        let distanceX = event.clientX - cubeCenterX;
        let distanceY = event.clientY - cubeCenterY;
        let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance > 1) {
            let rotateSpeed = (600 + distance) * 0.000002; /* Очень медленное движение */
            data.x += distanceX * rotateSpeed;
            data.y -= distanceY * rotateSpeed;
            cube.style.transform = `rotateX(${data.y}deg) rotateY(${data.x}deg)`;
        }
    }