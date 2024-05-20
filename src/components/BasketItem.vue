<template>
    <div class="cart">
        <h2 class="cart-title">Корзина</h2>
        <div class="cart-items">
            <div class="cart-header">
                <div class="cart-header-item">Изображение</div>
                <div class="cart-header-item">Название</div>
                <div class="cart-header-item">Цена</div>
                <div class="cart-header-item">Количество</div>
                <div class="cart-header-item">Удалить</div>
            </div>
            <div v-for="(item, index) in cartItems" :key="item.id"
                :class="['cart-item', { 'cart-item-border': index < cartItems.length - 1 }]">
                <img :src="item.image" :alt="item.name" class="cart-item-image">
                <div class="cart-item-details">
                    <h3 class="cart-item-name">{{ item.name }}</h3>
                </div>
                <div class="cart-item-price">
                    <p>{{ item.price }} ₽</p>
                </div>
                <div class="cart-item-quantity">
                    <button @click="decreaseQuantity(item.id)">-</button>
                    <span>{{ item.quantity }}</span>
                    <button @click="increaseQuantity(item.id)">+</button>
                </div>
                <button @click="removeFromCart(item.id)" class="remove-item">Удалить</button>
            </div>
        </div>
        <div class="cart-total">
            <h3>Итого: {{ cartTotal }} ₽</h3>
            <button class="checkout-button">Оформить заказ</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Basket',
    computed: {
        ...mapGetters(['cartItems', 'cartTotal']),
    },
    methods: {
        ...mapActions(['removeFromCart', 'increaseQuantity', 'decreaseQuantity']),
    },
};
</script>

<style scoped>
.cart {
    margin: 20px;
    padding: 20px;
    border: 1px solid #585656;
    border-radius: 5px;
}

.cart-title {
    font-size: 24px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cart-items {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
}

.cart-header {
    display: contents;
}

.cart-header-item {
    font-weight: bold;
    text-align: center;
    border-bottom: 1px solid #585656;
    padding-bottom: 10px;
}

.cart-item {
    display: contents;
}

.cart-item-border {
    border-bottom: 1px solid #585656;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.cart-item-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 0 auto;
}

.cart-item-details {
    display: flex;
    align-items: center;
    justify-content: center;
}

.cart-item-name {
    font-size: 18px;
    margin: 0;
}

.cart-item-price {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #000000;
    text-align: center;
}

.cart-item-quantity {
    display: flex;
    align-items: center;
    justify-content: center;
}

.cart-item-quantity button {
    width: 30px;
    height: 30px;
    margin: 0 5px;
}

.remove-item {
    background-color: #ff4d4d;
    border: none;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
}

.cart-total {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.checkout-button {
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

/* Медиа-запрос для мобильных устройств */
@media (max-width: 600px) {
    .cart-items {
        display: block;
    }

    .cart-header {
        display: none;
    }

    .cart-item {
        border-bottom: 1px solid #585656;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }

    .cart-item-image {
        margin: 0 auto 10px;
        display: block;
    }

    .cart-item-details,
    .cart-item-price,
    .cart-item-quantity {
        margin: 5px 0;
    }

    .remove-item {
        display: block;
        width: 100%;
        text-align: center;
        margin-top: 10px;
    }

    .cart-item-quantity {
        display: flex;
        justify-content: center;
    }

    .cart-total {
        flex-direction: column;
        align-items: flex-start;
    }

    .checkout-button {
        width: 100%;
        text-align: center;
    }
}
</style>
