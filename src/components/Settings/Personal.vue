<template>
  <div class="personal">
    <div class="title">Личные данные</div>

    <div class="description">Ваше имя, почта и пароль</div>

    <div class="personal-item">
      <div class="personal-item-title">Имя и аватар</div>
      <button type="button" class="personal-item-button">Изменить</button>
    </div>

    <div class="userInfo mb-40">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOnMmOpZGJs5tB3cswAr71EATXJG8nm7TQQ&usqp=CAU"
        alt="avatar"
      />
      <div>
        <div>{{ user.first_name}} {{ user.last_name }}</div>

        <div class="userInfo-username">+add username</div>
      </div>
    </div>

    <div class="personal-item-title mb-18">Пол</div>

    <form class="gender mb-40">
      <label class="rad-label">
        <input
          class="rad-input"
          id="radio-1"
          type="radio"
          value="Male"
          :checked="user.gender === 'Male'"
        />

        <div class="rad-design"></div>

        <div class="rad-text">Мужской</div>
      </label>

      <label class="rad-label">
        <input
          class="rad-input"
          id="radio-1"
          type="radio"
          name="gender"
          value="Female"
          :checked="user.gender === 'Female'"
        />

        <div class="rad-design"></div>

        <div class="rad-text">Женский</div>
      </label>
    </form>

    <div class="personal-item">
      <div class="personal-item-title">Город</div>

      <button type="button" class="personal-item-button">Изменить</button>
    </div>

    <div class="mb-40">{{ user.city }}</div>

    <div class="personal-item">
      <div class="personal-item-title">Почта</div>

      <button type="button" class="personal-item-button">Изменить</button>
    </div>

    <div class="mb-40">{{ user.email }}</div>

    <div class="personal-item">
      <div class="personal-item-title">Пароль</div>

      <button type="button" class="personal-item-button">Изменить</button>
    </div>

    <input
      disabled
      class="passwordInput"
      type="password"
      placeholder="........."
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(['user']),
  },
}
</script>

<style lang="scss" scoped>
.personal {
  &-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 18px;

    &-title {
      font-size: 24px;
      font-weight: 700;
    }

    &-button {
      background-color: transparent;
      border: 0;
      color: #999999;
      font-size: 20px;
      cursor: pointer;
    }
  }
}

.userInfo {
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 70px;
    height: 70px;
    margin-right: 15px;
    background-color: #ededed;
    border-radius: 50%;
    object-fit: cover;
  }

  &-username {
    color: #999999;
    margin-top: 6px;
  }
}

.title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
}

.description {
  font-size: 24px;
  margin-bottom: 58px;
}

.gender {
  display: flex;
  flex-direction: row;
}

.passwordInput {
  padding: 0 18px 16px 18px;
  border: 0;
  border-bottom: 1px solid #ccc;

  &::placeholder {
    font-size: 18px;
    font-weight: 700;
    color: #000;
  }

  &:disabled {
    background-color: transparent;
  }
}

.rad-label {
  display: flex;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;

  &:last-child {
    margin-left: 36px;
  }
}

.rad-input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;

  &:checked + .rad-design::before {
    transform: scale(0);
  }
}

.rad-design {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  box-shadow: inset 0px 0px 0px 5px #000;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    box-shadow: inset 0px 0px 0px 1.5px #000;
    background: hsl(0, 0%, 100%);
    transition: 0.3s;
  }
}

.rad-text {
  margin-left: 10px;
}

// .rad-input:checked ~ .rad-text {
//   color: hsl(0, 0%, 40%);
// }
</style>