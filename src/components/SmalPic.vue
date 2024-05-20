<template>
    <div class="block-image">
        <img src="/src/assets/image1.svg" alt="1">
    </div>
</template>

<style scoped>
.block-image {
    margin-top: 10px;
    max-width: 100%; /* Ширина блока ограничена максимальной шириной экрана */
}

.block-image img {
    width: 100%; /* Изображение занимает всю доступную ширину блока */
    height: auto; /* Сохраняем соотношение сторон */
}

/* Медиа-запрос для мобильных устройств */
@media (max-width: 768px) {
    .block-image {
        margin-top: 10px; /* Уменьшаем отступ сверху на мобильных устройствах */
    }
}
</style>
