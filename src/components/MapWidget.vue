<template>
    <div class="map-widget">
        <iframe
            src="https://yandex.ru/map-widget/v1/?ll=86.061746%2C55.363506&mode=whatshere&whatshere%5Bpoint%5D=86.054267%2C55.363742&whatshere%5Bzoom%5D=17&z=15.26"
            frameborder="0" allowfullscreen="true"></iframe>
    </div>
</template>

<style scoped>
.map-widget {
    padding-top: 10px;
    text-align: center;
}

/* Медиа-запрос для мобильных устройств */
@media (max-width: 768px) {
    .map-widget iframe {
        width: 100%; /* Занимает всю ширину контейнера */
        height: 300px; /* Фиксированная высота для мобильных устройств */
    }
}

/* Медиа-запрос для планшетов и десктопов */
@media (min-width: 769px) {
    .map-widget iframe {
        width: 80%; /* Занимает 80% ширины контейнера */
        height: 400px; /* Фиксированная высота для планшетов и десктопов */
    }
}
</style>
