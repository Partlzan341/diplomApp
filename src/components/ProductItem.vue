<template>
    <div class="products">
        <h2 class="products-title">Товары</h2>
        <div class="products-list">
            <div v-for="product in products" :key="product.id" class="product-item">
                <img :src="product.image" :alt="product.name" class="product-image">
                <div class="product-details">
                    <h3 class="product-name">{{ product.name }}</h3>
                    <p class="product-price">{{ product.price }} ₽</p>
                    <button @click="addToCart(product)">Добавить в корзину</button>
                    <router-link :to="'/product/' + product.id">Подробнее</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
    name: "Product",
    data() {
        return {
            products: [],
            errors: [],
        };
    },
    created() {
        axios
            .get('http://192.168.7.8:8080/products')
            .then((response) => {
                this.products = response.data; // Сохраняем данные продуктов
            })
            .catch((error) => {
                this.errors.push(error);
            });
    },
    methods: {
        ...mapActions(['addToCart']),
    },
};
</script>

<style scoped>
.products-title {
    font-size: 24px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.products-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}

.product-item {
    margin-left: 5px;
    border: 1px solid #1b1b1b;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
}

.product-details {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.product-name {
    font-size: 18px;
    margin: 10px 0;
}

.product-price {
    font-size: 16px;
    color: #000;
}

button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}

button:hover {
    background-color: #0056b3;
}

.router-link {
    margin-top: 10px;
    text-decoration: none;
    color: #007bff;
    cursor: pointer;
}

/* Медиа-запрос для мобильных устройств */
@media (max-width: 600px) {
    .products-list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .product-item {
        width: 100%;
        max-width: 400px;
        margin-bottom: 20px;
    }

    .product-image {
        margin: 0 auto 10px;
    }

    .product-details {
        width: 100%;
    }
}
</style>
