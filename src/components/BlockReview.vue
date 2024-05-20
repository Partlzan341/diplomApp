<template>
  <div class="block-review">
    <h2>Все отзывы</h2>
    <div class="review-text" v-for="item in review" :key="item.reviewId">
      <div class="review-text-name">{{ item.name }}</div>
      <div class="date">
        {{ item.dateOfCreate }} В {{ item.timeOfCreate }}
      </div>
      <div class="comment">{{ item.comment }}</div>
    </div>
  </div>
</template>

<style scoped>
.block-review {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Центрирование элементов по горизонтали */
  padding-left: 5%;
  /* Используем проценты для адаптивного отступа слева */
  padding-right: 5%;
  /* Используем проценты для адаптивного отступа справа */
}

.review-text {
  margin-bottom: 10px;
  text-align: center;
  /* Центрирование текста внутри блока */
}

.review-text-name {
  font-weight: 700;
}

.date {
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: 12px;
  text-decoration: underline;
}

.comment {
  font-size: 14px;
}

/* Медиа-запрос для мобильных устройств (ширина экрана до 600px) */
@media (max-width: 600px) {
  .block-review {
    padding-left: 0;
    padding-right: 0;
  }

  .review-text {
    margin-bottom: 15px;
    text-align: center;
    /* Центрирование текста внутри блока на мобильных устройствах */
  }

  .date {
    font-size: 10px;
  }

  .comment {
    font-size: 12px;
  }
}

/* Медиа-запрос для планшетов и устройств среднего размера (ширина экрана от 601px до 1024px) */
@media (min-width: 601px) and (max-width: 1024px) {
  .date {
    font-size: 11px;
  }

  .comment {
    font-size: 13px;
  }
}
</style>

<script>
import axios from "axios";

export default {
  name: "Reviews",
  data() {
    return {
      review: [],
      errors: [],
    };
  },
  created() {
    axios
      .get("http://192.168.7.8:8080/review")
      .then((responce) => {
        this.review = responce.data;
        console.log(responce);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
