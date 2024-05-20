<template>
    <div class="image-block">
        <img src="/src/assets/Картинка.svg" alt="Img1">
    </div>
</template>

<style scoped>
.image-block {
    margin-top: 30px;
    display: flex;
    justify-content: center; /* Центрирование изображения по горизонтали */
}

.image-block img {
    max-width: 100%; /* Изображение будет масштабироваться до ширины блока */
    height: auto; /* Сохраняем соотношение сторон */
}

/* Медиа-запрос для мобильных устройств (ширина экрана до 600px) */
@media (max-width: 600px) {
    .image-block {
        margin-top: 20px; /* Уменьшаем отступ сверху для мобильных устройств */
    }
}

/* Медиа-запрос для планшетов (ширина экрана от 601px до 1024px) */
@media (min-width: 601px) and (max-width: 1024px) {
    .image-block img {
        max-width: 80%; /* Уменьшаем максимальную ширину изображения для планшетов */
    }
}
</style>
