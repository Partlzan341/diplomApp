<template>
    <div class="block-nav">
        <div class="nav">
            <router-link to="/" class="nav-item">Главная</router-link>
            <router-link to="/about-company" class="nav-item">О нас</router-link>
            <router-link to="/products" class="nav-item">Товары</router-link>
            <router-link to="/review" class="nav-item">Отзывы</router-link>
            <router-link to="/contact" class="nav-item">Контакты</router-link>
            <router-link to="/basket" class="nav-item">Корзина</router-link>
        </div>
    </div>
</template>

<style scoped>
.block-nav {
    display: flex;
    justify-content: center; /* Центрирование блока навигации по горизонтали */
    padding: 20px;
}

.nav {
    display: flex;
    justify-content: space-around; /* Распределение элементов по горизонтали */
    align-items: center;
    max-width: 820px; /* Максимальная ширина блока навигации */
    margin-bottom: 20px; /* Отступ между блоками навигации */
}

.nav-item {
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-weight: 500;
    padding: 30px;
    transition: color 0.3s ease; /* Плавное изменение цвета при наведении */
}

.nav-item:hover {
    color: #FF6600;
}

@media (max-width: 768px) {
    .nav {
        flex-direction: column; /* Отображение элементов вертикально на мобильных устройствах */
        align-items: center; /* Центрирование элементов по центру */
    }

    .nav-item {
        margin-bottom: 10px; /* Отступ между элементами при вертикальном расположении */
        padding: 5px;
    }
    
    .nav {
        margin-bottom: 20px; /* Добавляем отступ между блоками навигации на мобильных устройствах */
    }
}
</style>
