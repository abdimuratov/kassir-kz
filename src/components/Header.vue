<template>
  <div class="header">
    <div class="header-container">
      <div class="header-leftCard">
        <div class="header-logo">KASSIR.KZ</div>
        <div class="search">
          <i class="icon icon-search"></i>
          <input type="text" placeholder="Артисты, мероприятия, концерты" />
        </div>
      </div>
      <div class="header-rightCard">
        <select>
          <option value="ru">Ру</option>
          <option value="en">En</option>
          <option value="kz">Қаз</option>
        </select>
        <div
          class="toggle"
          :class="{ 'toggle-active': isActive }"
          @click="isActive = !isActive"
        >
          <i class="toggle-indicator"></i>
        </div>
        <i class="icon icon-favourite"></i>
        <div class="user">
          <img
            class="user-avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOnMmOpZGJs5tB3cswAr71EATXJG8nm7TQQ&usqp=CAU"
            alt=""
          />
          <div>{{ user.first_name }}</div>
        </div>
      </div>
    </div>
    <div class="header-container">
      <div class="header-leftCard">
        <div class="navbar-link">Концерты</div>
        <div class="navbar-link">Театры</div>
        <div class="navbar-link">Спорт</div>
        <div class="navbar-link">Мастер-классы</div>
        <div class="navbar-link">Детям</div>
        <div class="navbar-link">Туры</div>
      </div>
      <div class="header-rightCard">
        <i class="icon icon-location"></i>
        <select class="header-city">
          <option selected value="almaty">Алматы</option>
          <option value="astana">Астана</option>
          <option value="shymkent">Шымкент</option>
        </select>
        <i class="icon icon-calendar"></i>
        <select class="header-day">
          <option value="yesterday">Вчера</option>
          <option selecteD value="Today">Сегодня</option>
          <option value="tomorrow">Завтра</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      isActive: false,
    };
  },

  computed: {
    ...mapState(['user']),
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 18px 92px;
  font-size: 18px;
  z-index: 1;

  &-container {
    margin-bottom: 18px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &-leftCard {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
  }

  &-logo {
    font-size: 32px;
    font-weight: 700;
  }

  &-rightCard {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &-city {
    margin-right: 30px;
  }

  &-city,
  &-day {
    margin-left: 4px;
  }
}

.search {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0.5px solid #ccc;
  border-radius: 8px;
  padding: 13px 10px;
  width: 100%;
  max-width: 397px;

  input {
    width: 100%;
    border: 0;
    margin-left: 10px;

    &::placeholder {
      color: #acacac;
    }

    &:focus {
      border: 0;
    }
  }
}

.toggle {
  position: relative;
  display: block;
  width: 42px;
  height: 26px;
  border-radius: 13px;
  background-color: #ededed;
  cursor: pointer;
  margin: 0 25px 0 15px;

  &-indicator {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 22px;
    height: 22px;
    box-shadow: inset 0px 0px 0px 0.5px rgba(0, 0, 0, 0.04);
    border-radius: 50%;
    background-color: #fff;
    transition: 0.5s;
  }

  &-active {
    .toggle-indicator {
      left: 18px;
    }
  }
}

.user {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;

  &-avatar {
    width: 35px;
    height: 35px;
    background-color: #ededed;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
}

.navbar {
  &-link {
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }
}

@media (min-width: 1024px) {
  .header {
    &-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &-logo {
      margin-right: 40px;
    }
  }
}
</style>