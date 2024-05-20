<template>
    <div>
        <Header />
        <Navigation />

        <div class="product-details">
            <h2>{{ product.name }}</h2>
            <img :src="'.'+product.image" :alt="product.name" class="product-image">
            <p>Цена: {{ product.price }} ₽</p>
            <p>Описание: {{ product.description }}</p>
            <router-link to="/products">Вернуться к товарам</router-link>
        </div>
    </div>
</template>

<script scoped>
import Header from '../components/Header.vue';
import Navigation from '../components/Navigation.vue';
import axios from "axios";

export default {
    props: ["id"],
    name: "Products",
    data() {
        return {
            product: {},
            errors: [],
        };
    },
    created() {
        const id = this.id;
        axios
            .get(`http://192.168.7.8:8080/product/${id}`)
            .then((response) => {
                this.product = response.data;
                console.log(response);
            })
            .catch((error) => {
                this.errors.push(error);
            });
    },
    components: {
        Header,
        Navigation,
    },
};
</script>

<style scoped>
.product-details {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
}

.product-image {
    width: 100%;
    /* Изменяем ширину изображения на 100% для адаптивности */
    height: 300px;
    /* Автоматическое вычисление высоты */
    max-width: 300px;
    /* Максимальная ширина изображения для предотвращения растягивания */
    margin-bottom: 10px;
}

/* Медиа-запрос для мобильных устройств */
@media (max-width: 600px) {
    .product-details {
        padding: 10px;
        /* Уменьшаем отступы для маленьких экранов */
    }

    .product-image {
        max-width: 200px;
        /* Уменьшаем максимальную ширину изображения для маленьких экранов */
    }
}
</style>
