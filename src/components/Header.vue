<template>
    <div class="block">
        <div class="block-item">
            <div class="block-item__cover">
                <img src="/src/assets/Logo.jpg" alt="Логотип">
            </div>
            <div class="block-item__content">
                <h3 class="block-item__title">ООО ТД "Чалви"</h3>
                <div class="block-item__text">Организация,<br>обрабатывающая<br>металлические изделия</div>
            </div>
        </div>
        <div class="block-number" v-show="isLogin()">
            <div class="block-number-frame">
                <img class="block-number-frame-img" src="/src/assets/Frame.svg" alt="2">
            </div>
            <div class="block-number-text">
                +7 (384)249-93-96
            </div>
         </div>
    </div>
</template>

<style scoped>
.block {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 20px;
    display: flex;
    justify-content: center; /* Центрируем по горизонтали на маленьких экранах */
    align-items: center; /* Центрируем по вертикали */
}

.block-item {
    display: flex;
    align-items: center; /* Центрируем элементы по вертикали */
}

.block-item__cover {
    width: 115px;
    max-height: 100px;
    object-fit: contain;
    margin-right: 20px; /* Отступ справа от изображения */
}

.block-item__content {
    flex-grow: 1; /* Занимаем все доступное пространство */
}

.block-item__title {
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(to right, #FF6600, #FFFF00);
    font-size: 20px;
    font-weight: 800;
    margin-top: 0;
    margin-bottom: 5px;
}

.block-item__text {
    font-size: 19px;
    margin-top: 3px;
    margin-bottom: 0;
}

.block-number {
    background-color: #323843;
    display: flex;
    position: absolute;
    align-items: center;
    right: 0;
    margin-right: 2px;
}

.block-number-text {
    display: flex;
    justify-content: center; /* Центрируем по горизонтали */
    align-items: center; /* Центрируем по вертикали */
    color: #4492DA;
    font-size: 20px;
    height: 100%; /* Задаем высоту блока, чтобы применилось выравнивание по вертикали */
}

.block-number-frame-img {
    width: 100%;
    max-width: 32px;
    padding-top: 7px;
}

.block-item__cover img {
    width: 100%;
    max-width: 115px;
    min-width: 20px;
    max-height: 100px;
}

/* Медиа-запрос для мобильных устройств */
@media (max-width: 600px) {
    .block-item {
        padding-top: 50px;
        flex-direction: column; /* Располагаем элементы блока друг под другом на маленьких экранах */
        text-align: center; /* Центрируем текст по центру */
    }

    .block-item__cover {
        margin-right: 0; /* Убираем отступ справа от изображения */
        margin-bottom: 10px; /* Добавляем отступ снизу */
    }

    .block-number {
        position: fixed; /* Зафиксируем элемент */
        top: 0; /* Расположим в самом верху страницы */
        left: 0; /* Расположим в самом начале страницы */
        background-color: #323843; /* Цвет фона */
        display: flex; /* Отображаем как flex-контейнер */
        justify-content: space-between; /* Распределяем элементы по ширине */
        align-items: center; /* Центрируем по вертикали */
        padding: 10px; /* Добавляем отступы вокруг содержимого */
        z-index: 1000; /* Устанавливаем высокий z-index, чтобы был выше других элементов */
    }

    .block-number-text {
        color: #4492DA; /* Цвет текста */
        font-size: 20px; /* Размер текста */
    }
}
</style>

<script>
export default {
    methods: {
        isLogin() {
            return this.$route.name === 'Contact';
        }
    }
};
</script>
