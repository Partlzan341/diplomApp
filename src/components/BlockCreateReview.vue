<template>
    <div class="contact-form">
        <h2>Ваш отзыв</h2>
        <div class="block-create-review">
            <input type="text" v-model="name" placeholder="Имя" />
            <input type="text" v-model="review" placeholder="Отзыв" />
            <button class="button" @click="sendReview">Оставить отзыв</button>
        </div>
    </div>
</template>

<style scoped>
.contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.block-create-review {
    padding-left: 10px;
    max-width: 300px;
    /* Максимальная ширина блока для мобильных устройств */
    width: 100%;
    /* Занимает всю доступную ширину */
}

input[type="text"] {
    padding: 10px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 100%;
    /* Занимает всю доступную ширину */
    transition: border-color 0.3s ease;
}

input[type="text"]:focus {
    border-color: dodgerblue;
}

.button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #FF9800;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
    /* Занимает всю доступную ширину */
}

.button:hover {
    background-color: deepskyblue;
}

/* Медиа-запрос для мобильных устройств (ширина экрана до 600px) */
@media (max-width: 600px) {
    .block-create-review {
        max-width: 100%;
        /* Максимальная ширина блока для мобильных устройств */
    }
}
</style>

<script>
import axios from 'axios';

export default {
    // Pushes posts to the server when called.
    methods: {
        sendReview: function () {
            if (!this.name.trim() || !this.review.trim()) {
                this.error = 'Пожалуйста, заполните все поля';
                alert("Заполните все поля")
                return;
            }
            const name = this.name;
            const review = this.review;
            const currentDate = getCurrentDate();
            const currentTime = getCurrentTime();

            axios.post('http://192.168.7.8:8080/create-review', {
                name: name,
                comment: review,
                dateOfCreate: currentDate,
                timeOfCreate: currentTime                           // судя из примеров body это тело запроса (axios преобразует автоматом в json формат)
            })
                .then(response => { console.log(response.data) })
                .catch(e => {
                    this.errors.push(e)
                })
            location.reload();
        }
    }
}

function getCurrentDate() {
    // Создаем объект Date для текущей даты и времени
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Месяц начинается с 0
    const day = String(currentDate.getDate()).padStart(2, '0');
    const currentDatee = `${year}-${month}-${day} `;

    return currentDatee;
}
function getCurrentTime() {
    const currentDate = new Date();

    // Получаем компоненты даты и времени
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    // Формируем строку с текущей датой и временем
    const currentTime = `${hours}:${minutes}:${seconds}`;

    return currentTime;
}
</script>