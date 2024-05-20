<template>
    <div class="block-contact">
        <div class="block-contact-text">
            <p>Контакты <br>
                Звоните: +7 (384)249-93-96 <br>
                Пишите: chalvi-market@mail.ru <br>
                Приезжайте: г. Кемероо, пр-т Советский 2/8 <br>
                Время работы: 9:00 - 18:00
            </p>
        </div>
        <div class="block-contact-form">
            <div>
                <input class="text" type="text" v-model="name" placeholder="Имя">
            </div>
            <div>
                <input class="text" type="text" v-model="email" placeholder="E-mail">
            </div>
            <div>
                <input class="text" type="text" v-model="title" placeholder="Тема">
            </div>
            <div>
                <textarea class="text-submit" v-model="message" placeholder="Сообщение"></textarea>
            </div>
            <div>
                <button class="button-submit" @click="sendEmailMessage">
                    Отправить
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.block-contact {
    margin-top: 10px;
    padding-left: 5%;
    /* Адаптивный отступ слева */
    padding-right: 5%;
    /* Адаптивный отступ справа */
    display: grid;
    grid-template-columns: 1fr;
    /* Один элемент в строку на мобильных устройствах */
    gap: 10px;
    /* Пространство между элементами */
}

.block-contact-text {
    font-size: 20px;
}

.block-contact-form {
    display: grid;
    grid-template-columns: 1fr;
    /* Один элемент в строку на мобильных устройствах */
    gap: 10px;
    /* Пространство между элементами */
}

.text,
.text-submit {
    width: 100%;
    /* Занимает всю доступную ширину контейнера */
    height: 40px;
    /* Высота текстовых полей и textarea */
    padding: 10px;
    /* Внутренний отступ вокруг текстовых полей и textarea */
    font-size: 16px;
    border: 1px solid #999;
    border-radius: 5px;
    background-color: #EEEEEE;
}

.text-submit {
    height: 120px;
    /* Высота textarea для сообщения */
}

.button-submit {
    width: 100%;
    /* Занимает всю доступную ширину контейнера */
    height: 50px;
    /* Высота кнопки */
    padding: 10px 20px;
    background-color: #FF9800;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button-submit:hover {
    background-color: deepskyblue;
}

/* Медиа-запрос для мобильных устройств */
@media (max-width: 768px) {
    .block-contact {
        padding-left: 5%;
        /* Адаптивный отступ слева */
        padding-right: 5%;
        /* Адаптивный отступ справа */
    }

    .block-contact-form {
        grid-template-columns: 1fr;
        /* Один элемент в строку на мобильных устройствах */
    }
}
</style>

<script>
import axios from 'axios';

export default {
    methods: {
        sendEmailMessage: function () {
            if (!this.name.trim() || !this.email.trim() || !this.title.trim() || !this.message.trim()) {
                this.error = 'Пожалуйста, заполните все поля';
                alert("Заполните все поля")
                return;
            }
            const email = 'pav210975@mail.ru';
            const title = this.title;
            const message = this.message + '. ' + 'С уважением ' + this.name;

            axios.post('http://192.168.7.8:8080/email/send', {
                to: email,
                subject: title,
                body: message                           // судя из примеров body это тело запроса (axios преобразует автоматом в json формат)
            })
                .then(response => { console.log(response.data) })
                .catch(e => {
                    this.errors.push(e)
                })
            location.reload();
        }
    }
}

</script>