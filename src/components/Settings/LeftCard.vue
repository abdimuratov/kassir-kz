<template>
  <div class="leftCard">
    <div class="userInfo">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOnMmOpZGJs5tB3cswAr71EATXJG8nm7TQQ&usqp=CAU"
        alt="avatar"
      />

      <div>
        <div class="userInfo-name">{{ user.first_name }} {{ user.last_name }}</div>

        <div class="userInfo-email">{{ user.email }}</div>
      </div>
    </div>
    <div class="navbar">
      <router-link to="/settings/personal" class="navbar-item"
        >Личные данные</router-link
      >

      <router-link to="/settings/tickets" class="navbar-item"
        >Билеты</router-link
      >

      <router-link to="/settings/bonuses" class="navbar-item"
        >Бонусы</router-link
      >

      <router-link to="/settings/favourite" class="navbar-item"
        >Избранное</router-link
      >

      <router-link to="/" class="navbar-item">Выход</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(['user']),
  },
};
</script>

<style lang="scss" scoped>
.leftCard {
  margin-right: auto;
}

.userInfo {
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    background-color: #ededed;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
  }

  &-name {
    font-weight: 700;
  }

  &-email {
    margin-top: 6px;
    color: #999999;
  }
}

a.router-link-active {
  color: #959595;
}

.navbar {
  display: flex;
  flex-direction: column;
  max-width: 270px;
  margin-top: 42px;
  padding: 24px;
  border-radius: 8px;
  background-color: #f8f8f8;

  &-item {
    color: #000;
    text-decoration: none;
    margin-bottom: 24px;
    font-size: 24px;

    &:last-child {
      margin-bottom: 0;
    }

    &-active {
      color: #959595;
    }
  }
}
</style>