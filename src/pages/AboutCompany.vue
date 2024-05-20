<script setup>
import Header from '../components/Header.vue'
import Navigation from '../components/Navigation.vue'
import SmalPic from '../components/SmalPic.vue'
</script>

<template>
    <Header />
    <Navigation />
    <SmalPic />

    <div class="block-text">
        Организация ООО ТД “Чалви” была основана в 07.11.2017.<br>
        Основной вид деятельности – обработка металлических изделий, также имеются дополнительные виды деятельности:<br>
        - Производство прочих деревянных изделий;<br>
        - Производство изделий из пробки, соломки и материалов для плетения;<br>
        - Производство корзиночных и плетеных изделий;<br>
        - Производство прочей неметаллической минеральной продукции, не включенной в другие группировки.<br>
    </div>
</template>

<style scoped>
.block-text {
    margin-left: 5%; /* Используем проценты для адаптивного отступа слева */
    margin-right: 5%; /* Используем проценты для адаптивного отступа справа */
    margin-top: 20px;
    font-size: 18px;
}

/* Медиа-запрос для мобильных устройств (ширина экрана до 600px) */
@media (max-width: 600px) {
    .block-text {
        margin-left: 0;
        margin-right: 0;
        font-size: 16px; /* Уменьшаем размер шрифта для мобильных устройств */
    }
}

/* Медиа-запрос для планшетов и устройств среднего размера (ширина экрана от 601px до 1024px) */
@media (min-width: 601px) and (max-width: 1024px) {
    .block-text {
        font-size: 17px; /* Небольшое увеличение шрифта для планшетов */
    }
}
</style>
